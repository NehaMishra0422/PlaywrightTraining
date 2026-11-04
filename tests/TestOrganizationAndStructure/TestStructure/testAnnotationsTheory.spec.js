/*

Test annotations
Annotations help control test execution and communicate the status or purpose of a test.

Playwright provides several annotations.
A. test.only()
Runs only the selected test and skips other tests in the project.
Example -

test.only('Test 1', async ({page}) => {
    await page.goto('https://example.com');
});

test('Test 2', async ({page}) => {
    await page.goto('https://google.com');
});

only Test 1 executes

Note : Never commit test.only() to your shared code or CI pipeline accidentally. 
It can cause other tests to be excluded.

B. Test.skip()
Skips a test completely.

Example-
test.skip('Test 1', async ({page}) => {

    await page.goto('https://example.com');

});

Test 1 will not execute.

we can also skip conditionally

test('Mobile test', async ({page, isMobile}) => {

    test.skip(!isMobile, 'This test is only for mobile');

    await page.goto('https://example.com');

});


C. test.fail()
Marks a test as expected to fail.

Example -

test.fail('Login with invalid credentials', async ({page}) => {

    await page.goto('https://example.com');

    expect(1).toBe(2);

});

The assertion fails, so Playwright considers the test as expected failure (rather than an unexpected failure).
If the test passes unexpectedly, Playwright reports it as an unexpected pass.

Useful when a known bug is present and you want to track it.

D. test.fixme()
Marks a test as not ready to run.

Example -
test.fixme('Payment functionality', async ({page}) => {

    await page.goto('https://example.com');

});
The test is skipped.

Difference between skip and fixme:
- skip: Test should not run under the current condition or situation.
- fixme: Test is not ready and needs to be fixed before execution

E. test.slow() 
Marks a test as slow and increases its test timeout to three times the default timeout.

Example -
test.slow();

test('Large file upload', async ({page}) => {

    await page.goto('https://example.com');

});

we can also add test.slow() inside test

test()=>{
    test.slow();
    }

For example, if your default test timeout is 30 seconds, test.slow() changes it to 90 seconds.

Quick comparison of annotations
Annotation	         Purpose
test.only()	         Run only selected tests
test.skip()	         Skip a test
test.fail()	         Expect test failure
test.fixme()	     Mark test as not ready
test.slow()	         Triple test timeout

*/