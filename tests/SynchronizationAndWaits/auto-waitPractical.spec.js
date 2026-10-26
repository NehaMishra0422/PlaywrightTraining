import {test,expect} from '@playwright/test';

test('Auto-Waiting mechanism',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');

    //Assertion Auto wait
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
    await expect(page).toHaveTitle('Demo Web Shop');
    await expect(page.locator('.topic-html-content-header')).toHaveText('Welcome to our store');

    //Actions Auto Wait
    await page.locator('#small-searchterms').fill('Book');;
    await page.locator('.ui-corner-all').click();
    await page.getByRole('button',{name : 'Search'}).click();
})

