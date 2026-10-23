//In Playwright, input handling means entering text, clearing fields, typing character by character, pressing keyboard keys, and interacting with form controls.

import {test,expect} from '@playwright/test';

test('Input Handling', async({page})=>{
    await page.goto('https://www.qapractice.com/practice-different-ui-elements');
    await page.locator('#textField').fill('testing');
    await page.locator('#textField').clear();
    await page.locator('#textField').fill('Input handling practice');
    await expect(page.locator('#textField')).toHaveValue('Input handling practice');
})

test('Press Sequentially',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').pressSequentially('standard_user', {delay : 200});
    await page.getByPlaceholder('Password').pressSequentially('secret_sauce',{delay : 200});
    await page.getByRole('button', {name : 'Login'}).click();
})