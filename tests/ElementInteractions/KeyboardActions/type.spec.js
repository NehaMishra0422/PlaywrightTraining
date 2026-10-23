import {test,expect} from '@playwright/test';

test('Keyboard Press',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').focus();
    await page.keyboard.type('standard_user');
    await page.locator('#password').focus();
    await page.keyboard.type('secret_sauce');
    await page.keyboard.press('Enter');
})

//Here, focus() activates the username textbox, and keyboard.type() types the text into it.