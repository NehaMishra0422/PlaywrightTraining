import {test,chromium,expect} from '@playwright/test';
test('Using Xpath', async()=>{
    const browser = await chromium.launch({
        headless : false
    });
    const page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill('standard_user');
    //await page.locator('xpath=//input[@id='user-name']').fill('standard_user');
    await page.locator("//input[@id='password']").fill('secret_sauce');
    //await page.locator('xpath=//input[@id='password']').fill('secret_sauce');
    await page.locator("//input[@name='login-button']").click();

})