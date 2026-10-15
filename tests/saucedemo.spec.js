import { test, expect } from '@playwright/test';
test('Login Sauce Demo page', async({browser,page})=>{
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);
    await expect(page).toHaveTitle('Swag Labs');
    console.log(await page.title());
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
})

test('Add to Cart', async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('.btn_inventory').nth(3).click();
})