import {test,expect} from '@playwright/test';
import{Calender} from '../Practice/calenderpractice.js';

test('Date time picker', async({page})=>{
    await page.goto('https://demoqa.com/date-picker');
    const dateTime = new Calender(page);
    await dateTime.datePicker('22','April',2025,'20:15');
    
})