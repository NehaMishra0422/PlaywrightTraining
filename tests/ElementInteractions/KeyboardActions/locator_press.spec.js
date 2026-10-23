import {test,expect} from '@playwright/test';
import { waitForDebugger } from 'node:inspector';

test('Locator.press keyboard method', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard-user');
    await page.locator('#user-name').press('Control+A');
    await page.locator('#user-name').press('Backspace');

    await page.waitForTimeout(5000);
})