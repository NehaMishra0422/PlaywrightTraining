import { test, expect } from '@playwright/test';

test.describe('Sauce Demo E-comerce  site', async () => {
    test.describe('Login functionality', async () => {
        test('Valid login credentials', async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await expect(page).toHaveTitle('Swag Labs');
            await page.getByPlaceholder('Username').fill('standard_user');
            await page.getByPlaceholder('Password').fill('secret_sauce');
            await page.getByRole('button', { name: 'Login' }).click();
        })
        test('Invalid Login credentials', async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await expect(page).toHaveTitle('Swag Labs');
            await page.getByPlaceholder('Username').fill('standard_user');
            await page.getByPlaceholder('Password').fill('Secret');
        })
    })

})  


    test.describe('Product functionality',async()=>{
        test('Add product to cart', async({page})=>{
            await page.goto('https://www.saucedemo.com/')
            await page.getByPlaceholder('Username').fill('standard_user');
            await page.getByPlaceholder('Password').fill('secret_sauce');
            await page.getByRole('button', { name: 'Login' }).click();
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            await page.getByRole('button',{name : 'Add to Cart'}).nth(1).click();
        })
        test('Remove product from cart', async({page})=>{
            await page.goto('https://www.saucedemo.com/')
            await page.getByPlaceholder('Username').fill('standard_user');
            await page.getByPlaceholder('Password').fill('secret_sauce');
            await page.getByRole('button', { name: 'Login' }).click();
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            await page.getByRole('button',{name : 'Add to Cart'}).nth(1).click();
            await page.getByRole('button', {name : 'Remove'}).nth(1).click();
        })
    })