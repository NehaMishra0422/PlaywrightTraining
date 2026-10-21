import {test,expect} from '@playwright/test';

test('Playwright Methods Practice', async({page})=>{
    await page.goto('https://automationexercise.com/'); 

    //toBeVisible()
    await expect(page.getByAltText('Website for automation practice')).toBeVisible();
    await page.getByRole('link', {name : ' Signup / Login'}).click();

    //textContent() -> below line returns content with the hidden text like spaces
    console.log(await page.locator('.login-form').textContent());  


    //innerText() -> below line return only content
    console.log(await page.locator('.login-form').innerText());
    await page.getByPlaceholder('Name').fill('Neha Mishra');
    await page.locator('input[data-qa="signup-email"]').fill('nemishra2295@gmail.com');
    await page.getByRole('button', {name : 'Signup'}).click();

    //toHaveText() -> true or false
    await expect(page.locator('.title.text-center').first()).toHaveText('Enter Account Information');
    await page.locator('#id_gender2').check();

    //getByLabel() , .first() , isVisible()
    console.log(await page.getByLabel('Name').first().isVisible());

    //.clear()
    await page.locator('#name').clear();
    await page.locator('#name').fill('Neha Mishra');

    //.isDisabled()
    console.log(await page.locator('#email').isDisabled());

    //isEditable
    console.log(await page.locator('#password').isEditable());
    await page.locator('#password').fill('12345');

    
})