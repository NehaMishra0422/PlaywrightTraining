/*

Some common methods are : actions of playwright
1 .fill() -> to enter some text in input field
example - await page.locator('#Username').fill('Neha');

2 .click() -> click on element
example - await page.getByRole('button').click();

3 .clear() -> clear an input field
example - 
await page.locator('#Username').fill('Neha');
await page.locator('#Username').clear();

4 .check() -> select a checkbox or radio button
example - await page.getByLabel('No').check(); 
selects a radio button with label 'No'

5 .uncheck() -> deselect a checkbox or radio button


//mehods for getting information
1 .textContent() -> Text content, including hidden text

2 .innerText() -> rendered text

3 .inputValue() -> current input value

4 .getAttribute() -> attribute value

example - await page.locator.getAttribute('href')

5 .count() -> number of matching element

6 .isVisible() -> true or false

7 .isEnabled() -> true or false

8 .isDisabled()  -> true or false

9 .isEditable() -> Whether editable


//methods for hndling multiple elements 
1 first() — selects the first matching element.

2 last() — selects the last matching element.

3 nth(index) — selects the element at a zero-based index. nth(2) means the third element.



*/