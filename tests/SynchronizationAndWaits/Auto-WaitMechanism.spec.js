/*

Auto-Waiting
Playwright performs a range of actionability checks on the elements before making actions to
ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and
only then performs the requested action. If the required checks do not pass within the given timeout, 
action fails with the TimeoutError.

This reduces flaky tests caused by elements loading slowly.

for example
if I want ot click on any button using locator.click(), then it will first ensure that
- element is visible on the page
- element is stable ,ie Its position and size are not changing.
- element receives event , ie It can receive pointer events and isn't blocked by another element.
- element is enabled
- element is editable

Not every action uses every check
example - .fill() action checks visibility, enabled state, and editability.

Action auto-waiting: waits for conditions needed to perform an action.
Assertion auto-retrying: repeatedly checks whether an expected condition is true

Why Auto-Waiting?
- Reduces Flaky tests caused by timing issue
- Makes your test more stable and reliable
- improves readability and maintainability

# Force Actions
By default auto-waiitng mechanism works for assertions and actions.
But if you want to avaoid actionability checks then we can use force actions.

example -
await page.locator('#small-searchterms').fill('Book',{force : true});;
await page.locator('.ui-corner-all').click({force : true});

this force actions only works for actions not for assertions.

*/