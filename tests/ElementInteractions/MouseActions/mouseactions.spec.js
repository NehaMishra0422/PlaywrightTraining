/*
In Playwright, mouse actions are used to simulate user interactions with web elements.

1. Hover
Meaning: Moving the mouse pointer over an element without clicking it.
Use cases:
- Displaying dropdown menus
- Showing tooltips
- Revealing hidden elements
- Triggering hover effects

locator.hover()

2. Left Click
Meaning: Performing a normal mouse click on an element. This is the default button for click().

locator.click()

3. Right click
Meaning: Clicking an element with the right mouse button.

locator.click({button: 'right'})

4. Double Click 
Meaning: Clicking an element twice in quick succession.

locator.dblclick()

5. Focus 
Meaning: Giving keyboard focus to an element so it can receive keyboard input. 
For example, focusing on a textbox allows you to type into it.

locator.focus()

*/