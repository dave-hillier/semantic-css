/**
 * Vanilla JS tab helper implementing WCAG APG keyboard navigation.
 * Works with any framework — call initTabs(tablistEl) and it returns a cleanup function.
 */
export function initTabs(tablist: HTMLElement): () => void {
  const tabs = Array.from(
    tablist.querySelectorAll<HTMLElement>('[role="tab"]')
  );

  function selectTab(tab: HTMLElement) {
    for (const t of tabs) {
      const panelId = t.getAttribute("aria-controls");
      const selected = t === tab;
      t.setAttribute("aria-selected", String(selected));
      t.setAttribute("tabindex", selected ? "0" : "-1");
      if (panelId) {
        const panel = document.getElementById(panelId);
        if (panel) panel.hidden = !selected;
      }
    }
    tab.focus();
  }

  function handleClick(event: Event) {
    const tab = (event.target as HTMLElement).closest<HTMLElement>(
      '[role="tab"]'
    );
    if (tab) selectTab(tab);
  }

  function handleKeydown(event: KeyboardEvent) {
    const current = tabs.indexOf(document.activeElement as HTMLElement);
    if (current === -1) return;

    let next: number | undefined;
    if (event.key === "ArrowRight") next = (current + 1) % tabs.length;
    if (event.key === "ArrowLeft")
      next = (current - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;

    if (next !== undefined) {
      event.preventDefault();
      selectTab(tabs[next]);
    }
  }

  tablist.addEventListener("click", handleClick);
  tablist.addEventListener("keydown", handleKeydown);

  return () => {
    tablist.removeEventListener("click", handleClick);
    tablist.removeEventListener("keydown", handleKeydown);
  };
}
