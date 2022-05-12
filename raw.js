const puppeteer = require("puppeteer");

let broweserPromise = puppeteer.launch({ headless: false});

broweserPromise.then(function(browser)
{
    console.log("browser is open");
    let pagePromis = browser.newPage();
    return pagePromis;
}
).then(function(page)
{
    console.log("page is open");
    let urlpromise = page.goto("https://www.google.com/");
    return urlpromise;
}
).then(function()

{
    console.log("google is open ");

}
)