import {test,expect} from '@playwright/test';
import {CalenderPractice} from './calender.js';

test('Date Picker test', async({page})=>{
    await page.goto('https://demoqa.com/date-picker');
    const picker = new CalenderPractice(page);
    await picker.selectDateTime(7,'June',2025,'08:15');

    //verify date time
    const value = await page.locator('#dateAndTimePickerInput').inputValue();
    console.log('Selected Date Time :', value);
    await expect(page.locator('#dateAndTimePickerInput')).toHaveValue('June 7, 2025 8:15 AM');

})