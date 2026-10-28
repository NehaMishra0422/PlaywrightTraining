import {test,expect} from '@playwright/test';

test('Timeout test',async({page})=>{
    test.setTimeout(60000);  //test level or local timeout - test timeout
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    //Assertions
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{timeout : 10000});
    await expect(page).toHaveTitle('OrangeHRM',{timeout : 10000});
    await expect(page.getByRole('heading',{name : 'Login'})).toHaveText('Login',{timeout : 10000});

    //actions
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name : 'Login'}).click();

})