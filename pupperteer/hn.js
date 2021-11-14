const puppeteer = require(`puppeteer`);

const URL = `https://news.ycombinator.com`;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL, {
        waitUntil: `networkidle2`,
    });
    await page.pdf({path: `hn.pdf`, format: 'a4'});

    await browser.close();
})();