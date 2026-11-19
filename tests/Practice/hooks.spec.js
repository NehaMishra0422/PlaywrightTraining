import {test,expect} from '@playwright/test';

let page;
let context;

test.describe.configure({mode : 'parallel'});
test.beforeAll('Login', async({browser})=>{
    console.log('Execute after all test case');
    context = await browser.newContext();
    page = await context.newPage();
})

test.beforeEach(async()=>{
    console.log('Execute before each test case')
    await page.goto('https://www.demoblaze.com/');
})
test('Case 1- verify homepage title', async()=>{
    console.log('Verify homepage title');
    await expect(page).toHaveTitle('STORE');
})
test('Case 2 - verify login button', async()=>{
    console.log('Verify login button');
    await expect(page.locator('#login2')).toBeVisible();
})
test('Case 3 - verify signup button', async()=>{
    console.log('verify sign up button');
    await expect(page.locator('#signin2')).toBeVisible();
})

test.afterEach('Execute after each test case', async()=>{
    console.log('Completed after each test case');
})
test.afterAll('Execute after all test case', async()=>{
    console.log('Close after all test case');
    await context.close();
})