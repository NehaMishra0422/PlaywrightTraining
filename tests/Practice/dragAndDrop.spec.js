import {test,expect} from '@playwright/test';

test('Drag And Drop- 1st Approach', async({page})=>{
    await page.goto('https://www.qapractice.com/practice-different-ui-elements');
    await page.locator("div[draggable='true']").hover();
    await page.mouse.down();

    await page.locator('.droppable').hover();
    await page.mouse.up();
})

test('Grag and Drrop - 2nd Approach',async({page})=>{
    await page.goto('https://www.qapractice.com/practice-different-ui-elements');
    const source = page.locator("div[draggable='true']");
    const target = page.locator('.droppable');
    await source.dragTo(target);
    
})