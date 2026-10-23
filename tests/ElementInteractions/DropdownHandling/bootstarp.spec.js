import {test,expect} from '@playwright/test';

test('Bootstrap dropdown', async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html#section-dropdowns');
    const dropdown = page.locator('#bd-job-title');
    await dropdown.click();
    await page.getByRole('option', {name : 'QA Engineer'}).click();
    //await expect(dropdown).toHaveValue('QA Engineer');
})