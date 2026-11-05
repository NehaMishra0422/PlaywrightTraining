import {test,expect} from '@playwright/test';

test.use({
    baseURL : 'https://opensource-demo.orangehrmlive.com/'
})

test('Verify Login page', async({page})=>{
    await page.goto('web/index.php/auth/login');
    await expect(page.getByAltText('company-branding')).toBeVisible();
    await expect(page.locator('.orangehrm-login-title')).toHaveText('Login');

})