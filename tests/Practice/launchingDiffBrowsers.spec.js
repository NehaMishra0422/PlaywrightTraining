import {test,expect, chromium} from '@playwright/test';

test('Launching different browsers- Method 1', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');

})