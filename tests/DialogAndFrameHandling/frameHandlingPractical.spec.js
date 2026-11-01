import {test,expect} from '@playwright/test';

test('iframe practical', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const iframe = page.frameLocator('#courses-iframe');
    await iframe.locator("a[href*='sign_in']").click();
})

test('Multiple Frame handling',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //1st approach : using url
    //we can also use name but here there is no name attribute 
    //Ex- const frame1 = page.frame('nameOfFrame');
    const frame1 = page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1'});
    await frame1.fill("[name='mytext1']",'Hello!Neha');

    await page.waitForTimeout(2000);

    //2nd approach using frameLocator
    //here first we are getting the frame locator then frames input field locator 
    const frame2 = page.frameLocator("frame[src='frame_2.html']");
    await frame2.locator("[name='mytext2']").fill('Approach 2');

    await page.waitForTimeout(2000);
})

test('Nested frame practical', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3'});
    await frame3.locator("input[name='mytext3']").fill('Neha Mishra');

    // Access the nested iframe inside Frame 3 using method .chilFrames()
    //childFrames() returns an array of Frame objects, not a single frame. 
    // Therefore, you cannot directly call .locator() on the array.
    //here there is pnly one child frame so we are just accessing one chlid frame using index [0]
    const childFrame = frame3.childFrames();  //access the first child frame
    await childFrame[0].locator('.AB7Lab.Id5V1').nth(1).check();
   // await childFrame[0].locator('.uHMk6b.fsHoPb').nth(0).check();
    await childFrame[0].getByText('Next').click();
    await childFrame[0].locator('.whsOnd.zHQkBf').fill('Test nested frame');
})
