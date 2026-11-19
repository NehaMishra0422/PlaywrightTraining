/*

1. What is an iframe, and why do applications use it?
An iframe (Inline Frame) is an HTML element that allows one webpage to be displayed inside another webpage.

Applications use iframes to embed external or separate content within a webpage.

Common examples:
- Embedded YouTube videos.
- Google Maps.
- Payment gateways.
- Third-party login forms.
- Chat widgets.

2. How do you identify whether an element belongs to the main page or an iframe?
We can inspect the HTML structure using browser DevTools.
Look for the iframe HTML tag.
I inspect the DOM using browser DevTools and check whether the element is inside an iframe. If it is inside an iframe, I use frameLocator() to interact with it.

3. What is the difference between page.locator() and frameLocator()?
page.locator()	                                frameLocator()
Locates elements in the main page document.	    Locates elements inside an iframe.
Used for normal webpage elements.	            Used for iframe elements.
Does not automatically enter an iframe.	        Automatically targets the specified iframe.

Easy way to remember:
- page.locator() = Main page.
- frameLocator() = Iframe.

4.How do you interact with an input field inside an iframe?
We use frameLocator() to locate the iframe and then locate the required input field inside it.
Ex-
test('Handle iframe', async ({ page }) => {

    await page.goto('https://example.com');

    // Locate iframe and enter username
    const frame = page.frameLocator('#loginFrame');

    await frame.locator('#username').fill('Neha');

    await frame.locator('#password').fill('12345');

    await frame.locator('#loginButton').click();

});
Explanation:
1. page.frameLocator('#loginFrame') identifies the iframe.
2. frame.locator('#username') identifies the username field inside it.
3. fill() enters the value.
4. click() clicks the login button.

5.What is the difference between frameLocator() and page.frame()?
This is an important interview question.
frameLocator()	                                      page.frame()
Returns a FrameLocator.	                              Returns a Frame object.
Used to locate and interact with iframe elements.	  Used to access a specific frame object.
Supports locator-based interactions.	              Provides frame-level APIs such as locator(), evaluate(), and url().
Supports chaining.	                                  Can identify frames using name or URL.

using frameLocator :
const iframe = await page.frameLocator('#loginframe');
await iframe.locator('#username').fill('Neha');

using page.frame():
const frame = page.frame({name: 'loginFrame'});
await frame.locator('#username').fill('Neha');

6. Can you interact with an element inside an iframe using a normal page locator? Why or why not?
No, not directly.

A normal page.locator() searches within the main page's document. An iframe has its own separate document, so we need to use frameLocator() or a Frame object.

7. What challenges might occur when an iframe loads dynamically?
Some common challenges are:
1. Delayed loading: The iframe may take time to appear.
2. Dynamic iframe ID: Its ID or attributes may change.
3. Network delays: The iframe content may load slowly.
4. Nested frames: The required element may be inside multiple iframe levels.
5. Frame navigation: The iframe may navigate to another URL.
6. Cross-origin iframe: The iframe may load content from another domain.
How to handle these challenges?
- Use reliable iframe selectors.
- Use frameLocator() for iframe interactions.
- Use auto-waiting and condition-based assertions.
- Avoid fixed waits such as waitForTimeout() unless absolutely necessary.

8. How would you handle an iframe that is not available immediately after page navigation?
If an iframe loads dynamically, we should wait until it becomes available before interacting with its elements.

We can use waitFor() or an assertion such as toBeVisible().

ex - uaing locator.waitFor()
test('Handle dynamically loaded iframe', async ({ page }) => {

    await page.goto('https://example.com');

    // Wait for iframe to become visible
    await page.locator('#loginFrame').waitFor({
        state: 'visible'
    });

    // Interact with iframe
    const frame = page.frameLocator('#loginFrame');
    await frame.locator('#username').fill('Neha');

});

ex - using assertion
const frame = page.frameLocator('#loginFrame');
await expect(frame.locator('#username')).toBeVisible();
await frame.locator('#username').fill('Neha');

































*/