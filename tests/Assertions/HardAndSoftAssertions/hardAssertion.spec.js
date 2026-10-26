import {test,expect} from '@playwright/test';

test('Hard Assertions' , async({page})=>{
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link',{name :' Signup / Login'})).toBeEnabled();

    //incorrect locator - should fali here
    await expect(page.getByRole('link' , {name : ' Product'})).toBeEnabled();

    //will not execute because above line is failed
    await page.getByRole('link',{name : 'Add to cart'}).nth(0).click();
})