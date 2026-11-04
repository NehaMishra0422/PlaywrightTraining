import {test,expect} from '@playwright/test';

test('Orange HRM', {tag : '@Regression'}, async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})

test('Sauce Demo',{tag : '@Smoke'},async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name : 'Login'}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

test('Demo Blaze',{tag : '@Exploratory'}, async({page})=>{
     await page.goto('https://www.demoblaze.com/');
     await page.locator('#login2').click();
     await page.locator('#loginusername').fill('Neha Mishra');
     await page.locator('#loginpassword').fill('22041995@April');
     await page.getByRole('button',{name : 'Log in'}).click();
     await expect(page).toHaveURL('https://www.demoblaze.com/');
    
     await expect(page).toHaveTitle('STORE');
})