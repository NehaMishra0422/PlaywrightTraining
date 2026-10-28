/*

Timeouts : are used in playwright to define how long the framework should wait before failing a test
or assertion. Playwright provides flexible options to manage timeouts globally or locally

1. Test Timeout : 
Controls the maximum time allowed for the entire test, including its setup and test body.

Goblal configuration - means timout set for all the tests
in playwright.config.js
under export default defineConfig
add
timeout : 40*1000, //40s
by default it is 30000 ms/30 s

Local configuration - means timeout set for only particular test
in example.spec.js file
add
test.setTimeout(40000)  //40ms

the local timeout overrides the global timeout when both are configured on both levels ie locally and globally

2. Timeout for Assertions : 
Controls how long Playwright waits for an assertion to succeed.
Default time is 5s
Here also we can set expect(assertions) timeout for globally and locally

Global configuration -
in playwright.config.js
under export default defineConfig
add
expect :{timeout : 10*1000} , //10s
by default it is 5000 ms/5 s

Local configuration -
in example.spec.js file
add
test.setTimeout(40000) 

TYPES OF TIMEOUTS -
1. Test Timeout - by default its 30s
2. Expect Timeout - by default its 5 s
3. Action Timeout - No Timeout by default
4. Navigation Timeout - No timeout by default
5. Global Timeout - No timeout by default

3. Action timeout :
Controls how long Playwright waits for an action to complete, including the necessary actionability checks.

Global configuration -
export default defineConfig({
    use: {
        actionTimeout: 5000
    }
});

Local Configuration -
Ex - await page.getByRole('button', { name: 'Login' }).click({ timeout: 2000 });

4. Navigation Timeout -
Controls how long Playwright waits for navigation operations, such as page.goto().

Global Configuration -
export default defineConfig({
    use: {
        navigationTimeout: 10000
    }
});

Local Configuration -
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{timeout : 10000});

5. Global Timeout -
Controls the maximum duration of the entire test run, rather than an individual test.

Global configuration :
export default defineConfig({
    globalTimeout: 300000 
});

Here, the entire test run has a maximum duration of 5 minutes.

*/