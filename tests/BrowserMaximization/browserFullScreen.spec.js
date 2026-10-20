//Full-screen mode hides browser controls such as the tabs and address bar.
// Chromium can be launched with the --start-fullscreen argument.

import {test,chromium} from '@playwright/test';

test('Browser full screen mode', async () => {
    const browser = await chromium.launch({
        headless : false,
        args : ['--start-fullscreen']
    })
    const context = await browser.newContext({
        //viewport : null ,
        deviceScaleFactor: undefined
    });
    const page = await context.newPage();
    await page.goto('https://www.google.com');
    await page.waitForTimeout(3000);
    await browser.close();
});
