const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('index.html', 'utf-8');
const $ = cheerio.load(html);

// We replace the contents of .homeslider with exactly 3 items using the provided images in public/
const newHeroItems = `
  <div class="item">
    <div class="item">
        <div class="img-fill pr">
            <div class="img_view_d">  <img src="/hero1.jpeg">  </div>
            <div class="img_view_m"><img src="/hero1.jpeg"></div>
            <div class="info align-right">
                <div><h3>“A<br>Visionary<br>Leader”</h3></div>
            </div>
        </div>
    </div>
  </div>
  <div class="item">
    <div class="item">
        <div class="img-fill pr">
            <div class="img_view_d">  <img src="/hero2.jpeg">  </div>
            <div class="img_view_m"><img src="/hero2.jpeg"></div>
            <div class="info align-left">
                <div><h3>“Dedicated<br>to the<br>People”</h3></div>
            </div>
        </div>
    </div>
  </div>
  <div class="item">
    <div class="item">
        <div class="img-fill pr">
            <div class="img_view_d">  <img src="/hero3.jpeg">  </div>
            <div class="img_view_m"><img src="/hero3.jpeg"></div>
            <div class="info align-right">
                <div><h3>“Building<br>a Better<br>Future”</h3></div>
            </div>
        </div>
    </div>
  </div>
`;

$('.homeslider').html(newHeroItems);

fs.writeFileSync('index.html', $.html());
console.log('Done updating hero slider images and quotes.');
