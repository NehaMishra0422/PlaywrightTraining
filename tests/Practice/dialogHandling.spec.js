import {test,expect} from '@playwright/test';

test('Dialog Handling - alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //dialog handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })
    await page.locator('#alertBtn').click();
})

test('Dialog Handling - confirmation',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    })
    await page.locator('#confirmBtn').click();
})

test('Dialog Handling - prompt',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept();
    })
    await page.locator('#promptBtn').click();
})

test('Dialog handle-alert(Rahul Shetty)',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Hello , share this practice page and share your knowledge');
        await dialog.accept();
    })
    await page.locator('#alertbtn').click();
})

/*
test('Dialog Handling - confirm', async({page})=>{
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Hello , Are you sure you want to confirm?');
        await dialog.accept();
    })
    await page.locator('#confirmbtn').click();
})
    */