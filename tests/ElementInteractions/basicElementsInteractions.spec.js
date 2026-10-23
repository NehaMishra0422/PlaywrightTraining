/*
Common element interaction methods
1. click() -> Click a button, link, or element

2. dblclick() -> Double-click an element

3. fill() -> Enter text into an input field

4. clear() -> Clear an input field

5. press() -> Press a keyboard key

6. check() -> Select a checkbox or radio button

7. uncheck() -> Deselect a checkbox

if element is checked and .check() operation is done ,then it will remain checked
if element is unchecked and .check() operation is done, then it will check 
if element is checked and .uncheck() operation is done, then it will uncheck
if element is unchecked and .uncheck() operation is done, then it will remain uncheck

8. selectOption() -> Select an option from a dropdown

9. hover() -> Move the mouse over an element

10. focus() -> Focus on an element

11. setInputFiles() -> Upload a file

12. pressSequentially() -> is used to type text into an input field one character at a time, simulating a user typing on a keyboard.

If you enter Neha, Playwright types the characters sequentially:

N → e → h → a

This triggers keyboard-related events for each character, which can be useful for testing fields that respond to individual keystrokes.

we can also add delay

await page.locator('#user-name').pressSequentially('Neha', {
    delay: 200
});

this means Playwright waits approximately 200 milliseconds between each character.
*/