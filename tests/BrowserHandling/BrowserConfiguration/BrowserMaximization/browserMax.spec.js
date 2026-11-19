//opens maximized window while keeping the browser tabs and address bar visible.

import {test,expect,chromium} from '@playwright/test';
test('Browser maximization', async()=>{
    const browser = await chromium.launch({
        headless : false,
        args : ['--start-maximized']
    });
    const context = await browser.newContext({
        viewport: null,
        deviceScaleFactor: undefined
    });

    const page = await context.newPage();
    await page.goto('https://www.google.com');
   // await page.waitForTimeout(3000);
    await browser.close();
});