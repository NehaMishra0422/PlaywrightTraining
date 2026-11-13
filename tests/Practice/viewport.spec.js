import {test,expec} from '@playwright/test';

test('viewport practice',async({page})=>{
    await page.setViewportSize({
        width : 1200,
        height : 720
    });
    await page.goto('https://rahulshettyacademy.com/practice');
})