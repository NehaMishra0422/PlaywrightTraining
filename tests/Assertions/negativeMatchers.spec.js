/*
In Playwright JavaScript, negative matchers are used to verify that something is not true. You use .not before the matcher.
Playwright's negative locator assertions, such as not.toBeVisible(), automatically retry until the assertion passes or the timeout is reached.
*/

import {test,expect} from '@playwright/test';

test('Negative Matchers', async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    //error message should not be visible .not.toBeVisible()
    await expect(page.getByRole('alert')).not.toBeVisible();
})