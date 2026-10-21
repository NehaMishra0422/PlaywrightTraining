import {test,expect} from '@playwright/test';
test('Playwright Built-in Locators', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByAltText('company-branding')).toBeVisible();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');  
    await page.getByRole('button',{name : 'Login'}).click(); 
    await page.getByAltText('client brand banner').click(); 
})