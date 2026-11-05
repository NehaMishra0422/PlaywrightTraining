import {test as base, expect} from '@playwright/test';

export const test = base.extend({
    //Fixture 1 : open Orange HRM website
    orangeHRM : async({page},use)=>{
        console.log('Open OrangeHRM website');
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await use(page);
    },

    //Fixture 2 : Login to orangeHRM website
    login : async({orangeHRM},use)=>{
        console.log('Login to OrangeHRM website');
        await orangeHRM.getByPlaceholder('Username').fill('Admin');
        await orangeHRM.getByPlaceholder('Password').fill('admin123');
        await orangeHRM.getByRole('button',{name : 'Login'}).click();
        await use(orangeHRM);
    }

})
export {expect};