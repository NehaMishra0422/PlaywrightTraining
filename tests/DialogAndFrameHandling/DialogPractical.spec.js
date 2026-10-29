import {test,expect} from '@playwright/test';

test.skip('Alert with OK', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog=> {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
        //await dialog.dismiss();
    })
    //await page.pause();
    await page.getByRole('button',{name : 'Simple Alert'}).click();
})

test.skip('Confirmation dialog with OK and Cancel', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();   //close using OK button
        //await dialog.dismiss();  //close using cancel button
    })
    await page.getByRole('button', {name : 'Confirmation Alert'}).click();
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');

})

test('Prompt dialog',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{

        //verify type of dialog
        expect(dialog.type()).toContain('prompt');

        //verify the message
        expect(dialog.message()).toContain('Please enter your name:');

        //verify the default value
        expect(dialog.defaultValue()).toContain('Harry Potter');

        // by passing value in accept we are changing the value fron Harry Porter to Neha
        //Value neha will be passed to input box
        await dialog.accept('Neha');  

    })
    await page.getByRole('button', {name : 'Prompt Alert'}).click();
    await expect(page.locator('#demo')).toContainText('Neha');
})

test('page.once practical', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.once('dialog',async dialog=>{

        //verify type of dialog
        expect(dialog.type()).toContain('prompt');

        //verify the message
        expect(dialog.message()).toContain('Please enter your name:');

        //verify the default value
        expect(dialog.defaultValue()).toContain('Harry Potter');

        // by passing value in accept we are changing the value fron Harry Porter to Neha
        //Value neha will be passed to input box
        await dialog.accept('Neha');  

    })
    await page.getByRole('button', {name : 'Prompt Alert'}).click();
    await expect(page.locator('#demo')).toContainText('Neha');
})
//diff b/w page.on and page.once