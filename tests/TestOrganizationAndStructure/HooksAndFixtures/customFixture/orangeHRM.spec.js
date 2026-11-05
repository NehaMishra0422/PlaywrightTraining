import {test, expect} from '../customFixture/orangeHRMFixture.js';

test('Test 1- veriy page title', async({orangeHRM})=>{
    await expect(orangeHRM).toHaveTitle('OrangeHRM');
    await expect(orangeHRM.locator('input[name="username"]')).toBeVisible();
})

test('Test 2 - verify url and title after Login', async({login})=>{
    await expect(login).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(login.getByRole('heading',{name : 'Dashboard'})).toBeVisible();
})