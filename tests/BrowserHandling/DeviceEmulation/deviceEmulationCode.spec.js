import {test,devices} from '@playwright/test';

test.use({
    ...devices['iPhone 16']
});
test( 'Device Emulation with code', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();

})