import {test,expect} from '@playwright/test';

expect.extend({
    validUsername(name){
        const pass = name.length>=5;
        return{
           pass,
           message:()=>
           `Expected length of ${username} must be greater than 5`
        }}})

test('custom assertion', async({page})=>{
      await page.goto('https://www.saucedemo.com/')
      const name = 'standard_user';
      await page.locator('#user-name').fill(name);
      expect(name).validUsername();
})