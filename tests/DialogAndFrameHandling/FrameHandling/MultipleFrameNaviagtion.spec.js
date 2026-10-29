/*A webpage may contain multiple independent iframes. You need to identify the correct frame for each element
*/

import {test,expect} from '@playwright/test';

test('Frame handling',async({page})=>{
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

