import {test,expect} from '@playwright/test';

test('Explicit waits', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    //waitForLoadState - wait for a page content to get loaded in DOM
    await page.waitForLoadState('domcontentloaded', {timeout : 3000});
    
    const uName = page.locator('#username');

    //waitFor - attached
    await uName.waitFor({state : 'attached'});
    await uName.fill('rahulshettyacademy');
    const pass =  page.locator('#password');
    await pass.waitFor({state : 'attached'});
    await pass.fill('Learning@830$3mK2');

    //toBeChecked
    await expect(page.locator("input[value='admin']")).toBeChecked();
    const dropdown = page.getByRole('combobox');
    await dropdown.waitFor({ state: 'visible' });
    await dropdown.selectOption('stud');
   // await page.getByText('Student',{exact : true}).waitFor({state : 'visible'});
    await page.getByText("Teacher").waitFor({state : 'hidden'});

    //not checked
    await expect(page.locator('#terms')).not.toBeChecked();
    await page.locator('#terms').check();

    //SignIn - waitForResponse()
    const responsePromise = page.waitForResponse(response =>
        response.url().includes('/angularpractice/shop') &&
        response.status() === 200,
         {timeout : 5000}
    );
    await page.locator('#signInBtn').click();
    const response = await responsePromise;
    expect(response.status()).toBe(200);

})

test('Explicit wait 1',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    //waitForEvent()- it will execute till the promise is fulfilled
    // Wait for the new tab and click the link
    const [newPage]= await Promise.all([
    context.waitForEvent('page', {timeout : 2000}),
    await page.locator("a[href*='/documents-request']").click()
    ]);
 
    // Wait until the new tab reaches the expected URL
    //waitForURL()
    await newPage.waitForURL('https://rahulshettyacademy.com/documents-request', { timeout : 2000});
})