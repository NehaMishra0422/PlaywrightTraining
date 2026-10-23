/*
Keyboard Actions allow you to simulate keyboard interactions such as pressing Enter, 
typing text, using shortcuts like Control + A, and navigating with arrow keys.

some important keyboard methods

1. keyboard.press() -> press a Key
Use this to press keys such as Enter, Tab, Escape, or ArrowDown.

await page.keyboard.press('Enter');
await page.keyboard.press('Tab');
await page.keyboard.press('Escape');
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Backspace');

2. keyboard.type() -> type text
Types text into the currently focused element.

3. locator.press() -> press a key on a specific element

4. keyboard shorcuts -> combine keys using +

ex
await page.locator('#user-name').press('Control+A');  //selects all text
await page.locator('#user-name').press('Control+C');  //copy
await page.locator('#user-name').press('Control+V');  //paste
await page.locator('#user-name').press('Control+S');  //save

5. keyboard.insertText() -> insert text directly
insert text directly into the currently focused element without generating individual keyboard events for each character


*/