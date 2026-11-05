/*

Example - Imagine in a classroom you have to teach , the whiteboeard are ready, projector is connected and markers are all placed.
You just have to teach as all things are already setup ,so similarly fixtures provides setup that are neede dto perform tests.

1. Fixture -
A fixture is a reusable setup mechanism that provides everything a test needs to execute.

Imagine you're testing an e-commerce website.

Before testing, you need:
- A browser.
- A browser tab.
- A logged-in user.
- Sometimes test data.
- Sometimes an API connection.
Instead of creating these resources repeatedly, Playwright fixtures provide them automatically or allow you to create your own.

example :
import { test, expect } from '@playwright/test';

test('Verify website title', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});

Here:
- async allows us to use await.
- { page } is JavaScript object destructuring.
- page is a Playwright built-in fixture.
- Playwright automatically provides the page object to the test.
You don't need to create the browser, context or page manually

2. Working of Fixture
-> Test Starts ( Playwright identifies the required fixtures ) 
-> Fixture setup ( Browser → Context → Page )
-> Test execution ( Your test performs actions and assertions )
-> Fixture teardown ( Playwright cleans up the resources )
-> Test Completed

3. Three important built-in fixtures

a) Browser Fixture -> The browser fixture provides the browser instance.
Example :

test('Browser example', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.demoblaze.com/');
});
Here, we are manually creating the context and page using the browser fixture.

b) Context fixture -> The context fixture provides an isolated browser session.
Example :
test('Context example', async ({ context }) => {
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto('https://www.demoblaze.com/');
    await page2.goto('https://www.demoblaze.com/');
});

Here, both pages belong to the same browser context.They can share cookies and session information.

c) Page Fixture -> The page fixture provides a browser tab.
Example :
test('Page example', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click();
});

Here, we don't need to create Browser and context it will be automatically handled by page fixture internally.



*/