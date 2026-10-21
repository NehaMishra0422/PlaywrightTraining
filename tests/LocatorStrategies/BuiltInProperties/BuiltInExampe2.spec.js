import {test,expect} from '@playwright/test';

test('Test Built In properties', async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.getByText('Text Box').nth(0).click();
    await page.getByPlaceholder('Full Name').fill('Neha Mishra');
    await page.getByPlaceholder('name@example.com').fill('nemishra2295@gmail.com');
    await page.getByPlaceholder('Current Address').fill('Ghaziabad');
    await page.locator('#permanentAddress').fill('Ghaziabad');
    await page.getByRole('button',{name : 'Submit'}).click();
})