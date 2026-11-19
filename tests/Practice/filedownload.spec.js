import{test,expect,chromium} from '@playwright/test';

test('File Download ',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://practice.expandtesting.com/download');
    const [download] = await Promise.all([
        context.waitForEvent('download'),
        page.locator("a[href*='NikitaDhall_QA.pdf']").click()
    ])
    await download.saveAs('Download/1794989496762_NikitaDhall_QA.pdf');
    await download.saveAs('D:/DownloadsPW/1794989496762_NikitaDhall_QA.pdf');

    const fileName = download.suggestedFilename();
    await expect(fileName).toBe('1794989496762_NikitaDhall_QA.pdf');
})