/**
 * Vanilla JS dropdown helper for details.dropdown elements.
 * Closes dropdowns on outside click and on menu item selection.
 * Returns a cleanup function.
 */
export function initDropdowns(): () => void {
  function handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    for (const dropdown of document.querySelectorAll<HTMLDetailsElement>(
      "details.dropdown[open]"
    )) {
      if (!dropdown.contains(target)) {
        dropdown.removeAttribute("open");
      }
    }
  }

  function handleItemClick(event: Event) {
    const target = event.target as HTMLElement;
    const item = target.closest(
      "details.dropdown > ul a, details.dropdown > ul button, details.dropdown > menu a, details.dropdown > menu button"
    );
    if (item) {
      const dropdown = item.closest("details.dropdown") as HTMLDetailsElement;
      if (dropdown) dropdown.removeAttribute("open");
    }
  }

  document.addEventListener("click", handleOutsideClick);
  document.addEventListener("click", handleItemClick);

  return () => {
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("click", handleItemClick);
  };
}
