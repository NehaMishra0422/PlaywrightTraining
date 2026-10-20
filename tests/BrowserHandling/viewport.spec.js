import {test,expect} from '@playwright/test';

test('Check ViewPort size',async({page})=>{
    await page.setViewportSize({
        width : 1200,
        height : 1000
    });
await page.goto('https://www.saucedemo.com/');
await expect(page).toHaveTitle(/Swag Labs/);   
})