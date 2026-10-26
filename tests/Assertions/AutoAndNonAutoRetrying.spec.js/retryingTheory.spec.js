/*
Auto-retrying : -
Playwright repeatedly checks the expected condition until it passes or the timeout expires.

Example:
await expect(page.locator('#success-message')).toBeVisible();

Suppose the success message takes two seconds to appear after clicking Login.
- Playwright checks whether the message is visible.
- If it is not visible yet, Playwright retries.
- Once it becomes visible, the assertion passes.
- If it never becomes visible before the timeout, the assertion fails.
This is useful because web applications often take time to load data or update the UI.

Common auto-retrying assertions include:
- toBeVisible() - Element is visible
- toBeHidden() - Element is hidden or absent
- toBeEnabled() - Element is enabled
- toBeDisabled - Element is disabled
- toBeChecked() - checkbox or radio button is checked 
- toBeEditable - element can be editied
- toHaveText() - Exact text match
- toContainText() - Text contains the expected value.
- toHaveValue() - Input has the expected value
- toHaveURL() - verify the current url
- toHaveTitle() - verify page title
- toHaveCount() - Number of matching elements

Non-auto retrying : -
A non-retrying check evaluates the current state immediately. It does not wait for the condition to become true.

const isVisible = await page.locator('#success-message').isVisible();

expect(isVisible).toBe(true);

If the message is not visible at that moment, isVisible() returns false, and expect(false).toBe(true) fails immediately.

isVisible() - true or false
isEnabled()	- true or false
isDisabled() -	true or false
isChecked()	- true or false
inputValue() -	Current input value
textContent() -	Current text content or null

Auto-retrying	                                     Non-retrying
- Waits by repeatedly checking the condition	   - Checks the current state once
- Has an assertion timeout	                       - Does not retry for a condition to become true
- Preferred for UI assertions	                   - Useful when an immediate state check is intended
- await expect(locator).toBeVisible()	           - await locator.isVisible()










*/