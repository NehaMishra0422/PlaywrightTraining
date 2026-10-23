/*
Hovering means moving the mouse pointer over an element without clicking it.

This is commonly used for:
- Dropdown menus
- Submenus
- Tooltips
- Hover effects

*/

import {test,expect} from '@playwright/test';
test('Mouse Hover',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.getByAltText('User Avatar').nth(1).hover();
    console.log(await page.getByText('name: user2').isVisible());
    console.log(await page.getByRole('link', {name : 'View profile'}).isEnabled());
    await page.getByRole('link', {name : 'View profile'}).click();
   
})