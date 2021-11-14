const puppeteer = require('puppeteer');

const URL = "https://dormroomfund.com";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);
    await page.screenshot({path: 'example.png'});

    await browser.close();
})();