import {test,expect} from '@playwright/test';

test('Auto Suggestive dropdown', async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html#section-dropdowns');
    const auto = page.getByPlaceholder('Search for Products');
    await auto.click();
    await auto.fill('ph');
    await page.getByRole('option',{name : 'Smart Phone'}).click();
    await expect(auto).toHaveValue('Smart Phone');
})