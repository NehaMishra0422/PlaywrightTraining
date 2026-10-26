import {test,expect} from '@playwright/test';

test('Generic Assertions', async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    await expect(page).toHaveURL('https://demoqa.com/webtables');
    await expect(page.locator("a[href*='demoqa']")).toBeVisible();

    //to check whether it contains 'Alden' or not .toContain()
    const name = 'Alden';
    expect(name).toContain('Alden');

    //toBeTruthy()
    expect(name).toBeTruthy();

    //to check number is greater than or not
    const age = 45;
    expect(age).toBeGreaterThan(40);

    //.toBeLessThan()
    const age1 = 29;
    expect(age1).toBeLessThan(35);

    //.toEqual() , .toBe() , .toContain()
    const firstName = ['Cierra','Alden','Kierra'];
    expect(firstName).toEqual(['Cierra','Alden', 'Kierra']);
    expect(firstName[2]).toBe('Kierra');
    expect(firstName).toContain('Cierra');


})

