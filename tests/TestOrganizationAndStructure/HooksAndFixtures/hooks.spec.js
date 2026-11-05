import {test,expect} from '@playwright/test';

let page;
let context;

//test.describe.configure({ mode: 'parallel' });

//Before ALL
test.beforeAll('Login',async({browser})=>{
    console.log('Before All: Browser setup started');
    context = await browser.newContext();
    page = await context.newPage();
})    

//Before Each
test.beforeEach(async()=>{
    console.log('Before Each: Navigating to website')
    await page.goto('https://www.demoblaze.com/');    
    
})    

//test case 1
test('Verify Homepage Title', async()=>{
  console.log('Executing Test 1- Verify Homepage');  
  await expect(page).toHaveTitle('STORE');

})

//test case 2
test('Verify login button', async()=>{
    console.log('Executing Test 2- Verify Login button');
    await expect(page.locator('#login2')).toBeVisible();
})

//test case 3
test('Verify sign up button',async()=>{
    console.log('Executing Test 3- verify signup button');
    await expect(page.locator('#signin2')).toBeVisible();
})

//test case 4
test('Verify Samsung Product', async () => {

    console.log('Executing Test 4- verify samsung poduct');
    await expect(page.getByRole('link',{name : 'Samsung galaxy s6'})).toBeVisible();

});

//test case 5
test('Verify Phone category',async()=>{
    console.log('Executing test 5- verify Phone category');
    await expect(page.getByRole('link',{name :'Phones'})).toBeVisible();
})

//After each
test.afterEach(async()=>{
    console.log('After Each: Test execution completed');
})

//after All
test.afterAll(async()=>{
    console.log('After All: Closing browser context');
    await context.close();

})
