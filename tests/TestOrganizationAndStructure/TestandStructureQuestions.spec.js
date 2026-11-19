/*

1. What is the purpose of test.describe()?
test.describe() is used to group related test cases into a logical block.
It helps organize tests that belong to the same feature or functionality.

Ex ->
import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {

    test('Valid login', async ({ page }) => {
        // Test steps
    });

    test('Invalid login', async ({ page }) => {
        // Test steps
    });

    test('Forgot password', async ({ page }) => {
        // Test steps
    });

});

Here, all three tests are grouped under Login Functionality.

2. Can you create nested describe blocks? Why would you use them?
Yes. We can create a test.describe() block inside another test.describe() block.
Nested describe blocks help organize tests at multiple levels.

ex - 
test.describe('User Management', () => {

    test.describe('Login', () => {
        test('Valid login', async ({ page }) => {
            // Test steps
        });

        test('Invalid login', async ({ page }) => {
            // Test steps
        });
    });

    test.describe('Registration', () => {
        test('New user registration', async ({ page }) => {
            // Test steps
        });
    });

});

Why use nested describe blocks?
- To organize tests by module and functionality.
- To apply different hooks to specific groups.
- To improve readability and maintainability.

3. What is the difference between test() and test.describe()?
test()	                                     test.describe()
Defines an individual test case.	         Groups multiple test cases.
Contains test steps and assertions.	         Contains tests and nested describe blocks.
Executes as a test.	Organizes tests;         it is not itself a test case.

ex- test.describe('Login Tests', () => {

    test('Valid login', async ({ page }) => {
        await page.goto('https://example.com');
        // Assertions
    });

});

Here, test.describe() groups the test, while test() defines the actual test case.

4. What happens when you use test.only()?
test.only() runs only the selected test and skips other tests in the same Playwright test run.

It is useful when debugging a specific test.

ex- test('Test 1', async ({ page }) => {
    console.log('Test 1');
});

test.only('Test 2', async ({ page }) => {
    console.log('Test 2');
});

test('Test 3', async ({ page }) => {
    console.log('Test 3');
});

Only Test 2 will run.

Imp - Never leave test.only() in committed code because it can cause other tests to be skipped in CI.

5. What is the difference between test.skip(), test.fixme(), and test.fail()?
All three are Playwright test annotations, but they have different purposes.

Annotation	          Purpose
test.skip()	          Skips a test that should not run.
test.fixme()	      Marks a test as needing a fix; Playwright skips it.
test.fail()	          Marks a test as expected to fail.

Easy way to remember:
- skip = Don't execute.
- fixme = Needs fixing, so don't execute.
- fail = Execute, but failure is expected

6. What does test.slow() do?
test.slow() marks a test as slow and triples its default test timeout.
For example, if the default timeout is 30 seconds, the slow test gets 90 seconds.
We use it when a test is expected to take longer than normal.
Note: It changes the test timeout, not the assertion timeout or every other timeout in Playwright.

7. Can you skip a test conditionally? Give an example.
Yes. We can use test.skip(condition, reason) to skip a test based on a condition

ex- test('Mobile test', async ({ page, isMobile }) => {

    test.skip(!isMobile, 'This test is only for mobile devices');

    await page.goto('https://example.com');

});

Explanation:
- If isMobile is false, the test will be skipped.
- If isMobile is true, the test will execute.

we can also skip using browser name

ex- test('Browser-specific test', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox', 'Not supported in Firefox');

    await page.goto('https://example.com');

});

7. What are test annotations in Playwright?
Annotations provide additional information about a test and control how Playwright executes or reports it.

Common annotations include:
Annotation	    Purpose
test.skip()	    Skip a test.
test.fixme()	Mark a test as needing a fix and skip it.
test.fail()	    Mark a test as expected to fail.
test.slow()	    Triple the test timeout.
test.only()	    Run only the selected test.

8. What are test tags, and how can you run tests using tags?
Tags are labels used to categorize tests.

For example:
- @smoke
- @regression
- @sanity
- @login
We can assign tags using the tag option.

Ex- 
test('Valid login', {tag: '@smoke'}, async ({ page }) => {

    await page.goto('https://example.com');

});

test('Invalid login', {tag: ['@smoke', '@regression']}, async ({ page }) => {

    await page.goto('https://example.com');

});

We can then execute tests using the --grep command-line option.
npx playwright test --grep "@smoke"
npx playwright test --grep "@regression"

9. How would you run only tests tagged as @smoke?
npx playwright test --grep "@smoke"

10. How would you exclude tests tagged as @regression?
npx playwright test --grep-invert '@regression'

11. What is the difference between annotations and tags?
Annotations	                                           Tags
Control test behavior or provide test metadata.	       Categorize tests.
Examples: skip, fixme, fail, slow.	                   Examples: @smoke, @regression.
Can affect execution and reporting.	                   Commonly used to filter tests.
Applied using Playwright annotation APIs.	           Applied using the tag option or supported tag syntax.

Simple explanation:
- Annotations tell Playwright how to treat a test.
- Tags tell us which category a test belongs to.

12. Why should test.only() be avoided in CI pipelines?
test.only() should be avoided because it runs only the selected test and skips all other tests in the run.

Ex- test.only('Login test', async ({ page }) => {
    // Test steps
});

test('Payment test', async ({ page }) => {
    // Test steps
});

test('Registration test', async ({ page }) => {
    // Test steps
});

If this code is committed and executed in CI:
- Only Login test will run.
- Payment and Registration tests will be skipped.
- The pipeline may pass without validating the complete application.
- Important bugs may go undetected.
Best practice: Use test.only() locally for debugging, but remove it before committing code.

You can also enable this protection in playwright.config.js:
export default defineConfig({
    forbidOnly: !!process.env.CI,
});

This makes Playwright fail the test run if test.only() is present in CI.














*/