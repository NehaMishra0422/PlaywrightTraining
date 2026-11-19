import {test,expect} from '@playwright/test';

test('Press Keyboard', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').focus();
    await page.keyboard.insertText('Neha Mishra');
    await page.getByPlaceholder('Username').press('Control+A');
    await page.getByPlaceholder('Username').press('Backspace');
    await page.keyboard.type('standard_user');
    await page.getByPlaceholder('Password').focus();
    await page.keyboard.insertText('secret_sauce');
    await page.locator('#login-button').press('Enter');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})