import {test,expect} from '@playwright/test';

test('locator.waitFor()',async({page})=>{
    await page.goto('https://playwrightlab.github.io/');
    await page.locator('#showBtn').click();

    //visible state
    await page.locator('#visibleElement').waitFor({state : 'visible'});

    //hidden state
    await page.locator('#hideBtn').click();
    await page.locator('#visibleElement').waitFor({state : 'hidden'});

    //attached state
    await page.locator('#addElementBtn').click();
    await expect(page.locator('.dynamic-el span')).toHaveText('Dynamic Element #1');
    await page.locator('.dynamic-el span').waitFor({state : 'attached'});

    //detached state
    await page.locator('#removeElementBtn').click();
    await page.locator('.dynamic-el span').waitFor({state : 'detached'});
})