import {test,expect} from '@playwright/test';
test('Open Sauce Demo page', async({browser,page})=>{
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('.login_logo')).toContainText('Swag Labs');
  //with codegen -
  // await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  //this was giving timeout error so I changes locator to '.login_logo'
  await page.getByText('Swag Labs').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
});
