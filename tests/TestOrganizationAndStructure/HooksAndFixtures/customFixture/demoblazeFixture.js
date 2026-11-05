import {test as base, expect} from '@playwright/test';

export const test = base.extend({
    demoblazeLogin : async({page},use)=>{
        //setup
         console.log('Opening Demoblaze website');
         await page.goto('https://www.demoblaze.com/');
        // Provide page to test
        await use(page);
        // Teardown
        console.log('Test execution completed');

    }
});
export {expect};

/*

- test as base => We rename the original test to base.
- export const test = base.extend({
we extend the original Playwright test object and create a new test object containing our custom fixture.
- demoblazeLogin : async({page},use)=>{
    demoblazeLogin : custom fixture name
    page : built-in fixture
    use : passes the fixture resource to the test.
- await page.goto('https://www.demoblaze.com/');
opens the website before the test starts.
- await use(page);
makes the page available to the test as demoblazePage.
- console.log('Test execution completed')
executes after test finishes.


*/