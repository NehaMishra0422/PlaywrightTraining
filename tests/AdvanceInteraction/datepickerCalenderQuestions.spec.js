/*

1. What challenges do you commonly face while automating date pickers?
The main challenges are handling dynamic calendar elements, navigating between months and years, dealing with readonly fields, and validating the correct date format.
Some common challenges are:
1. Different date picker types: Some allow direct typing, while others require selecting dates from a calendar.
2. Month and year navigation: The required date may be in another month or year.
3. Dynamic elements: Calendar dates and navigation buttons may change dynamically.
4. Readonly input fields: Some date fields do not allow direct typing.
5. Date format: Applications may accept formats like DD/MM/YYYY, MM/DD/YYYY, or YYYY-MM-DD.
6. Disabled dates: Past dates, weekends, or holidays may not be selectable.
7. Synchronization: Calendar elements may take time to appear or update.

2. How would you select a date from a calendar when the date is in a different month?
We can navigate between months using the Next or Previous buttons until we reach the required month, then select the date.

Example:
Suppose we need to select 22 April 2027, but the calendar currently displays March 2027.
test('Select date from different month', async ({ page }) => {

    await page.goto('https://example.com');

    // Open date picker
    await page.locator('#datePicker').click();

    // Navigate to next month
    await page.locator('.next-month').click();

    // Select 22 April
    await page.getByText('22', { exact: true }).click();

});
Explanation:
- Open the calendar.
- Click the Next button.
- Select the required date.

3. How would you automate a date picker where the month and year need to be changed separately?
Some date pickers provide separate dropdowns for month and year.

We can use Playwright's selectOption() method if they are HTML select elements.
ex-
test('Select month and year', async ({ page }) => {

    await page.goto('https://example.com');
    await page.locator('#datePicker').click();

    // Select month
    await page.locator('.month-dropdown').selectOption({ label: 'April' });

    // Select year
    await page.locator('.year-dropdown').selectOption('2027');

    // Select date
    await page.getByText('22', { exact: true }).click();

});

4. What would you do if a date picker does not allow direct typing into its input field?
Sometimes the date input is readonly, meaning we cannot enter a date directly using fill().

In that situation, we interact with the calendar UI.

ex-
test('Select date from readonly date picker', async ({ page }) => {

    await page.goto('https://example.com');

    // Open calendar
    await page.locator('#datePicker').click();

    // Navigate to required month
    await page.locator('.next-month').click();

    // Select required date
    await page.getByText('22', { exact: true }).click();

});
 If the input is readonly, I would not try to use fill(). Instead, I would interact with the calendar UI, navigate to the required month and year, and select the date.

5. How would you verify that the selected date is correctly displayed?
We can use Playwright's toHaveValue() assertion to verify the selected date in an input field.

Ex
test('Verify selected date', async ({ page }) => {

    await page.goto('https://example.com');

    await page.locator('#datePicker').click();

    await page.locator('.next-month').click();

    await page.getByText('22', { exact: true }).click();

    // Verify selected date
    await expect(page.locator('#datePicker')).toHaveValue('22/04/2027');

});




































*/