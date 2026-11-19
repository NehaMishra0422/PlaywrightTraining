import {test,expect,chromium} from '@playwright/test';

test('New Tab', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoqa.com/browser-windows');
    const [tab] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#tabButton').click()
    ])
    await expect(tab).toHaveURL('https://demoqa.com/sample');
    await expect(tab.locator('#sampleHeading')).toHaveText('This is a sample page');
})

test('New Window',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoqa.com/browser-windows');
    const [window] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#windowButton').click()
    ])
    await expect(window).toHaveURL('https://demoqa.com/sample');
    await expect(window.locator('#sampleHeading')).toHaveText('This is a sample page');
})

test('window message',async()=>{
    const browser =await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoqa.com/browser-windows');
    const [message] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#messageWindowButton').click()
    ])
    await expect(message.locator('body')).toContainText('organization.')
})