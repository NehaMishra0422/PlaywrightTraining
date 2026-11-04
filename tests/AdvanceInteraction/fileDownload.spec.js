import {test,expect} from '@playwright/test';

test('File Download simple way',async({page})=>{
    
    //direct upload and download
    await page.goto('https://demoqa.com/upload-download');
    await page.locator('#uploadFile').click();
    await page.locator('#uploadFile').setInputFiles('tests/uploadFiles/PDF1 file.pdf');
    await page.getByRole('button', {name : 'download'});
})

test('File download',async({page})=>{
    await page.goto('https://practice.expandtesting.com/download');

    //await for download event and click download link
    const [download]= await Promise.all([
         page.waitForEvent('download'),
         page.locator("a[href*='file.json']").click()
    ])

    //Get downloaded file name
     console.log( download.suggestedFilename());  //returns the suggested name of the downloaded file.
})

test('Save downloaded file',async({page})=>{
    await page.goto('https://practice.expandtesting.com/download');
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("a[href*='file.json']").click()
    ])
    await download.saveAs('Downloads/some-file.json');
    await download.saveAs('D:/DownloadsPW/some-file.json');

    //to verify downloaded file name
    const fileName =  download.suggestedFilename();
    await expect(fileName).toBe('some-file.json');

})

//ned to look more