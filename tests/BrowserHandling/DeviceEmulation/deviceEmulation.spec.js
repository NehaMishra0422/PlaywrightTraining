//using playwright.config.js 

import {test} from '@playwright/test';
test('Device Emulation',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/docs/emulation');
})