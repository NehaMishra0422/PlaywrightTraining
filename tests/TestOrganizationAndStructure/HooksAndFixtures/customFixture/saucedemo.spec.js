import {test, expect} from '../customFixture/saucedemoFixture.js';

test('Test 1 - verify page url', async({sauceDemo})=>{
    await expect(sauceDemo).toHaveURL('https://www.saucedemo.com/inventory.html');
})

test('Test 2 - verify page title', async({sauceDemo})=>{
    await expect(sauceDemo).toHaveTitle('Swag Labs');
})
test('Test 3 - Add Product to cart', async({sauceDemo})=>{
    await expect(sauceDemo.locator('.inventory_item_name').nth(2)).toHaveText('Sauce Labs Bolt T-Shirt');
    await sauceDemo.getByRole('button',{name : 'Add to cart'}).nth(2).click();
    await expect(sauceDemo.locator('.shopping_cart_link')).toBeVisible();
    await sauceDemo.locator('.shopping_cart_link').click();
    await expect(sauceDemo).toHaveURL('https://www.saucedemo.com/cart.html');
})
