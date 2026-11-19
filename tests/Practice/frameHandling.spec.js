import {test,expect} from '@playwright/test';

test('Frame Handling',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const frame = page.frameLocator('#courses-iframe');
    await expect(frame.locator("a[href*='/sign_in']")).toBeVisible();
    await frame.locator("a[href*='/sign_in']").click();
})

test('Frame Handling another example',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames');
    const frame1 = page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1'});
    await frame1.locator("input[name='mytext1']").fill('Frame Testing');
})

test('nested frame', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3'});
    await frame3.locator("input[name='mytext3']").fill('Frame 3');

    const nestedFrame = frame3.frameLocator('iframe');
    await expect(nestedFrame.locator('.rseUEf.nQOrEb').nth(1)).not.toBeChecked();
})

test('Multiple frame handling',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const iframe1 = page.frameLocator("frame[src='frame_4.html']");
    await iframe1.locator("input[name='mytext4']").fill('Frame4');

    const iframe2 = page.frameLocator("frame[src='frame_2.html']");
    await iframe2.locator("input[name='mytext2']").fill('Frame2');

})