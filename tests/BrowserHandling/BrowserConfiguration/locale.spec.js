import {test,expect,chromium} from '@playwright/test';

test('Check Loacle and Timezone', async({})=>{
    const browser = await chromium.launch({headliess : false});
    const context = await browser.newContext({       
        locale: 'en-US',
        timezoneId: 'America/New_York'
    });
    const page = await context.newPage();
    await page.goto('https://www.timeanddate.com/worldclock/');
    const locale = await page.evaluate(()=> navigator.language);
    const timezone = await page.evaluate(() =>
        Intl.DateTimeFormat().resolvedOptions().timeZone
    );

    expect(locale).toBe('en-US');
    expect(timezone).toBe('America/New_York');

    console.log('Locale:', locale);
    console.log('Timezone:', timezone);

    await browser.close();
})

/*
1. page.evaluate()

Executes JavaScript code inside the browser page, not directly in your Node.js test environment.

2. Intl.DateTimeFormat()

Creates a JavaScript date formatter using the browser's current locale and time zone settings.

3. .resolvedOptions()

Returns an object containing the actual formatting settings being used.

4. .timeZone

Extracts the time zone from that object, such as Asia/Kolkata or America/New_York.

5. await

Waits for Playwright to return the result from the browser page.

6. const timezone

Stores the returned time zone string in your test variable.
*/