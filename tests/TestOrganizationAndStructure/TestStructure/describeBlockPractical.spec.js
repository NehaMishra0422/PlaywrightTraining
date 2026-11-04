import {test,expect} from '@playwright/test';

test.describe('Login test case',async()=>{
    test('Valid Login', async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(page).toHaveTitle('OrangeHRM');
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button',{name :'Login'}).click();
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    })

    test('Invalid Login',async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin12');
        await page.getByRole('button',{name :'Login'}).click();
        await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');
    })
})