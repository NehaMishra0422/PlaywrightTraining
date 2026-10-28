import {test,expect} from '@playwright/test';

test('Different states in Playwright practical', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
    await expect(page).toHaveTitle('Demo Web Shop');

    //visible - .toBeVisible()
    await expect(page.getByRole('link',{name :'Log in'})).toBeVisible();


    //dropdown of computer is hidden but attached
    //is Hidden - .toBeHidden()/.toBeAttached()
    await expect(page.locator('.sublist.firstLevel').first()).toBeHidden();
    await expect(page.locator('.sublist.firstLevel').first()).toBeAttached();

    //stability
    await page.getByRole('link',{name : 'Log in'}).click();

    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');

    //Enabled - .toBeEnabled()
    await expect(page.getByRole('button',{name : 'Register'})).toBeEnabled();
    await page.getByRole('button',{name : 'Register'}).click();
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/register');

    //not checked - not.toBeChecked() - radio button
    await expect(page.locator('#gender-male')).not.toBeChecked();
     
    await page.locator('#gender-female').check();

    //editable - toBeEditable()
    await expect(page.locator('#FirstName')).toBeEditable();
    await page.locator('#FirstName').fill('Neha');
})