import {test, expect} from '@playwright/test';

test('Built-in fixtures- browser', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.demoblaze.com/');
});

//in above we are not using any seesions, cookies, cache so we can use only page fixture which will automatically handle browser and context

test('Built-in fixtures-page', async({page})=>{
    await page.goto('https://www.demoblaze.com/');
});

test('Built-in fixture- broser with prerequisite', async({browser})=>{
    const context = await browser.newContext({baseURL : 'https://www.google.com/'});
    const page = await context.newPage();
    await page.goto('/search?q=diwali');
})

//we can specify more arguments like colorscheme, clientcert,etc

test('Playwright theme', async({browser})=>{
    const context = await browser.newContext({baseURL :'https://playwright.dev', colorScheme : 'dark'});
    const page = await context.newPage();
    await page.goto('/docs/test-fixtures');
})