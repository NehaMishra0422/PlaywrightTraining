/*

Test tagging
Tags allow you to categorize test cases, such as Smoke, Regression, Sanity and E2E.

For example, suppose you have 100 test cases:
- 20 Smoke tests
- 50 Regression tests
- 30 Sanity tests

Instead of running all tests, you can execute only the Smoke tests using tags.

Example -

test('Login test', {tag: '@smoke'}, async ({page}) => {
      await page.goto('https://example.com');
});

test('Payment test', {tag: '@regression'}, async ({page}) => {
      await page.goto('https://example.com');
});

we can also assign multiple tags

Example -

test('Login test', {tag: ['@smoke', '@regression']}, async ({page}) => {
      await page.goto('https://example.com');
});


Execute tests using tags
Run only smoke test :
npx playwright test --grep @smoke

Run only regression test :
npx playwright test --grep @regression

Exclude Smoke Test :
npx playwright test --grep-invert @smoke

Run tests having either Smoke or Regression tag :
npx playwright test --grep "@smoke|@regression"
matching tag will run


*/