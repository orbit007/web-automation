const puppeteer = require("puppeteer");
const mail= "lerem19743@richdn.com";
const pass = "123456789";
let broweserPromise = puppeteer.launch({headless: false});
let page;
broweserPromise.then(function(browser){
    console.log("broweser is open");
    let pagePromis=browser.newPage();
    return pagePromis;

}).then(function(pageinst){
    console.log("page is open");
    page = pageinst;
    let urlpromise= page.goto("https://www.hackerrank.com/");
    return urlpromise;
 }).then(function(){
    
     console.log("hackerraqnk is open");
     let waitpromise = page.waitForSelector("#menu-item-2889 a");
     return waitpromise;
 }).then(function(){
    let clickpromise = page.click("#menu-item-2889 a");
    return clickpromise;
    
}).then(function(){
    console.log("click");
    let waitpromise = page.waitForSelector(".fl-button-wrap.fl-button-width-auto.fl-button-left a");

    return waitpromise;
}).then(function(){
   let domclickpromise = page.evaluate(function(){
       let btn = document.querySelectorAll(".fl-button-wrap.fl-button-width-auto.fl-button-left a");
       btn[1].click();
       return;
   })
   return domclickpromise;



}).then(function(){
    console.log("hed");
    let waitpromise = page.waitForSelector("#input-1");
    return waitpromise;

}).then(function(){
    let clickpromise = page.click("#tab-1-item-1");
   return clickpromise;

    

}).then(function(){

    let mailtype = page.type("#input-1",mail,{ delay: 100});
    return mailtype;
}).then(function(){
    let passtype = page.type("#input-2",pass,{ delat:100});
    return passtype;
 }).then(function(){
  let waitpromise = page.waitForSelector('button[data-analytics="LoginPassword"]');
   return waitpromise;  
 }).then(function(){
     let clickpromise = page.click('button[data-analytics="LoginPassword"]');
     return clickpromise;

 }).then(function(){
      console.log("jjhh");
 }).then(function(){
     return page.waitForSelector(".label-wrap .checkbox-input");

 })//.then(function(){
//     let domSelectpromise = page.evaluate(function(){
//         let btn = document.querySelectorAll(".label-wrap .checkbox-input");
//        btn[1].click();
//         let div = alldiv[3];
//         console.log(div);
//         let clickSelector = div.querySelector(".label-wrap .checkbox-input");
//         console.log(clickSelector);
//         clickSelector.click();
       
        
//         return;
//     })
//     return domSelectpromise;

// }).then(function(){
//     console.log("warmup Selected");



function waitAndClick(selector){
    return newpromise (function(resolve,reject){
          let waitpromise = page.waitForSelector(selector);
          waitpromise.then(function(){
              let clickpromise = page.click(selector);
              return clickpromise;

          }).then(function(){
              resolve();
          });
    })
}
