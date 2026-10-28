import {test,expect} from '@playwright/test';

test('Soft Assertions' , async({page})=>{
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link',{name :' Signup / Login'})).toBeVisible();

    //soft assertion with incorrect locator - should not stop here
    await expect.soft(page.getByRole('link' , {name : ' Product'})).toBeVisible();

    //will execute because soft assertion is applied on above
    console.log('soft assertion');
    //await page.getByRole('link',{name : ' Add to cart'}).nth(1).click();
})


//ci cd 