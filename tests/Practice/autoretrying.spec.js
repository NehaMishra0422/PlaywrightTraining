import {test,expect} from '@playwright/test';

test('Auto Retrying', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByPlaceholder('Username')).toBeEnabled();
    await page.getByPlaceholder('Username').fill('standard_user');
    await expect(page.getByPlaceholder('Password')).toBeEnabled();
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await expect(page.locator('#login-button')).toBeEnabled();
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.inventory_item_name').nth(0)).toContainText('Backpack');
    await expect(page.locator('.inventory_item_name').nth(2)).toHaveText('Sauce Labs Bolt T-Shirt');
    await expect(page.getByRole('button',{name : 'Remove'}).nth(0)).toBeHidden();
    await page.getByRole('button',{name : 'Add to Cart'}).nth(0).click();
    await expect(page.getByRole('button',{name : 'Remove'}).nth(0)).toBeVisible();
    await expect(page.locator('.shopping_cart_link')).toHaveCount(1);
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  


})