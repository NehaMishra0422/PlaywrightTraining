import {test,expect,chromium} from '@playwright/test';
test('Page Handling', async({browser})=>{
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto('https://www.google.com/');
    await page2.goto('https://www.amazon.in/');
})

test('Page Handling-new page',async({})=>{
    const browser = await chromium.launch({headless : false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-browser-tabwindow');
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator('#btn-open-pw-tab').click()
    ]);
    await expect(newPage).toHaveURL('https://playwright.dev/');
    await expect(newPage.locator('.highlight_gXVj')).toContainText('Playwright');
})

test('Page Handling- Rahul Shetty',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/practice');
    const [newPage] = await Promise.all([
       context.waitForEvent('page'),
        page.locator('a[href*="sign_up"]').nth(1).click()
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(/sign_up/);
    await expect(newPage).toHaveTitle('Rahul Shetty Academy');
})