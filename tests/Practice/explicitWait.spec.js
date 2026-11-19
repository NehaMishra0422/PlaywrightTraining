import {test,expect} from '@playwright/test';

test('Expliit wait',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.waitForLoadState('domcontentloaded', {timeout : 3000});

    await page.locator('#username').waitFor({state : 'attached'});
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').waitFor({state : 'attached'});
    await page.locator('#password').fill('Learning@830$3mK2');

    await expect(page.locator("input[value='admin']")).toBeChecked();
    await page.locator("option[value='consult']").waitFor({state : 'hidden'});
    await page.locator('.form-control').click();
    await page.locator("option[value='consult']").click();
    await page.locator('#terms').check();
    await page.getByRole('button',{name : 'Sign Up'}).click();
})