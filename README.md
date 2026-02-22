# Dave's Semantic CSS

A CSS library that styles native HTML elements using design system tokens. No utility classes, no JavaScript framework dependency.

Write semantic HTML and get a consistent, themed UI out of the box.

## Installation

```bash
npm install daves-semantic-css
```

Then import in your CSS:

```css
@import "daves-semantic-css/lib/semantic.css";
```

Or link directly in HTML:

```html
<link rel="stylesheet" href="node_modules/daves-semantic-css/lib/semantic.css">
```

## How it works

The library targets native HTML elements, ARIA roles, and data attributes rather than utility classes. Class names describe **what something is** (taxonomy) rather than how it looks.

```html
<!-- Buttons use native elements, variants use taxonomy classes -->
<button>Primary</button>
<button class="secondary">Secondary</button>
<button class="destructive">Destructive</button>

<!-- Alerts use ARIA roles -->
<div role="alert" class="success">Operation completed.</div>

<!-- Badges use data attributes -->
<span data-badge class="warning">Pending</span>

<!-- Accordions use native details/summary -->
<details>
  <summary>Click to expand</summary>
  <p>Content here.</p>
</details>
```

## Dark mode

Add `class="dark"` to the `<html>` element. All color tokens switch automatically.

```html
<html class="dark">
```

## What's included

### Design tokens (`lib/tokens.css`)

- Color palettes (primary, info, neutral, success, warning, danger, accent) with 11 shades each
- Semantic color aliases that adapt between light and dark modes
- Typography scale (font sizes, weights, line heights, letter spacing)
- Border radius, shadows, and overlay tokens

### Elements

- Typography (headings, paragraphs, inline elements, lists, code blocks)
- Buttons (primary, secondary, destructive, outline, ghost, link variants; sm/lg sizes)
- Forms (inputs, selects, textareas, checkboxes, radios, switches, file, color, range)
- Tables
- Figures

### WCAG APG Patterns

22 patterns built on semantic HTML and ARIA:

| Pattern | Element / Role |
|---|---|
| Accordion | `<details>` / `<summary>` |
| Alert | `role="alert"` |
| App Shell | `.app-shell` |
| Aside | `<aside>` |
| Avatar | `data-avatar` |
| Badge | `data-badge` |
| Breadcrumb | `<nav aria-label="Breadcrumb">` |
| Card | `<article>` |
| Dialog | `<dialog>` |
| Dropdown | `<details class="dropdown">` |
| Feed | `role="feed"` |
| Group | `role="group"` |
| Listbox | `role="listbox"` |
| Menu | `role="menu"` / `role="menubar"` |
| Nav | `<nav>` |
| Progress | `<progress>` / `<meter>` |
| Separator | `role="separator"` |
| Skeleton | `aria-busy="true"` |
| Tabs | `role="tablist"` |
| Toggle | `aria-pressed` |
| Toolbar | `role="toolbar"` |
| Tooltip | `data-tooltip` |

### JavaScript helpers (`helpers/`)

Optional helpers for patterns that need interactivity:

- `tabs.ts` -- keyboard navigation for tab panels
- `dropdown.ts` -- close-on-outside-click for dropdown menus

## Demo

Open `demo.html` locally to see all components, or browse the [live demo](https://dave-hillier.github.io/daves-semantic-css/demo.html).

## License

MIT
