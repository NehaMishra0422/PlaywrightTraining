import {test,expect} from '@playwright/test';

test('Calender 1', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#datepicker').click();
    await selectDate(page,'22',2026,'April');
    
})
async function selectDate(page,Date,year,month){
    while(true){
        const selectYear = await page.locator('.ui-datepicker-year').textContent();
        const selectMonth =await page.locator('.ui-datepicker-month').textContent();
        if(selectYear === year.toString() && selectMonth === month){
            await page.locator('.ui-datepicker-calendar td a').getByText(Date,{exact : true}).click();
        }
        else{
            await page.locator('.ui-datepicker-prev').click();
        }
}}