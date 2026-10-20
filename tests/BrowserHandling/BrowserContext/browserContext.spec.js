import {test} from '@playwright/test';
test('Browser Context', async({browser})=>{

    const context = await browser.newContext();  //opens isolated session of broswer
    const page = await context.newPage();  // opens new page in browser
    await page.goto('https://www.saucedemo.com/');
})

test('Page fixture',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})