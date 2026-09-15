const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// Replace the broken karthikeyan.co.in links with just "/" or relative paths
// We will replace "https://karthikeyan.co.in" and "http://karthikeyan.co.in" with "" (making them relative)
html = html.replace(/https?:\/\/karthikeyan\.co\.in/gi, '');
html = html.replace(/https?:\/\/www\.karthikeyan\.co\.in/gi, '');

// Also, the screenshot has "Not secure https://karthikeyan.co.in", which means the user actually tried to visit the URL that the link sent them to!

fs.writeFileSync('index.html', html);
console.log('Done fixing broken links.');
