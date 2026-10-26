import {test,expect} from '@playwright/test';

test('Auto- Retrying Assertions', async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    //to verify page url  .toHaveURL()
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    //to verify page title .toHaveTitle()
    await expect(page).toHaveTitle('Swag Labs');

    //to verify element is visible .toBeVisible()
    await expect(page.locator('#user-name')).toBeVisible();

    //to verify element is enabled .toBeEnabled()
    await expect(page.locator('#user-name')).toBeEnabled();
    await expect(page.locator('#login-button')).toBeEnabled();

    //to verify element is editable .toBeEditable()
    await expect(page.locator('#user-name')).toBeEditable();

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    //verify page url .toHaveURL()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    //verify exact text match .toHaveText()
    await expect(page.locator('.inventory_item_name').nth(0)).toHaveText('Sauce Labs Backpack');

    //verify expected text .toContainText()
    await expect(page.locator('.inventory_item_name').nth(3)).toContainText('Fleece');
    await page.getByRole('button', {name : 'Add to cart'}).nth(3).click();
    
    //non-auto retrying .isVisible()
    await page.getByRole('button', {name : 'Remove'}).nth(3).isVisible();

    //verify counts .toHaveCount()
    await expect(page.locator('.shopping_cart_link')).toHaveCount(1);
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.title')).toHaveText('Your Cart');
   
    //verify element is enabled .toBeEnabled()
    await expect(page.getByRole('button', {name : 'Checkout'})).toBeEnabled();

    await page.getByRole('button',{name : 'Checkout'}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await expect(page.locator('.title')).toContainText('Information');

    await page.locator('#first-name').fill('Neha');

    //verify input field have expected value .toHaveValue()
    await expect(page.locator('#first-name')).toHaveValue('Neha');
    
    await page.locator('#last-name').fill('Mishra');
    //verify input field have expected value .toHaveValue()
    await expect(page.locator('#last-name')).toHaveValue('Mishra');
    
    await page.locator('#postal-code').fill('201013');
    //verify input field have expected value .toHaveValue()
    await expect(page.locator('#postal-code')).toHaveValue('201013');

    await expect(page.getByRole('button',{name : 'Continue'})).toBeEnabled();
    await page.getByRole('button',{name:'Continue'}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await expect(page.locator('.title')).toContainText('Overview');

    await page.getByRole('button',{name :'Finish'}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.locator('.title')).toContainText('Complete!');
    await expect(page.locator('.complete-header')).toContainText('Thank you');
    await expect(page.getByRole('button',{name : 'Back Home'})).toBeEnabled();
    await expect(page.getByRole('button',{name : 'Generate PDF order'})).toBeEnabled();
    await page.getByRole('button', {name : 'Generate PDF order'}).click();

})