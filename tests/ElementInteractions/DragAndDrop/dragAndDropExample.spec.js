import {test,expect} from '@playwright/test';

test('Drag And Drop 1st Approach', async({page})=>{
    await page.goto('https://codepen.io/EpsilonDeltaCriterion/pen/jLoPgE');

    //this page deals with iframes
    //frameLocator() is used to locate an iframe on the page.
    //#result is the selector for iframe
    const frame = page.frameLocator('#result');
    const source =  frame.locator('#box5');
    const target =  frame.locator('#box105');
   await source.dragTo(target);

})

test('Drag and Drop 2nd approach ', async({page})=>{
    await page.goto('https://codepen.io/EpsilonDeltaCriterion/pen/jLoPgE?editors=1000');
    const frame1 = page.frameLocator('#result');

    //seoul --> south korea
    const source1 = frame1.locator('#box5');
    await source1.hover();
    await page.mouse.down();

    const target1 = frame1.locator('#box105');
    await target1.hover();
    await page.mouse.up();

    //washington to us
    const source2 = frame1.locator('#box3');
    const target2 = frame1.locator('#box103');
    await source2.hover();
    await page.mouse.down();

    await target2.hover();
    await page.mouse.up();


})