import {test,expect} from '@playwright/test';

test('Double Click', async({page})=>{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html?');
    await page.getByRole('button',{name : 'Double-Click Me To See Alert'}).dblclick();

})

test('Left click', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await page.getByRole('button',{name : 'Add Element'}).click();
    await expect(page.getByRole('button',{name : 'Delete'})).toBeVisible();
})

test('Right click', async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.locator('p .context-menu-one').click({button:'right'});
})

test('Hover',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.locator(".figure [alt='User Avatar']").nth(1).hover();
    await expect(page.locator('.figcaption h5').nth(1)).toHaveText('name: user2');
    await expect(page.locator("a[href='/users/2']")).toBeVisible();
   
})