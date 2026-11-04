import {test,expect} from '@playwright/test';

test('Date Picker Calender 1', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //date picker 1- approach 1
     
    await page.locator('#datepicker').click();
    await selectDate(page,'22','April','2026');
    //await selectDate(page, '11','December','2025');
   
    await page.waitForTimeout(5000);
})

async function selectDate(page,date,month,year){
while(true){
   const selectMonth = await page.locator('.ui-datepicker-month').textContent();
   const selectYear = await page.locator('.ui-datepicker-year').textContent();
   //const selectDate = await page.locator('a.ui-state-default').textContent();
   if(selectMonth === month && selectYear === year){
    await page.locator('.ui-datepicker-calendar td a').getByText(date, { exact: true }).click();
     break;
   }
   else{
    await page.locator('.ui-datepicker-prev').click();
   }

   }
}

test('Date picker calender 2', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //another approach-Date picker 1
    const date = await page.locator('#datepicker');
    await date.fill('07/06/2026');
    await expect(date).toHaveValue('07/06/2026');

    await page.waitForTimeout(5000);
})

test('Date picker calender 3',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const date = await page.locator("input[name='SelectedDate']");
    const calender = await date.click();
    await monthYearDropdown(page,'22','Apr','2026');
    await expect(date).toHaveValue('22/04/2026');


})

async function monthYearDropdown(page,date,month,year){

    const selectMonth = await page.locator('.ui-datepicker-month');
    const selectYear = await page.locator('.ui-datepicker-year');
    await selectMonth.selectOption({label: month});
    await selectYear.selectOption(year);
    await page.locator('.ui-datepicker-calendar td a').getByText(date , {exact : true}).click();

    //assertion 
    await expect(selectMonth).toHaveValue('3');
    await expect(selectYear).toHaveValue('2026');
    await page.waitForTimeout(5000);

}