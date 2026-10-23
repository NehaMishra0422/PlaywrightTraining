import {test,expect} from '@playwright/test';

test('Upload single file',async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await page.locator('#upload-single').click();
    await page.locator('#upload-single').setInputFiles('tests/uploadFiles/PDF1 file.pdf');
    await expect(page.locator('#upload-single-status')).toHaveText('✓ File Uploaded Successfully');
    await page.waitForTimeout(5000);
})

test('Upload Mutliple files', async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await page.locator('#upload-multiple').click();
    await page.locator('#upload-multiple').setInputFiles(['tests/uploadFiles/PDF1 file.pdf','tests/uploadFiles/PDF2 file.pdf']);
    await expect(page.locator('#upload-multiple-status')).toHaveText('✓ 2 Files Uploaded Successfully');
    
    //reset upload
    await page.locator('#btn-reset-multiple').click();

})


    
