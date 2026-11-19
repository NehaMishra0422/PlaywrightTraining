/*

1. What is auto-waiting in Playwright? How does it work before performing an action like click()?
Auto-waiting is a Playwright feature that automatically waits until an element is ready before performing an action.

For example, before clicking a button, Playwright checks whether the button is:
- Visible.
- Stable.
- Enabled.
- Receiving pointer events.
If these conditions are not satisfied, Playwright keeps retrying until they are satisfied or the timeout expires.

Ex- await page.locator('#login').click();

2. What actionability checks does Playwright perform before clicking an element?
Before performing a click, Playwright checks four main conditions:
Check	             Meaning
Visible	             Element should be visible on the page.
Stable	             Element should not be moving or changing position.
Receives Events	     Element should receive pointer events and not be blocked by another element.
Enabled	Element      should not be disabled.

3. Does auto-waiting apply to every Playwright method? Give examples of methods where it does not.
No. Auto-waiting does not apply to every Playwright method in the same way.

Some actions perform actionability checks, while other methods return immediately or wait for different conditions.

Methods that perform actionability checks:
await page.locator('#login').click();
await page.locator('#username').fill('Neha');
await page.locator('#checkbox').check();

Methods that do not automatically wait for an element to become actionable:
await page.locator('#username').count();
await page.locator('#username').isVisible();
await page.locator('#username').isEnabled();

4. What are the different element states supported by Playwright's locator.waitFor()?
Playwright supports four states:
State	           Meaning
attached	       Element is present in the DOM.
detached	       Element is removed from the DOM.
visible	           Element is present and visible.
hidden	           Element is hidden or removed from the DOM.

ex- await page.locator('#loading').waitFor({state: 'hidden'});

5. What is the difference between visible, attached, hidden, and detached states?
State	          Present in DOM?	       Visible on page?
Attached	          Yes	               Not necessarily
Visible	              Yes	                    Yes
Hidden	             Maybe	                    No
Detached	           No	                    No

Easy explanation:
- Attached: Element exists in the HTML DOM.
- Visible: Element exists and can be seen on the page.
- Hidden: Element exists but is not visible, or it has been removed.
- Detached: Element has been removed from the DOM.


6. Can an element be attached to the DOM but not visible? Give an example.
Yes. An element can exist in the DOM but remain invisible.
Ex HTML
<div id="message" style="display: none;">
    Welcome Neha
</div>

Here:
- The element is attached to the DOM.
- It is not visible because display: none is applied.

7. What is the difference between locator.waitFor() and expect(locator).toBeVisible()?
Both can wait for an element to become visible, but they serve slightly different purposes.
locator.waitFor()	                                           expect(locator).toBeVisible()
Waits for a specified locator state.	                       Waits for an assertion condition.
Supports attached, detached, visible and hidden.	           Checks whether the element is visible.
Does not directly validate expected text or other properties.  Can validate visibility, text, attributes, values, etc.
Useful for synchronization.	                                   Useful for synchronization and verification.

8. What is the default state used by locator.waitFor()?
The default state is visible.

9. How would you wait until a loading spinner disappears?
We can use locator.waitFor() with the hidden state or an assertion with toBeHidden().

Using locator.waitFor():
await page.locator('.loading-spinner').waitFor({state: 'hidden'});

using assertion:
await expect(page.locator('.loading-spinner')).toBeHidden();

10. How would you wait for an element to become enabled before interacting with it?
We can use expect(locator).toBeEnabled().

11. What is the difference between an element being visible, enabled, stable, and receiving events?
These are four different actionability conditions.
Condition	           Meaning	                                         Example of failure
Visible	         Element can be seen on the page.	                    Button has display: none.
Enabled	         Element is not disabled.	                            Button has disabled attribute.
Stable	         Element is not moving or changing its bounding box.	Button is still animating.
Receives Events	 Element can receive pointer events at its position.	Another element or overlay covers it.

Imagine a Submit button:
- Visible: You can see the button.
- Enabled: You can click it because it is not disabled.
- Stable: It is not moving due to animation.
- Receives Events: No overlay is blocking it.

















































*/