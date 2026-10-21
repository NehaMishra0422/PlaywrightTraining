import {test,expect} from '@playwright/test';

const baseUrl = {
      url : 'https://automationexercise.com'
}
test('Basic Interaction Elements' , async({page})=>{
    await page.goto(baseUrl.url);
    await page.locator("a[href='/products']").click();
    console.log(await page.getByAltText('Website for practice').isVisible());
    await page.getByPlaceholder('Search Product').inputValue('Top');
    await page.locator('#submit_search').first().click();
    
})

test("Basic Interaction Elements Test 2", async({page})=>{
      await page.goto(baseUrl.url);
      await page.locator("a[href='/login']").click();
      await page.locator("input[type='email']").first().fill('nemishra2295@gmal.com');
      await page.getByPlaceholder('Password').fill('12345');
      console.log(await page.getByRole('button', {name : 'Login'} ).isEnabled());
      await page.getByRole('button', {name : 'Login'} ).click();

})

