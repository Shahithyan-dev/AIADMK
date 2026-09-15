const fs = require('fs');
const cheerio = require('cheerio');

// Load original HTML
let html = fs.readFileSync('original.html', 'utf-8');
const $ = cheerio.load(html);

// Inject custom CSS to make it white, black, red, green
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
      footer, .footer, .las_quicklinks {
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
$('head').append(cssOverride);

// Replace Amit Shah in all text nodes
$('*').contents().each(function() {
    if (this.type === 'text') {
        let text = $(this).text();
        text = text.replace(/Shri Amit Shah/gi, 'Karthikeyan');
        text = text.replace(/Amit Shah/gi, 'Karthikeyan');
        text = text.replace(/Amitshah/gi, 'Karthikeyan');
        $(this).replaceWith(text);
    }
});

// Replace Amit Shah in specific attributes
$('title').text(function(_, oldText) {
    let t = oldText.replace(/Shri Amit Shah/gi, 'Karthikeyan');
    t = t.replace(/Amit Shah/gi, 'Karthikeyan');
    return t;
});

$('meta[name="description"]').attr('content', function(_, oldVal) {
    if(!oldVal) return oldVal;
    let t = oldVal.replace(/Shri Amit Shah/gi, 'Karthikeyan');
    t = t.replace(/Amit Shah/gi, 'Karthikeyan');
    return t;
});

$('img').attr('alt', function(_, oldVal) {
    if (!oldVal) return oldVal;
    let t = oldVal.replace(/Shri Amit Shah/gi, 'Karthikeyan');
    t = t.replace(/Amit Shah/gi, 'Karthikeyan');
    return t;
});

// Update anchor hrefs that point to amitshah.co.in
$('a').each(function() {
    let href = $(this).attr('href');
    if (href) {
        // We replace 'amitshah.co.in' with 'karthikeyan.co.in' only in user-facing links.
        // And social media links
        let newHref = href.replace(/amitshah\.co\.in/gi, 'karthikeyan.co.in');
        newHref = newHref.replace(/amitshahofficial/gi, 'karthikeyanofficial');
        newHref = newHref.replace(/AmitShah/gi, 'Karthikeyan');
        $(this).attr('href', newHref);
    }
});

// Save to index.html
fs.writeFileSync('index.html', $.html());
console.log('Done cloning HTML and applying deep text replace.');
