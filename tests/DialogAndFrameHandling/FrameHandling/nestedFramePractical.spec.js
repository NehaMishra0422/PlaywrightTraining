import {test,expect} from '@playwright/test';

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
    await childFrame[0].locator('.uHMk6b.fsHoPb').nth(0).check();
    await childFrame[0].getByText('Next').click();
    await childFrame[0].locator('.whsOnd.zHQkBf').fill('Test nested frame');
})