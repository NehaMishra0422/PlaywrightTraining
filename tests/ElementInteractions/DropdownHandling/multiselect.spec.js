import {test,expect} from '@playwright/test';

test('Select Multiple value', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#colors').selectOption(['red','blue']);
    await expect(page.locator('#colors')).toHaveValues(['red','blue']);
    
})    