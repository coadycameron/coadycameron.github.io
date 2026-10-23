# Historical CSCE 2018 static website

This repository publishes a static archive of the 2018 CSCE conference website via GitHub Pages. The site does not have a server-side application or user accounts.

## Runtime assets

The published pages load vendored jQuery 3.7.1, Bootstrap 3.4.1, and no longer load the unused Magnific Popup code. The archived `OLD/` page is also publicly accessible and uses the same patched versions. They are pinned locally instead of loading the former jquery-easing CDN script. The responsive menu includes a fix for closing links clicked during an opening transition.

Bootstrap 3 remains **end-of-life**. This is an interim security/compatibility update, not a claim that Bootstrap 3 is free of vulnerabilities. A proper migration to a supported framework is still advisable if this site will remain active.

A local Playwright smoke check was run for both site variants at mobile and desktop widths (navigation, visible content, and console errors). The historical Gulp build toolchain remains unchanged and is not used by GitHub Pages deployment. Do not run `npm install` / the Gulp build for production without a separate security refresh.
