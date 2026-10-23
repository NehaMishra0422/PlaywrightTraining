import { test, expect } from '@playwright/test';

test('Keyboard insertText', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const username = page.locator('#user-name');
    await username.focus();
    await page.keyboard.insertText('standard_user');
    await expect(username).toHaveValue('standard_user');
});