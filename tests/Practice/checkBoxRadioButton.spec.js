import {test,expect} from '@playwright/test';

test('CheckBox -single',async({page})=>{
    await page.goto('https://www.qapractice.com/practice-different-ui-elements');
    await expect(page.locator('#ui-single-checkbox')).not.toBeChecked();
    await page.locator('#ui-single-checkbox').check();
    await expect(page.locator('#ui-single-checkbox')).toBeChecked();

    //multi checkbox
    await expect(page.locator('#ui-checkbox-option2')).not.toBeChecked();
    await page.locator('#ui-checkbox-option2').check();
    await expect(page.locator('#ui-checkbox-option2')).toBeChecked();

})

test('Radio button',async({page})=>{
    await page.goto('https://www.qapractice.com/practice-different-ui-elements');
    await expect(page.locator("input[name='radioGroup']").nth(1)).not.toBeChecked();
    await page.locator("input[name='radioGroup']").nth(1).uncheck();
    await page.locator("input[name='radioGroup']").nth(1).check();
    await expect(page.locator("input[name='radioGroup']").nth(1)).toBeChecked();
})