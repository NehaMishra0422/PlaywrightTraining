/*
locator.waitFor() waits until an element reaches a specified state.

syntax :
await locator.waitFor({ state: 'visible' });

Here,Playwright waits for the element to become visible before continuing. 
we don't need to add a fixed waitForTimeout().

default state of locator.waitFor() is 'visible'

There are 4 states supported by locator.waitFor()

State	         Meaning	                                    Typical use
visible	     Element becomes visible         	       Wait for a dropdown to open
hidden	     Element becomes hidden or is removed	   Wait for a loading spinner to disappear
attached	 Element is added to the DOM	           Wait for a dynamically created element
detached	 Element is removed from the DOM	       Wait for a popup to be removed

some not supported states are :
enabled, disabled, or checked


locator.waitFor() VS  expect()

locator.waitFor()	                                        expect()
- Waits for one of four DOM/visibility states	       - Verifies many conditions
- Supports visible, hidden, attached, detached	       - Supports visible, enabled, checked, text, and more
- Does not verify text or values	                   - Can verify text, values, and states
- Example: locator.waitFor({ state: 'visible' })	   - Example: expect(locator).toBeVisible()

For most test assertions, prefer Playwright's web-first assertions. 
Use locator.waitFor() when you specifically need to wait for one of its four supported states.

*/