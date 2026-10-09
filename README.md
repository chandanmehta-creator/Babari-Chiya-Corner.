# Babari Chiya Corner

A responsive, frontend-only restaurant website concept built with semantic HTML, CSS, and vanilla JavaScript.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server. No build step or dependency installation is required.

## Updating the menu

All rendered menu cards are stored in the `menuItems` array at the top of `js/main.js`. Update the `name`, `description`, `price`, `category`, or `image` fields there. Prices marked in the brief as ambiguous should be confirmed with the restaurant before publishing.

## Replacing temporary images

The current visual assets use temporary Unsplash URLs so the prototype loads immediately. Replace each URL in `index.html` and `js/main.js` with local files such as `assets/images/momo-veg.jpg`. Keep the existing `alt` text or update it to describe the real image.

## Location link

The directions buttons currently open a Google Maps search for the supplied address. Replace that URL with the restaurant's exact Google Maps place URL once it is confirmed.

## Still to confirm

- Exact Google Maps place link or coordinates
- Final restaurant photography and logo asset
- Any ambiguous menu price mappings from the photographed menu
