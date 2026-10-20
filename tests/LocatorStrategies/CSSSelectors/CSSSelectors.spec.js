import {test,expect,chromium} from '@playwright/test';

test('Locators Test', async()=> {

    const browser = await chromium.launch({
        headless : false
    });
    const page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register?');

    //create web element using locator

    //1. class 
    console.log(await page.locator('.img-responsive').isEnabled());  //true

    //2. ID - unique
    await page.locator('#input-firstname').fill('Playwright');
    await page.locator('#input-lastname').fill('Locators');

    //3. Attribute 
    await page.locator('input[type="email"]').fill('nemishra2295@gmail.com');
    await page.locator('input[name="telephone"]').fill('7838455909');

   //ID
    await page.locator('#input-password').fill('12345@');
    await page.locator('#input-confirm').fill('12345@');

    //5. getByLabel()
    await page.getByLabel('No').check();

    //6. getByRole()
    await page.getByRole('checkbox').click();
    await page.getByRole('button', {name : 'Continue'}).click();



})