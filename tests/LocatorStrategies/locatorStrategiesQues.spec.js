/*

1. What is a locator in Playwright, and how is it different from an element handle?
A locator is a way to identify an element on a webpage.

An element handle represents a particular DOM element instance.
Locator	                                                  Element Handle
Finds elements using a selector.	                      References a specific DOM element.
Re-resolves the element when used.	                      Can become outdated if the DOM changes.
Supports auto-waiting and retryability for actions.	      Does not provide the same locator auto-waiting behavior.
Preferred in Playwright.	                              Used for specific lower-level scenarios.

2. What is the difference between CSS selectors and XPath? When would you choose one over the other?
CSS Selector	                                                 XPath
Uses CSS syntax.	                                            Uses XML path expressions.
Easy to read and write.	                                        Supports more complex DOM traversal.
Can locate elements using IDs, classes and attributes.	        Can navigate to parent, child and sibling elements.
Usually preferred for simple DOM selection.	                    Useful when relationships in the DOM are important.

3. How would you locate an element by ID, class, attribute, tag name, and a combination of attributes using CSS?
Type	                    CSS Selector	                     Example
ID	                           #id            	                #username
Class	                     .class	                          .login-button
Attribute	             [attribute=value]	                  [name="email"]
Tag	                         tagname	                          input
Multiple attributes	     tag[attr=value][attr=value]	   input[type="text"][name="email"]

Ex-
page.locator('#username');
page.locator('.login-button');
page.locator('[name="email"]');
page.locator('input');
page.locator('input[type="text"][name="email"]');

4. What is the difference between .class1.class2 and .class1 .class2 in CSS selectors?
This is an important CSS selector concept.

.class1.class2

Selects an element that has both classes on the same element.
Ex html - <button class="login primary">Login</button>
selector - page.locator('.login.primary');

.class1 .class2

Selects an element with class2 inside an element with class1.

HTML - <div class="login">
    <button class="primary">Login</button>
</div>

selector -
page.locator('.login .primary');

Easy way to remember:
- No space = Same element.
- Space = Descendant element.

5. How do you locate an element using an attribute selector, such as input[name="email"]?
We use CSS attribute selectors.
Ex- await page.locator('input[name="email"]').fill('test@gmail.com');

6. What is the difference between absolute XPath and relative XPath? Why is relative XPath generally preferred?
Absolute XPath	                               Relative XPath
Starts from the root of the document.	       Can start from anywhere in the DOM.
Usually starts with /html.	                   Usually starts with //.
Depends heavily on the DOM structure.	       More flexible.
Breaks easily when layout changes.	           Generally more maintainable.

Absolute Xpath - /html/body/div[1]/form/input[1]
Relative Xpath - //input[@id='username']

7. How would you write an XPath to locate a button based on its visible text or an element's attribute?
Using visible text: page.locator('//button[text()="Submit"]');

using attribute : page.locator('//input[@id="username"]');

using partial text : page.locator('//input[@type="text" and @name="email"]');

8. What is the difference between getByRole(), getByText(), getByLabel(), getByPlaceholder(), and getByTestId()?
These are Playwright's user-facing locator methods.
Method	             Purpose	                                               Example
getByRole()	         Locates by accessibility role and accessible name.	       Button named Login
getByText()      	 Locates by visible text.	                               Text Welcome
getByLabel()	     Locates form control using its label.	                   Email Address
getByPlaceholder()	 Locates input using placeholder text.	                   Enter email
getByTestId()	     Locates using a test ID attribute.	                       data-testid="login"

9. What is an ARIA role? How would you locate a button named "Submit" using getByRole()?
ARIA stands for Accessible Rich Internet Applications.

ARIA roles describe the purpose of an element to assistive technologies, such as screen readers.

Examples:
- Button
- Link
- Checkbox
- Heading
- Textbox

10. What is the difference between locator() and getByRole()? Can both be used to locate the same element?
Yes. Both can locate the same element.
locator()	                                                getByRole()
Uses CSS, XPath or other supported selector syntax.	        Uses accessibility role and accessible name.
More flexible for DOM-specific selection.	                More user-focused and accessible.
Example: #login	                                            Example: button named Login








































*/