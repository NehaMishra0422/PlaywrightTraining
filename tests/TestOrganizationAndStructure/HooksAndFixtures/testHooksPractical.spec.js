import {test,expect} from '@playwright/test';

test('Homepage Test', async({page})=>{
    await page.goto('https://www.demoblaze.com/');

    //login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Neha Mishra');
    await page.locator('#loginpassword').fill('22041995@April');
    await page.getByRole('button',{name : 'Log in'}).click();
    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await expect(page).toHaveTitle('STORE');

    //to count product
    const product = page.locator('.hrefch');
    const productCount = await product.count();
    console.log(productCount);
   // await expect(page).toBe(9);
})