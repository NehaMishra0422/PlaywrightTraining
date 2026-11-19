import{test,expect} from '@playwright/test';

const baseUrl = {
   url : 'https://www.playwrightautomation.com/practice.html#section-dropdowns'
}

test('Static dropdown', async({page})=>{
    await page.goto(baseUrl.url);
    await page.locator('#country').selectOption('canada');
    await expect(page.locator('#country')).toHaveValue('canada');
    await page.locator('#sorted-list').selectOption('dog');
    await expect(page.locator('#sorted-list')).toHaveValue('dog');

})

test('Multi-Select Value',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#colors').selectOption(['red', 'green', 'blue']);
    await expect(page.locator('#colors')).toHaveValue('red','green','blue');
})

test('Bootstrap drop down',async({page})=>{
    await page.goto(baseUrl.url);
    await page.locator('#bd-job-title').click();
    await page.locator('#bd-job-title-menu').nth(0).click();
    await expect(page.locator('#bd-job-title-menu')).toContainText('Automation Tester');
})

test('Auto Suggestive drop down', async({page})=>{
    await page.goto(baseUrl.url);
    await page.getByPlaceholder('Search for Products').click();
    const selectProduct = page.getByPlaceholder('Search for Products');
    await selectProduct.fill('In');
    await page.locator('.as-item').nth(4).click();
    await expect(selectProduct).toHaveValue('Ring Light');
})

test('Searchable custom dropdown',async({page})=>{
    await page.goto(baseUrl.url);
    await page.locator('#sd-input').click();
    await page.locator('#sd-input').fill('Ty');
    await page.locator('.sd-option').nth(1).click();
})

test('Dynamic Dependent drop down', async({page})=>{
    await page.goto(baseUrl.url);
    await expect(page.locator('#dep-state')).toBeDisabled();
    await expect(page.locator('#dep-city')).toBeDisabled();
    await page.locator('#dep-country').click();
    await page.locator('#dep-country').selectOption('india');
    await expect(page.locator('#dep-country')).toHaveValue('india');
    await expect(page.locator('#dep-state')).toBeEnabled();
    await page.locator('#dep-state').selectOption('Maharashtra');
    await expect(page.locator('#dep-state')).toHaveValue('maharashtra');
    await page.locator('#dep-city').isEnabled();
    await page.locator('#dep-city').selectOption('Mumbai');
    await expect(page.locator('#dep-city')).toHaveValue('mumbai');

})