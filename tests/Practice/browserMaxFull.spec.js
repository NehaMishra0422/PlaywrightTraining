import {test, expect , chromium} from '@playwright/test';

test('Browser maximized screen', async({})=>{
    const browser = await chromium.launch({
        headless : false,
        args : ['--start-maximized']
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/practice');
})

test('Browser full screen ', async({})=>{
    const browser = await chromium.launch({
        headless : false,
        args : ['--start-fullscreen']
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/practice');
})