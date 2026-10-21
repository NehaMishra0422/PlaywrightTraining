import {test,expect} from '@playwright/test';

test ('Radio and CheckBoxes', async({page})=>{
    await page.goto('https://www.qapractice.com/practice-different-ui-elements');
    //checkbox
    await page.locator("input[name='option1']").check();
    await page.locator("input[name='option3']").check();
    await expect(page.locator("input[name='option1']")).toBeChecked();
    await expect(page.locator("input[name='option3']")).toBeChecked();
    await expect(page.locator("input[name='option2']")).not.toBeChecked();
    
    //radio button
    await page.locator("input[name='radioGroup']").last().check();
    await expect(page.locator("input[name='radioGroup']").last()).toBeChecked();
    await expect(page.locator("input[name='radioGroup']").nth(1)).not.toBeChecked();
})