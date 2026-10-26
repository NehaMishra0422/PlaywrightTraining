import {test,expect} from '@playwright/test';

expect.extend({
    validUserName(name){
        const pass = name.length >=5;
        return{
            pass,
            message:()=>
                `Expected username "${username}" to have at least 5 characters`
        };
    }
});

test('Custom Assertions', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    const name = 'standard-user';
    await page.locator('#user-name').fill(name);
    expect(name).validUserName();
})