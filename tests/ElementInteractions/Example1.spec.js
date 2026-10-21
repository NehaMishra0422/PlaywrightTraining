import {test,expect} from '@playwright/test';

test('Practice Example', async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await page.getByPlaceholder('Enter your name').fill('Neha Mishra');
    await page.getByPlaceholder('Enter your email').fill('nemishra2295@gmail.com');
    await page.getByPlaceholder('Enter your address').fill('Ghaziabad');
    await page.getByRole('button', {name : 'Submit'}).click();

    //radio button
    await page.locator('#gender-female').check();

    //check boxes
    await page.locator('#day-thursday').check();
})