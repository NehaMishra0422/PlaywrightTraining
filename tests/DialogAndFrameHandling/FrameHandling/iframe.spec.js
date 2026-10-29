import {test,expect} from '@playwright/test';

test('iframe practical', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const iframe = page.frameLocator('#courses-iframe');
    await iframe.locator("a[href*='sign_in']").click();
})