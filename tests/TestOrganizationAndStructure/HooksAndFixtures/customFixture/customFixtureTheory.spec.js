/*

1. Custom Fixture :
A custom fixture is a fixture that you create yourself using test.extend() to reuse setup, resources, or functionality across multiple tests.

For example, imagine you have 5 test cases, and all of them need to:
1. Open Demoblaze.
2. Navigate to the homepage.
3. Perform some action.
4. Verify the result.
Instead of writing the same navigation code in every test, you can create a custom fixture that handles it.

without custom fixture
let suppose there are 3 test cases
test('test case 1',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    some more line of code
})
test('test case 2',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    some  ore line of code
})
test('test case 3',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    some more line of code
})        

in all these three test cases, we are using repeated line ie
await page.goto('https://www.demoblaze.com/');



*/