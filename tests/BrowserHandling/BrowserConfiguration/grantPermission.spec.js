import {test,expect} from '@playwright/test';
test('Grant Permission for GeoLocation',async({page,context})=>{
//context is built-in Playwright fixture that represents the Browser Context — 
// an isolated browser session with its own cookies, storage, permissions, and other settings.
    
await context.grantPermissions(['geolocation']);
await context.setGeolocation({
        latitude: 28.6139,
        longitude: 77.2090
    });

await page.goto('https://the-internet.herokuapp.com/geolocation?utm_source=chatgpt.com');
await page.getByRole('button',{name : 'Where am I?'}).click();
await expect(page.locator('#lat-value')).toHaveText('28.6139');
await expect(page.locator('#long-value')).toHaveText('77.209');
})