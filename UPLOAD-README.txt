VENVM LINE — ready-to-deploy storefront (self-contained, no build step)

WHAT THIS IS
  A fixed, fully self-hosted version of the storefront. React is bundled
  locally (vendor/) and the JSX is pre-compiled to plain JS (StorefrontApp.js),
  so there is NO in-browser Babel and NO unpkg/CDN dependency. This is what
  fixes the blank page.

HOW TO DEPLOY (GitHub web UI)
  1. In your repo (main branch): "Add file" -> "Upload files".
  2. Drag in the CONTENTS of this folder (index.html, StorefrontApp.js,
     vendor/, ds/, assets/). Keep the folder structure.
  3. Delete the outdated files from the repo root:
       index.html (old), account.html, cart.html, createnewacc.html,
       product.html, and the now-redundant venvm-site/ folder.
  4. Settings -> Pages -> Source: "Deploy from a branch" -> main -> / (root).
  5. Your site: https://nmyangaa.github.io/VENVM/

NOTES
  - Product photos load from Google's CDN and the icon font from Google Fonts;
    an internet connection shows them. The hero image is local.
  - Placeholders to swap later live in StorefrontApp.js:
    window.VENVM_SHOPIFY_URL and the window.VENVM_IMG image URLs.
