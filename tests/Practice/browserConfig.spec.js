import {test,expect} from '@playwright/test';

test('Browser configuration-grant permission',async({page,context})=>{
    await context.grantPermissions(['geolocation']);
    await context.setGeolocation({
        latitude : 28.677206,
        longitude : 77.485634
    });
    await page.goto('https://the-internet.herokuapp.com/geolocation?utm_source=chatgpt.com');
    await page.getByRole('button', {name : 'Where am I?'}).click();
    await expect(page.locator('#lat-value')).toHaveText('28.677206');
    await expect(page.locator('#long-value')).toHaveText('77.485634');

})

test('Browser configuration-Geolocation', async({page,context})=>{
    await context.grantPermissions(['geolocation']);
    await context.setGeolocation({
        latitude : 28.67735,
        longitude : 77.485634
    });
    await page.goto('https://the-internet.herokuapp.com/geolocation');
    await page.getByRole('button', {name : 'Where am I?'}).click();
    await expect(page.locator('#lat-value')).toHaveText('28.67735');
    await expect(page.locator('#long-value')).toHaveText('77.485634');
})