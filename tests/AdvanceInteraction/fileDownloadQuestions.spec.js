/*
1. How do you handle file downloads in Playwright?
Playwright provides the download event to handle file downloads.

We can:
1. Wait for the download event.
2. Click the Download button.
3. Get the downloaded file information.
4. Save the file to a specific location.

Ex- 
import { test, expect } from '@playwright/test';

test('File Download', async ({ page }) => {
    await page.goto('https://example.com/download');
    const downloadPromise = page.waitForEvent('download');
    await page.getByText('Download').click();
    const download = await downloadPromise;
    console.log(await download.suggestedFilename());
    await download.saveAs('downloads/sample.pdf');
});

We handle downloads using page.waitForEvent('download'), which waits for the download to start. 
We can then use suggestedFilename() and saveAs() to get and save the downloaded file.

2. What is the purpose of page.waitForEvent('download')?
It waits for a file download event triggered by an action on the page.
Ex
const downloadPromise = await Promise.all([
page.waitForEvent('download');
page.getByText('Download').click();
]);
const filename = downloadPromise.suggestedFilename(

3. Why should you register the download event before clicking the Download button?
Because the download event may occur immediately after clicking the button.

If we register the event after clicking, we might miss the download event, causing the test to hang or time out.

incorrect approach =
const [download] = await Promise.all([
page.getByRole('button',{name : 'download'}),
page.waitForEvent('download')
])

correct appoach -
const [download] = await Promise.all([
page.waitForEvent('download'),
page.getByRole('button',{name : 'download'})
])

We register the event listener before performing the action to avoid missing the event. 
This is a best practice for handling asynchronous events in Playwright.

4. How would you get the suggested filename of a downloaded file?
We use download.suggestedFilename().

5. How would you save a downloaded file to a specific location?
We use download.saveAs().

ex
await download.saveAs('Download/example.pdf');
await download.saveAs('D:/Download/example.pdf');

6. What is the difference between uploading a file and downloading a file in Playwright?
File Upload	                                        File Download
Sends a file from the system to the application.	Downloads a file from the application to the system.
Uses setInputFiles().	                            Uses waitForEvent('download').
Usually works with an HTML file input.	            Usually triggered by clicking a download link or button.
Uploads an existing file.	                        Saves a downloaded file using saveAs().

7. How would you verify that a downloaded file exists and is not empty?
We can use Node.js fs module along with Playwright.
Method	                Purpose
fs.existsSync()	        Checks whether the file exists.
fs.statSync()	        Gets file information.
stats.size	            Returns file size in bytes.
toBeGreaterThan(0)	    Checks that file is not empty.

ex-
import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Verify downloaded file', async ({ page }) => {
    await page.goto('https://example.com/download');
    const downloadPromise = await Promise.all([
    page.waitForEvent('download');
    await page.getByText('Download').click();
]);
    const download = await downloadPromise.suggestedFilename();
    const filePath = 'D:/PlaywrightTraining/downloads/invoice.pdf';
    await download.saveAs(filePath);

    // Verify file exists
    expect(fs.existsSync(filePath)).toBeTruthy();

    // Verify file is not empty
    const stats = fs.statSync(filePath);
    expect(stats.size).toBeGreaterThan(0);

});

































*/