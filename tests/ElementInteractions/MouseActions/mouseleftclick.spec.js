import {test,expect} from '@playwright/test';
test('Mouse Left Click' , async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    //left click
    await page.getByRole('button', {name : 'Add Element'}).click();

    //verifgy delete button is visible or not
    await expect(page.getByRole('button', {name : 'Delete'})).toBeVisible();
})