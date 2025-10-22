MDWebsite
======

A minimal Vite + Vanilla JS project scaffolded with Bootstrap 5.

Getting started

1. Install dependencies (run locally where Node and npm are available):

```bash
cd MDWebsite
npm install
```

2. Run the dev server:

```bash
npm run dev
```

Notes

- Bootstrap CSS/JS is included via CDN in `index.html` so you can preview quickly without installing dependencies.
- To use npm-managed Bootstrap (recommended for production), run `npm install` and uncomment the import in `src/main.js`:

```js
import 'bootstrap/dist/js/bootstrap.bundle.js'
```
