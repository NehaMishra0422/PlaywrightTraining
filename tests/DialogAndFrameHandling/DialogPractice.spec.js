import {test,expect} from '@playwright/test';

test('Alert with OK', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Hello , share this practice page and share your knowledge');
        await dialog.accept();
    })
    await page.getByRole('button',{name : 'Alert'}).click();
})

test('Confirm Dialog',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Hello , Are you sure you want to confirm?');
        await dialog.accept();
    })
    await page.getByRole('button', {name : 'Confirm'}).click();
})

test('Next page handling',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator("a[href*='job-ready']").click(),
    ])
})