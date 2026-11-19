/*

1. What is an explicit wait? When would you use one in Playwright?
An explicit wait means waiting for a specific condition or event before performing the next action.

In Playwright, we generally use auto-waiting, locator waits, assertions, and event waits.

Example: Wait until a button becomes visible before clicking it.
const loginButton = page.locator('#login');

await loginButton.waitFor({ state: 'visible' });
await loginButton.click();

When to use it:
- When an element appears after an API response.
- When a loading process takes time.
- When an element becomes visible dynamically.
- When waiting for a particular event, such as a popup or API response.

2. What is the difference between page.waitForTimeout() and locator.waitFor()?
page.waitForTimeout()	                        locator.waitFor()
Waits for a fixed amount of time.	            Waits for a specific element state.
Time-based wait.	                            Condition-based wait.
Does not check whether an element is ready.	    Checks the requested locator state.
Generally avoided in automation.	            Preferred when an explicit locator wait is needed.

ex - page.waitForTimeout()

await page.waitForTimeout(5000);

It waits exactly 5 seconds, even if the page is ready in 1 second.

ex-  locator.waitFor()
await page.locator('#login').waitFor({state: 'visible'});

it waits until the login element becomes visible or the timeout expires.

3. Why should fixed waits like page.waitForTimeout(5000) generally be avoided?
Fixed waits should be avoided because they make tests slower and less reliable.

Problems:
1. If the application loads in 1 second, the test unnecessarily waits 4 more seconds.
2. If the application takes 7 seconds, the test still fails after 5 seconds.
3. They make execution time unpredictable and increase overall test duration.

4. What are the different types of timeouts available in Playwright?
The important timeout types are:
Timeout	              Purpose	                                         Default
Test timeout	      Maximum time allowed for a test.	                 30 seconds
Assertion timeout	  Maximum time for an auto-retrying assertion.	     5 seconds
Action timeout	      Maximum time for an action such as click or fill.	 0 (no separate limit)
Navigation timeout	  Maximum time for navigation operations.	         0 (no separate limit)
Global timeout	      Maximum time for the entire test run.	             0 (disabled)

ex- await page.locator('#login').click({timeout: 10000});
This gives the click action a maximum of 10 seconds.

5. What is the difference between test timeout, assertion timeout, and action timeout?
1. Test timeout
Controls the maximum time allowed for the complete test.
Ex- test.setTimeout(60000);

2. Assertion timeout
Controls how long Playwright retries an assertion until the expected condition is met.
Ex - await expect(page.locator('#success')).toBeVisible({ timeout: 10000 });

3. Action timeout
Controls how long Playwright waits for an action, such as click or fill, to complete its actionability checks.
Ex- await page.locator('#submit').click({timeout: 15000});

Easy way to remember:
- Test timeout → Entire test.
- Assertion timeout → Expected condition.
- Action timeout → User action.

6. How can you configure the default test timeout in playwright.config.js?
We can configure it using the timeout property inside defineConfig().
import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 60000
});

Here, each test gets a maximum of 60 seconds.

We can also configure assertion timeout separately:
Ex-
import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 60000,

    expect: {
        timeout: 10000
    }
});

7. How can you override the timeout for a particular test or assertion?
We can override timeouts at the individual test or assertion level.

A. Override timeout for a particular test :
test('Slow application test', async ({ page }) => {
    await page.goto('https://example.com');
}, { timeout: 90000 });

B. Override timeout for an assertion
await expect(page.locator('#success')).toBeVisible({ timeout: 15000 });

This assertion gets 15 seconds.

C. Override timeout for an action
Ex- await page.locator('#submit').click({timeout: 20000});

This click gets 20 seconds.

8. What happens when a locator does not reach the expected state within the specified timeout?
Playwright stops waiting and throws a TimeoutError.

The test fails unless the error is handled.

9. If an application is slow only sometimes, how would you make your test more stable without increasing every timeout?
I would identify the slow step and apply a targeted condition-based wait or timeout rather than increasing timeouts globally.

10. How would you wait for a specific API response before validating the updated UI?
We can use page.waitForResponse().

Important: Register the response wait before performing the action that triggers the API request.

ex-
const responsePromise = page.waitForResponse(response =>
    response.url().includes('/api/users') &&
    response.status() === 200
);

await page.locator('#loadUsers').click();
const response = await responsePromise;
expect(response.status()).toBe(200);
await expect(page.locator('.user-list')).toBeVisible();

Explanation:
1. waitForResponse() waits for the matching API response.
2. We click the Load Users button.
3. Playwright waits until the API responds with status 200.
4. We validate that the updated user list is visible.

Practical scenario
11. A button appears only after an API response. How would you wait for it before clicking?
I would wait for the API response and then wait for the button to become visible before clicking it.

const responsePromise = page.waitForResponse(response=>
    response.url().includes('/api/Data')&&
    response.status() === 200
    );
    await page.locator('#loaduser').click();
    await responsePromise;
    await expect(response.status()).toBe(200);
    await expect(page.locator('.user-list')).toBeVisible();
 
12. A loading spinner disappears, but the page content is still not ready. How would you handle this?
I would not depend only on the spinner disappearing. I would also wait for the actual page content to become ready.

await expect(page.locator('.loading-spinner')).toBeHidden();

await expect(page.locator('.dashboard-content')).toBeVisible();

await expect(page.locator('.dashboard-title')).toHaveText('Dashboard');

Explanation:
1. Wait for the spinner to disappear.
2. Wait for the dashboard content to become visible.
3. Verify the expected dashboard title.

13. A test passes locally but fails in CI due to timing issues. How would you investigate it?
1. Check the error message: Identify which action or assertion timed out.
2. Enable screenshots: Capture screenshots when tests fail.
3. Use Playwright Trace Viewer: Inspect actions, locators, network activity, and screenshots.
4. Check CI resources: CI machines may be slower or have limited CPU and memory.
5. Check network/API delays: Verify whether the application or API is responding slowly.
6. Review waits: Replace fixed waits with condition-based waits.
7. Reproduce locally: Run tests with CI-like settings, such as the same browser and worker count.

ex-
import { defineConfig } from '@playwright/test';

export default defineConfig({
    retries: 1,
    use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    }
});

14. An element is visible but Playwright says it is not actionable. What could be the reasons?
An element can be visible but still not be ready for interaction.

For a click, Playwright checks whether the element is:
- Visible.
- Stable (not moving or animating).
- Receiving pointer events.
- Enabled.

Common reasons:
1. Overlay covering the element: A popup or loading overlay blocks the click.
2. Animation: The element is still moving.
3. Disabled element: The button is visible but disabled.
4. Another element intercepts the click: A transparent or overlapping element is on top.
5. Element is moving or changing position: The layout has not stabilized.






































*/