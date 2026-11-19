import {test,expect} from '@playwright/test';

test('Locator methods and Properties', async({page})=>{
    await page.goto('https://automationexercise.com/');
    await expect(page.getByAltText('Website for automation practice')).toBeVisible();
    await page.getByRole('link',{name : ' Signup / Login'}).click();
    await expect(page).toHaveURL('https://automationexercise.com/login');
    await expect(page.getByPlaceholder('Name')).toBeEditable();
    await page.getByPlaceholder('Name').fill('Neha Mishra');
    //await expect(page.getByPlaceholder('Email Address')).toBeEditable();
    await page.locator('input[data-qa="signup-email"]').fill('nemishra2295@gmail.com');
    await expect(page.getByRole('button', {name : 'Signup'})).toBeEnabled();
    await page.getByRole('button',{name : 'Signup'}).click();
    await expect(page).toHaveURL('https://automationexercise.com/signup');
    await expect(page.locator('.login-form h2').first()).toHaveText('Enter Account Information');
})