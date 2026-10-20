import {test,expect,webkit} from '@playwright/test';
test('launch Webkit Browser',async({})=>{
    const browser = await webkit.launch({headless : false});
    const page = await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name : 'Login'}).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})