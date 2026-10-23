import {test,expect} from '@playwright/test';

test('Select single value', async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html#section-dropdowns');
    await page.locator('#country').selectOption({value : 'canada'});
    await expect(page.locator('#country')).toHaveValue('canada');
    await page.locator('#sorted-list').selectOption({value : 'rabbit'});
    await expect(page.locator('#sorted-list')).toHaveValue('rabbit');
})