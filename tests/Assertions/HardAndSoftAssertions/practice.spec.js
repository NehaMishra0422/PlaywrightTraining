import {test,expect} from '@playwright/test';

test('Hard-Soft Assertion Practice', async({page})=>{
    await page.goto('https://www.demoblaze.com/');

    //Hard Assertion
    
    /*
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE002');
    await expect(page.locator('.navbar-brand')).toBeVisible();
    */

    //Soft Assertion
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
    await expect.soft(page).toHaveTitle('STORE002');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})