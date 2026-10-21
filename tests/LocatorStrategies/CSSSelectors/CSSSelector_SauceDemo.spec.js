import {test,chromium,expect} from '@playwright/test';

const input = {
    username : '#user-name',

}

test('CSS Selector practice using Sauce Demo', async()=> {

 const browser = await chromium.launch({
    headless : false
 });
const page = await browser.newPage();
await page.goto('https://www.saucedemo.com/');
await expect(page).toHaveTitle('Swag Labs');   //checks whether the Sawg Labes title is present or not
await page.locator(input.username).fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.getByRole('button', {name : 'Login'}).click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); //checks page contains this url or not

//to get all content in the web 
// const linkNames = await page.$$('div');  //handle multiple web elements using $$
// for(const link of linkNames){
//    const linkText = await link.textContent();
//    console.log(linkText);  // gives all the text visible in the page
// }

//to get all product names
const products = await page.$$('.inventory_list .inventory_item_name');
for(const name of products){
    const productNames = await name.textContent();
    console.log(productNames);
}

await page.locator('.inventory_item_name').nth(3).click(); // clicks 4th product
await page.getByRole('button', {name : 'Add to cart'}).click();
await page.locator('.shopping_cart_link').click();
await page.locator('#checkout').click();
})