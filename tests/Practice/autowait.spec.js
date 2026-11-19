import {test,expect} from '@playwright/test';

test('Auto wait mechanism', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');

    //Assertion Auto wait
    await expect(page).toHaveTitle('Demo Web Shop');
    await expect(page.locator("a[href='/login']")).toBeEnabled();
    await expect(page.locator('.topic-html-content-header')).toHaveText('Welcome to our store');

    //action auto wait
    await page.locator("a[href='/login']").click();
    await page.locator('#Email').fill('nemishra2295@gmail.com');
    await page.locator('#Password').fill('22041995@April');
    await page.locator('.login-button').click();
})