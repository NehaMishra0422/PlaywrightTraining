import{test as base, expect} from '@playwright/test';

export const test = base.extend({
    SauceDemo : async({page},use)=>{
        await page.goto('https://www.saucedemo.com/');
        await use(page);
        console.log('finished');

    }
})
export {expect};