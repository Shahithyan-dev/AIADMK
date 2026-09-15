const fs = require('fs');
const path = require('path');

let html = fs.readFileSync('original.html', 'utf-8');

// The user wants white, black, red, and green colors.
// I will inject a CSS block at the end of <head> to override the theme colors.

const cssOverride = `
    <style>
      :root {
        --theme-red: #e62429;
        --theme-green: #108a00;
        --theme-black: #111111;
        --theme-white: #ffffff;
      }
      
      body, .bg_col_l, .bg_col_o, .bg_col_d {
        background-color: var(--theme-white) !important;
        color: var(--theme-black) !important;
      }
      
      .menu_hdg, .minhdg a, .heading09, h1, h2, h3, h4, p {
        color: var(--theme-black) !important;
      }

      .btn, .bg_ovrl_btn, .bg_col_o {
        background-color: var(--theme-red) !important;
        color: var(--theme-white) !important;
      }

      a:hover, .menu-item a:hover {
        color: var(--theme-green) !important;
      }

      .las_quicklinks_min a {
        background-color: var(--theme-black) !important;
        color: var(--theme-white) !important;
      }
      .las_quicklinks_min a:hover {
        background-color: var(--theme-green) !important;
      }

      .count_box_col2 h1, .count_box_col1 h1, .timer {
        color: var(--theme-red) !important;
      }
      
      /* Make footer black/red/green */
      footer, .footer {
        background-color: var(--theme-black) !important;
        color: var(--theme-white) !important;
      }
      footer a, .footer a {
        color: var(--theme-white) !important;
      }
      footer a:hover, .footer a:hover {
        color: var(--theme-green) !important;
      }
    </style>
`;

html = html.replace('</head>', cssOverride + '\n</head>');

// Replace names
// We do a global replace of "Amit Shah" and "Shri Amit Shah"
html = html.replace(/Shri Amit Shah/gi, 'Kartikeyan');
html = html.replace(/Amit Shah/gi, 'Kartikeyan');

// The user also requested to "remove the maps link"
// I will remove the maps link section I added previously, but since I am using the fresh curl output, the maps link is not there anyway! The user must be referring to the "Contact Us" or something, or they just noticed my previous React app had a maps link and wanted it gone. 
// "remove the maps link, i need exact same site without any changes use screen recording by clicking the link make it"
// So the freshly downloaded HTML is the exact site.

fs.writeFileSync('index.html', html);
console.log('Done cloning HTML.');
