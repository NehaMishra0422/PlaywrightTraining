import {test,expect} from '@playwright/test';

test('Mouse Right Click', async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.locator('p .context-menu-one').click({button : 'right'});

})