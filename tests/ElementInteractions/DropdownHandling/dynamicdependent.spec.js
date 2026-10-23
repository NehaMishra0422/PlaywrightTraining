import {test,expect} from '@playwright/test';

test('Dynamic Dependent Dropdown', async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html#section-dropdowns');

    const country = page.getByTestId('dep-dropdown-country');
    await country.click();
    await country.selectOption({value : 'india'});
    await expect(country).toHaveValue('india');

    const state = page.getByTestId('dep-dropdown-state');
    await state.click();
    await state.selectOption({value : 'maharashtra'});
    await expect(state).toHaveValue('maharashtra');

    const city = page.getByTestId('dep-dropdown-city');
    await city.click();
    await city.selectOption({value : 'mumbai'});
    await expect(city).toHaveValue('mumbai');
})