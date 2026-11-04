import {test,expect} from '@playwright/test';

let page;

test.describe.configure({ mode: 'parallel' });
test.beforeEach('Login',async({page})=>{
    
    await page.goto('https://www.demoblaze.com/');

    //login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Neha Mishra');
    await page.locator('#loginpassword').fill('22041995@April');
    await page.getByRole('button',{name : 'Log in'}).click();
    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await expect(page).toHaveTitle('STORE');
    
})

test.afterEach('Logout',async({page})=>{
//Logout
   await page.locator('#logout2').click();
})

test('Homepage Test', async({page})=>{
    
   //Test homepage
   const product = await page.locator('.hrefch');  //$$ handle multiple element
   await expect(product).toHaveCount(9);

})

test('Add Product to Cart', async({page})=>{
    
    //Add product to cart
    await page.locator('.hrefch').nth(1).click();
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=2');
    await page.getByRole('link', {name : 'Add to cart'}).click();
    page.on('dialog',async dialog=>{
       expect(dialog.type()).toContain('alert');
       expect(dialog.message()).toContain('Product added.');
       await dialog.accept();

    })

})