import {test,expect} from '@playwright/test';

test('Keyboard Shorcuts', async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');
    const holder = page.getByPlaceholder('Paste one version of the text here.');
    await holder.fill('Keyboard Shorcuts Practice');
    await holder.press('Control+A');
    await holder.press('Control+C');
    await holder.press('Tab');
    await holder.press('Control+V');
})