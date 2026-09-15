const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('index.html', 'utf-8');
const $ = cheerio.load(html);

// We will replace our previous injected <style> block, or just append a new, stronger one.
const strongerCssOverride = `
    <style id="strong-override">
      :root {
        --theme-red: #e62429;
        --theme-green: #108a00;
        --theme-white: #ffffff;
      }
      
      /* Global Background to White */
      body, html, .app-wrapper, section, .sp_sm, .sp_sm_b, .home_slider_row, .impact, .videos, .footer, .las_quicklinks, .bg_col_d, .bg_col_l, .bg_col_o, div[style*="background"] {
        background: var(--theme-white) !important;
        background-color: var(--theme-white) !important;
        color: var(--theme-green) !important;
      }
      
      /* Header to Red */
      header, .stickynav09, .header, .menu_btn, .menu-list09 {
        background-color: var(--theme-red) !important;
        background: var(--theme-red) !important;
      }

      /* Text to Green / Red */
      h1, h2, h3, h4, h5, h6, p, span, a, .heading09, .minhdg a, .menu-item a, .menu_hdg, .timalhdg, .timer {
        color: var(--theme-green) !important;
      }

      /* Force header text to white for contrast against red */
      header a, header span, .stickynav09 a, .stickynav09 span, .logo h1, .nav-menu a {
        color: var(--theme-white) !important;
      }

      header a:hover, .stickynav09 a:hover {
        color: var(--theme-green) !important;
      }

      /* Buttons to Red */
      .btn, .bg_ovrl_btn, button {
        background-color: var(--theme-red) !important;
        color: var(--theme-white) !important;
        border-color: var(--theme-red) !important;
      }

      .btn:hover, button:hover {
        background-color: var(--theme-green) !important;
        color: var(--theme-white) !important;
      }
      
      /* Quick links */
      .las_quicklinks_min a {
        background-color: var(--theme-red) !important;
        color: var(--theme-white) !important;
      }
      .las_quicklinks_min a:hover {
        background-color: var(--theme-green) !important;
      }
      
      /* Reset logo text color */
      .logo h1 {
        color: var(--theme-white) !important;
      }
      
      /* Ensure impact box text is visible */
      .impact-card h3, .impact-card p, .gallery-contents h1, .gallery-contents p, .cont-exp p, .popn_boxn_txt p {
        color: var(--theme-green) !important;
      }
      
      /* Remove any leftover dark background classes */
      .bg-dark, .text-white {
        background-color: var(--theme-white) !important;
        color: var(--theme-green) !important;
      }
    </style>
`;

$('head').append(strongerCssOverride);

fs.writeFileSync('index.html', $.html());
console.log('Done appending stronger color overrides.');
