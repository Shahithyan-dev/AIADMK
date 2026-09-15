const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// Fix 1: Restore the Hero section background images
// I need to remove the aggressive `background: var(--theme-white) !important;` rule
// Let's just find and replace the whole CSS block I injected.
const oldCss = /body, html, \.app-wrapper, section, \.sp_sm, \.sp_sm_b, \.home_slider_row, \.impact, \.videos, \.footer, \.las_quicklinks, \.bg_col_d, \.bg_col_l, \.bg_col_o, div\[style\*\="background"\] \{\s*background: var\(--theme-white\) !important;\s*background-color: var\(--theme-white\) !important;\s*color: var\(--theme-green\) !important;\s*\}/g;

const newCss = `body, html, .app-wrapper, section, .sp_sm, .sp_sm_b, .impact, .videos, .footer, .las_quicklinks, .bg_col_d, .bg_col_l, .bg_col_o {
        background-color: var(--theme-white) !important;
        color: var(--theme-green) !important;
      }`;

html = html.replace(oldCss, newCss);

// Fix 2: Fix the header redirect (logo) and broken links
// Any href="" should be href="/"
html = html.replace(/href=""/g, 'href="/"');

// Also, let's fix any corrupted links like `st#e62429/uploads` caused by my aggressive orange replace!
// In my strip-orange script, I replaced `orage` with `#e62429`. 
// "storage" contains "orage"! So "storage" became "st#e62429"!!! This broke the images!
html = html.replace(/st#e62429/gi, 'storage');

fs.writeFileSync('index.html', html);
console.log('Fixed hero section, links, and the storage typo.');
