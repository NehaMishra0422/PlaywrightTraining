/*

Test stability means your tests pass consistently when the application is working correctly, 
without failing randomly because of timing issues, slow loading, or unreliable locators.

Ths can be achieved by following-

1. Use auto-waiting instead of fixed wait -
BAD PRACTICE :
await page.waitForTimeout(5000);
await page.getByRole('button', { name: 'Login' }).click();

GOOD PRACTICE :
await page.getByRole('button', { name: 'Login' }).click();
await expect(page.getByText('Welcome')).toBeVisible();

here playwright automatically wait for actionability before clicking the login button and etries web-first assertions until they pass or time out.


2. Use Reliable Locators -
For example use
getByRole() , getByPlaceholder() , getByLabel() etc

3. Use web-first assertions -

4. Wait for the correct condition -
Don't add waits without a specific reason.

5. Avoid unnecessary explicit waits -
Actions such as click(), fill() and check() already wait for the relevant actionability conditions.

You generally don't need to add waitFor({ state: 'attached' }) before these actions unless you're specifically testing DOM attachment.

6. Handle dropdowns and checkboxes correctly -

7. Avoid hard-coded test data -
Hard-coded data can cause failures when records already exist or the environment changes.

8. Isolate each test -
Each test should be independent and should not rely on another test having run first.

9. Use assertions instead of arbitrary delays after actions -
delayes like waitForTimoeout(2000)
instead of this use auto-wait mechanism like .toBeVisible()

10. Configure timeouts sensibly

11. Avoid using force: true to bypass failures -
ex - await page.getByRole('button', { name: 'Submit' }).click({ force: true });

12. Use Playwright's debugging tools

*/