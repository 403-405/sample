# Totally Serious Welcome Page (That Is Absolutely Not A Rick Roll)

A tiny static site: open `index.html` in your browser and enjoy the "highly professional" greeting. Resist the urge to click the suspiciously shiny button. Or don't. Choices have consequences (musical ones).

## Features
- Playful welcome hero section
- Hidden (but inevitable) Rick Astley video loaded only on demand
- Accessible markup (ARIA attributes, focus styles, semantic structure)
- Lightweight confetti celebration effect
- Tiny easter egg: press ArrowUp, ArrowDown, ArrowUp, ArrowDown to trigger

## How To Run
It's 100% static:

1. Download / clone the folder.
2. Double‑click `index.html` (or serve with any static server if you want proper MIME types).

Optional local server example (Node installed):
```powershell
# From the project directory
npx serve .
```
Then open the shown URL.

## Customizing
- Replace the YouTube embed ID in `js/main.js` if you want a different (less legendary) video.
- Adjust colors in `css/style.css` under the `:root` variables.
- Change the button text and humor to taste.

## Files
- `index.html` – Structure of the page.
- `css/style.css` – Styling, layout, and confetti animations.
- `js/main.js` – Interactivity (button trigger, confetti, easter egg, accessibility toggling).

## License
Public domain (CC0 / Unlicense vibe). Go wild.
