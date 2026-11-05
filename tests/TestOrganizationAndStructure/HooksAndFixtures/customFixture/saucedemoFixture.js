import {test as base,expect} from '@playwright/test';

export const test = base.extend({
    sauceDemo : async({page},use)=>{
        //setup
        console.log('Login into sauce demo');
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name : 'Login'}).click();
        await use(page);
        console.log('Test finished');
    }
})
export {expect};