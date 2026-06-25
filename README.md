# VENVM LINE — Storefront (static preview build)

A fully self-contained static version of the VENVM LINE storefront. No build
step, no authentication, no claude.ai dependency — everything resolves through
relative paths and public CDNs, so it runs straight from this folder.

## What's here

```
venvm-site/
  index.html          ← entry point (open this)
  StorefrontApp.jsx   ← the React app (compiled in-browser by Babel)
  assets/images/      ← hero photo
  ds/                 ← VENVM LINE design system (CSS tokens, fonts, component bundle)
```

## View it locally

Because the page fetches `StorefrontApp.jsx` and the design-system files, open it
through a local web server (not the `file://` protocol):

```bash
cd venvm-site
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish a preview with GitHub Pages

1. Commit this `venvm-site/` folder to your repo.
2. In **Settings → Pages**, set the source to your branch and either the repo
   root or `/venvm-site` (if you move `index.html` to the repo root, keep the
   `ds/`, `assets/`, and `StorefrontApp.jsx` paths alongside it).
3. Your preview goes live at `https://<user>.github.io/<repo>/`.

When you wire up your own domain later, point it at the same files — nothing
changes.

## Notes

- React, ReactDOM and Babel load from `unpkg.com`; product photos and the
  Material Symbols icon font load from Google's CDN — so an internet connection
  is required (same as the original).
- For a production deploy you'd normally pre-compile the JSX instead of using the
  in-browser Babel transformer. The in-browser path is intentional here to keep
  the preview zero-build.
- The Shopify checkout link and product imagery are still placeholders — swap
  `window.VENVM_SHOPIFY_URL` and the `window.VENVM_IMG` URLs in
  `StorefrontApp.jsx` when the real store and photography are ready.
