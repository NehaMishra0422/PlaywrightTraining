import {test,expect} from '@playwright/test';

test.describe('Login test case',async()=>{
    test.only('Valid Login', async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(page).toHaveTitle('OrangeHRM');
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button',{name :'Login'}).click();
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    })

    test.skip('Invalid Login',async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin12');
        await page.getByRole('button',{name :'Login'}).click();
        await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');
    })
})

test.fail('Sauce Demo',async({page})=>{
    test.slow();
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name : 'Login'}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
})

test.fixme('Sauce Demo-fixme',async({page})=>{
    test.slow();
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name : 'Login'}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
})