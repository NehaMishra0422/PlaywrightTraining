import {test,expect} from '@playwright/test'

//for grouping - deesktop
test.describe('Desktop test',()=>{
    test.use({
        viewport : {width : 1200,height : 700},
        colorScheme : 'dark',
        isMobile : false
    })

test('verify website on desktop', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByAltText('company-branding')).toBeVisible();
    await expect(page.locator('.orangehrm-login-title')).toHaveText('Login');
});    

});

//for grouping - Mobile
test.describe('Mobile test',async()=>{
    test.use({
        viewport: { width: 375, height: 667 },
        isMobile: true,
        hasTouch: true
    })
test('Verify website on Mobile', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByAltText('company-branding')).toBeVisible();
    await expect(page.locator('.orangehrm-login-title')).toHaveText('Login');
});    
});
