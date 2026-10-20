import {test,expect} from '@playwright/test';
test('page handling', async({browser})=>{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto('https://rahulshettyacademy.com/practice');
   const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', {name : 'Sign Up'}).nth(0).click()
   ])
   await newPage.waitForLoadState();

console.log('New page URL:', newPage.url());
console.log('New page title:', await newPage.title());

await expect(newPage).toHaveURL(/sign_up/);
})