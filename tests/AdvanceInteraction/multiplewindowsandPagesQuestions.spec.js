/*
1. What is the difference between page.waitForEvent('popup') and context.waitForEvent('page')?
Both methods are used to handle newly opened tabs or windows, but they have different scopes.

page.waitForEvent('popup')	                     context.waitForEvent('page')
Listens for a popup opened by a specific page.	Listens for a new page opened anywhere within the browser context.
Page-specific event.	                        Browser-context-level event.
Used when a particular page opens a new tab    	Used when any page in the context can open a new tab/window.


2. In which situations would you use the popup event versus the page event?
Use page.waitForEvent('popup') when:
- A specific page opens a new tab.
- Clicking a link opens a new browser window.
- Clicking a button triggers a popup from the current page.
Use context.waitForEvent('page') when:
- Multiple pages can open new tabs.
- You don't know which existing page will open a new tab.
- You want to listen at the browser context level.

3. How would you handle multiple tabs opened from the same page and identify the correct one?
We can use context.waitForEvent('page') or page.waitForEvent('popup') to capture newly opened tabs.

If multiple tabs are opened, we can identify the correct tab using:
- Page title.
- URL.
- Page locator or visible content.

4. What happens if you try interacting with a page that has already been closed?
If we try interacting with a closed page, Playwright throws an error because the page is no longer available.
Ex-
test('Closed page', async ({ page }) => {

    await page.goto('https://example.com');

    await page.close();

    // This will throw an error
    await page.locator('#username').fill('Neha');

});

How to handle it?

We can check whether the page is closed using page.isClosed().
Ex-
test('Check closed page', async ({ page }) => {

    await page.goto('https://example.com');

    await page.close();

    if (!page.isClosed()) {
        await page.locator('#username').fill('Neha');
    } else {
        console.log('Page is already closed');
    }

});


























*/