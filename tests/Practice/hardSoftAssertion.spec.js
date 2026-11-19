import {test,expect} from '@playwright/test';

test('Hard and soft assertion',async({page})=>{

    //hard assertion
    /*
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE001');
    await expect(page.getByRole('link',{name : 'Sign up'})).toBeEnabled();
    await page.getByRole('link',{name : 'Sign up'}).click();
    */

    //soft assertion
    
    await page.goto('https://www.demoblaze.com/');
    await expect.soft(page).toHaveTitle('STORE001');
    await expect.soft(page.getByRole('link',{name : 'Sign up'})).toBeEnabled();
    await page.getByRole('link',{name : 'Sign up'}).click();
    
})