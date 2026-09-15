const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// The original site uses various shades of orange. Let's find and replace them directly in the HTML.
// Saffron/Orange hex codes commonly used by BJP/Amit Shah site:
const orangeRegexes = [
    /#ee6f47/gi, 
    /#f37021/gi, 
    /#ff9933/gi, 
    /#FF7E54/gi,
    /orage/gi,   // Typo in their svg
    /orange/gi
];

orangeRegexes.forEach(regex => {
    html = html.replace(regex, '#e62429'); // Replace with our red
});

// Enforce SVG fills to red/white where they were originally orange
html = html.replace(/fill="orange"/gi, 'fill="#e62429"');
html = html.replace(/fill="orage"/gi, 'fill="#e62429"');

// Ensure the logo actually says Karthikeyan, just in case the previous script failed or the user had an old cached version
const cheerio = require('cheerio');
const $ = cheerio.load(html);

$('.logo').html('<h1 style="color: #ffffff; font-weight: 800; font-size: 28px; margin: 0; line-height: 1; padding: 15px;">Karthikeyan</h1>');

// Make sure the header background is strictly red by inline style
$('.stickynav09').attr('style', 'background-color: #e62429 !important; background: #e62429 !important;');

fs.writeFileSync('index.html', $.html());
console.log('Done stripping all orange colors.');
