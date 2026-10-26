import {test,expect} from '@playwright/test';

test('Non-retrying assertions on SauceDemo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const username = page.locator('#user-name');
    const password = page.locator('#password');
    const loginButton = page.locator('#login-button');

    //  Check if username field is visible .isVisible()
    expect(await username.isVisible()).toBe(true);

    // Check if password field is visible
    expect(await password.isVisible()).toBe(true);

    // Check if login button is enabled  .isEnabled()
    expect(await loginButton.isEnabled()).toBe(true);

    //  Check if username field is empty  .inputValue()
    expect(await username.inputValue()).toBe('');

    //  Check if password field is empty
    expect(await password.inputValue()).toBe('');

    

});
