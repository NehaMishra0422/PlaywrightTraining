/*

Built-in assertions are ready-made methods provided by Playwright to verify that an application's actual behavior matches the expected behavior. 
we don't need to create these assertions ourself.

Types of Built-In Assertions

1. Locator Assertions : 
Used to verify elements on a webpage, such as buttons, text boxes, links, and checkboxes.

toBeVisible() -	  Checks whether an element is visible
toBeHidden() -	  Checks whether an element is hidden or absent
toBeEnabled() -	  Checks whether an element is enabled
toBeDisabled() -  Checks whether an element is disabled
toBeChecked() -   Checks whether a checkbox or radio button is checked
toHaveText() -    Verifies the expected text
toContainText()	- Checks whether the text contains a value
toHaveValue() -   Verifies the value of an input
toHaveCount() -	Verifies the number of matching elements
toBeEditable()-	Checks whether an element is editable

2. Page assertions :
Used to verify information about the current webpage.

toHaveTitle() - Checks the page title
toHaveURL() -	Checks the current URL

3. Generic assertions :
Used to verify JavaScript values, such as strings, numbers, arrays, and objects.

toBe()	-       Compares primitive values
toEqual() -	    Compares values, including arrays and objects
toContain() -	Checks whether a string or array contains a value
toBeTruthy() -	Checks whether a value is truthy
toBeFalsy() -	Checks whether a value is falsy
toBeNull() -    Checks whether a value is null
toBeGreaterThan() - Checks whether a number is greater
toBeLessThan() -	Checks whether a number is smaller

Diff b/w toEqual() and toContain()
toEqual() compares the entire value or structure.
toContain() checks whether an array or string contains a particular value.

*/