const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('index.html', 'utf-8');
const $ = cheerio.load(html);

// Replace logo image with text "Karthikeyan"
$('.logo a').html('<h1 style="color: var(--theme-white); font-weight: bold; font-size: 24px; margin: 0; line-height: 1;">Karthikeyan</h1>');

// Also fix any stray "AMIT SHAH" if there are any other text occurrences missed
$('*').contents().each(function() {
    if (this.type === 'text') {
        let text = $(this).text();
        if (text.match(/AMIT SHAH/i)) {
            text = text.replace(/AMIT SHAH/gi, 'Karthikeyan');
            $(this).replaceWith(text);
        }
    }
});

fs.writeFileSync('index.html', $.html());
console.log('Done updating logo to text.');
