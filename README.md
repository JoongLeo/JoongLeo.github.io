# Jihong Li's Academic Homepage

This repository contains the static academic homepage of **Jihong Li** ([JoongLeo](https://github.com/JoongLeo)), a Ph.D. student at Nankai University. The site is built with plain HTML, CSS, and JavaScript and is intended for GitHub Pages.

## Local preview

From the repository root, start a small static file server:

```bash 
python -m http.server 8000
```

Then open <http://localhost:8000/>. Using a local server is recommended because it matches GitHub Pages path behavior more closely than opening `index.html` directly.

## Updating publications

Publication entries live in `index.html` inside `#publications`.

1. Copy one existing `<div class="publication row clearfix">...</div>` block.
2. Replace the TODO teaser, title, authors, venue, year, and links with verified information.
3. Set `data-date` to a sortable numeric value such as `202608` for August 2026.
4. Set `data-author="Jihong Li"` only when Jihong Li is the first author; otherwise use the verified first author's name.
5. Put teaser images under `assets/` and reference them with repository-relative paths.

The lightweight script in `js/site.js` provides date and first-author sorting automatically.

## Updating profile information

- Replace `assets/profile.jpg` to update the portrait while keeping the filename unchanged.
- Edit the News, Experience, Education, Awards, and Contact sections in `index.html` only with verified information.
- Update the Open Graph metadata in `index.html` if the site URL or preview image changes.

## Template acknowledgement

This site directly retains the page structure, class names, responsive layout, and publication-sorting behavior of [Zheng-Peng Duan's academic homepage](https://adam-duan.github.io/), with acknowledgements to [Xin Jin](https://srameo.github.io/) and [Nicklas Hansen](https://nicklashansen.github.io/). Personal content, metadata, and assets have been replaced for Jihong Li.
