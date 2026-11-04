import {test,expect,chromium} from '@playwright/test';

test('Multiple Window-Tab',async ()=>{
    const browser = await chromium.launch({headed : true});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demoqa.com/browser-windows');
    await expect(page).toHaveTitle('demosite');

    const [tab] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#tabButton').click()
    ])

    await expect(tab).toHaveURL('https://demoqa.com/sample');
    await expect(tab.locator('#sampleHeading')).toHaveText('This is a sample page');
})

test('Multiple window - new window',async({page,context})=>{
    await page.goto('https://demoqa.com/browser-windows');
    
    //wait for new window
    const [newWin] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#windowButton').click()
    ])

    await expect(newWin).toHaveURL('https://demoqa.com/sample');
    await expect(newWin.locator('#sampleHeading')).toHaveText('This is a sample page');
})

test('Multiple Window - new window message', async({page,context})=>{
    await page.goto('https://demoqa.com/browser-windows');

    //new window message
    const [messageWindow] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#messageWindowButton').click()
    ])

    await expect(messageWindow.locator('body')).toContainText('Knowledge');
})