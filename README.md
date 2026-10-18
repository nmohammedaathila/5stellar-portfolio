# 5 Stellar Portfolio (React)

This project uses React with Create React App (`react-scripts`) instead of Vite. The existing component structure, content, styling, and animations are retained.

## Run in VS Code

Install Node.js, open this project folder in the terminal, and run:

```bash
npm install
npm start
```

The development site opens at http://localhost:3000.

To create a production build:

```bash
npm run build
```

## Add the Choose & Chew dashboard screenshots

Place the screenshots in `public/assets/` with these exact names:

- `choose-chew-dashboard-1.png` (₹10,75,618)
- `choose-chew-dashboard-2.png` (₹11,13,325)

The gallery uses regular public asset URLs and does not rely on Vite-specific APIs. If screenshots are not present, the gallery displays a helpful placeholder.

## Update content

- `src/data/clients.js` – case studies, figures, placeholders
- `src/data/services.js` – services
- `src/data/site.js` – contact details, location, Instagram, navigation

## Notes

- The contact form validates input and opens the visitor's email app (`mailto`); no backend is configured.
- No growth percentage is calculated from the dashboard snapshots because their reporting periods are not confirmed.
