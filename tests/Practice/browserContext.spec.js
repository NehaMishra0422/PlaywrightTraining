import {test,expect, chromium} from '@playwright/test';

test('Browser Context', async()=>{
    const browser = await chromium.launch({headless : false});
    const context = await browser.newContext();
    const page = await context.newPage();
})