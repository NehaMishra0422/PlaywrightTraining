/*

Test hooks are used to execute some common code before or after test cases. They help avoid writing the same code repeatedly in multiple tests.

1. Types of Playwright hooks
Playwright provides four main test hooks:
Hook	                     When does it execute?
beforeAll()	                 Once before all tests in a scope
afterAll()	                 Once after all tests in a scope
beforeEach()	             Before every test
afterEach()	                 After every test

2. beforeEach()
Executes before every test case.


test.beforeEach('Login',async({page})=>{
    //code
    })

test.afterEach('after',async({page})=>{
    //code
    })


before running hte hooks test we need to do some configurations.
By default it wil run in Parallel mode

go to playwright.config.js
export default defineConfig({
fullyParallel: false,

(by default it is true, we have to make it false)

workers: process.env.CI ? 1 : undefined,
(by default it is 2, we will make it 1 so that only pne worker will work)

test.beforeAll('beforeAll',async({browser})=>{
    page = await browser.newPage();
    })
test.afterAll('After all',async()=>{
    //code
    }   
test('homepage',async()=>{
    //code
    })    
test('cart page',async()=>{
    //code
    }) 
    
beforeAll() and afterAll(), dosen't support page fixture so we have to create it.
we can pass browser and useing the browser fixture we can create page and use to further testing.    
*/
