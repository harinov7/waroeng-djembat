# Warung Djembat — React + Tailwind

Drop-in components for the Warung Djembat single-page site.

## What's inside

```
tailwind.config.js       brand colors + fonts (extend, doesn't replace, your existing config)
postcss.config.js        standard Tailwind/Autoprefixer setup
src/
  index.css              Tailwind directives + Google Fonts import
  App.jsx                composes all sections
  assets/logo.jpg         the Waroeng Nasi Djembat logo you sent
  hooks/useReveal.js      IntersectionObserver hook for scroll-reveal
  components/
    Reveal.jsx            wrapper that fades/slides children in on scroll
    Navbar.jsx            dark navbar (desktop), real logo, hamburger trigger
    Sidebar.jsx           slide-in drawer + overlay for tablet/phone
    Hero.jsx
    Profile.jsx
    Menu.jsx              category tabs + menu grid (the section you liked)
    Reviews.jsx
    Location.jsx
    Linktree.jsx
    Footer.jsx
```

## Setup in an existing project

1. **Install Tailwind** if you haven't already:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```
2. Copy `tailwind.config.js` and `postcss.config.js` into your project root — or merge the
   `theme.extend.colors.brand` and `theme.extend.fontFamily` blocks into your existing config.
3. Copy everything under `src/` into your project's `src/` folder, keeping the folder structure
   (`components/`, `hooks/`, `assets/`).
4. Make sure `src/index.css` (or wherever your Tailwind directives live) includes the `@import`
   line at the top — that's what pulls in Fraunces and Plus Jakarta Sans. If you already import
   fonts in `index.html`, you can move that line there instead.
5. Render `<App />` from your entry point (`main.jsx` / `index.jsx`):
   ```jsx
   import App from './App';
   import './index.css';

   ReactDOM.createRoot(document.getElementById('root')).render(<App />);
   ```

## What changed from the HTML version

- **Navbar** is now a solid deep-ink (`brand-ink`, `#2A1D12`) background instead of translucent
  white, so the links and hamburger icon read with much more contrast against the hero.
- **Logo** — your uploaded `WAROENG NASI DJEMBAT` mark now replaces every spot that used to hold
  the placeholder kujang/bridge illustration: the navbar, the sidebar, the hero visual, and the
  footer.
- **Scroll animations** — `useReveal.js` wraps `IntersectionObserver`; the `<Reveal>` component
  uses it to fade + slide content up the first time it scrolls into view (staggered slightly on
  grids like the menu and reviews). It respects `prefers-reduced-motion` by skipping straight to
  visible.
- **Menu section** is functionally the same as before — same nine items, same category tabs —
  just rebuilt with React state instead of vanilla JS `data-cat` filtering.

## Notes

- All copy is placeholder (address, phone number, prices, review names) — swap in the real
  details wherever you see them in each component.
- Colors and type live only in `tailwind.config.js`, so a rebrand is a one-file change.
