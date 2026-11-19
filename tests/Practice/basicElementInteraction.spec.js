import {test,expect} from '@playwright/test';

test('Basic Element interaction-input handling', async({page})=>{
    await page.goto('https://automationexercise.com/');
    await expect(page.locator("a[href='/login']")).toBeVisible();
    await page.locator("a[href='/login']").click();
    await expect(page).toHaveURL('https://automationexercise.com/login');
    await expect(page.getByText('New User Signup!')).toHaveText('New User Signup!');
    await expect(page.getByPlaceholder('Name')).toBeEnabled();
    await page.getByPlaceholder('Name').fill('Neha mishra');
    await page.getByPlaceholder('Name').clear();
    await page.getByPlaceholder('Name').fill('NehaM');
    await expect(page.locator("input[data-qa='signup-email']")).toBeEnabled();
    await page.locator("input[data-qa='signup-email']").pressSequentially('nemishra2295@gmail.com',{delay : 200});
    await page.getByRole('button',{name : 'Signup'}).click();
})