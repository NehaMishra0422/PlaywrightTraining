import {test,expect} from '@playwright/test';
test('Double Click', async({page})=>{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html?');
    await page.getByRole('button',{name : 'Double-Click Me To See Alert'}).dblclick();
})