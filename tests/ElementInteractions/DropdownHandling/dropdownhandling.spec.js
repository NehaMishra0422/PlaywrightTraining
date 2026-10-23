/*

Dropdown handling is an important part of UI automation. In Playwright, the approach depends on the type of dropdown used by the website.

There are three main types you should practise:
1. Multi-select dropdown — select more than one option.
2. Auto-complete dropdown — type text and select a matching suggestion.
3. Bootstrap/custom dropdown — click a dropdown and select an option from a list.

1. Standard dropdown (single-select)
A standard dropdown lets you select only one option at a time. For example, selecting a country or a programming language.
selectOption() is used to select value from dropdown
selectOption() works with a native HTML <select> element.

2. Multi-select dropdown
A multi-select dropdown allows you to select multiple options at the same time,
we can give multipe values inside selectOptions in form of array

ex
const dropdown = page.locator('#skills');
await dropdown.selectOption(['js', 'java', 'python']);

This method is for a native <select multiple> element, not every dropdown that visually allows multiple selections.

3. Auto-complete dropdown
An auto-complete dropdown displays suggestions when you type into a textbox.

For example, when you type Ind, suggestions might include India and Indonesia.

this is done by using .click()

4. Bootstrap / custom dropdown
A Bootstrap dropdown is a menu that opens when you click a button. Its options may be HTML buttons, links, or other elements.


How to identify which method to use
When inspecting a dropdown in DevTools:
- If you see <select> and <option>, use selectOption().
- If you see an <input> with suggestions, use fill() and select a suggestion.
- If you see a <button>, <div>, or <a> that opens a menu, use clicks and appropriate locators.
*/