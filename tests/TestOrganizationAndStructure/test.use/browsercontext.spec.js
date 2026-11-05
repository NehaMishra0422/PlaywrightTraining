import {test,expect} from '@playwright/test';

test.use({
    viewport : {width : 1200, height : 700},
    colorScheme : 'dark',
    locale : 'en-US'
});
test('Verify Login page', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByAltText('company-branding')).toBeVisible();
    await expect(page.locator('.orangehrm-login-title')).toHaveText('Login');

})