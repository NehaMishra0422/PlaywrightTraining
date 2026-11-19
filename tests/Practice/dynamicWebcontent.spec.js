import {test,expect} from '@playwright/test';

test('Dynamic web table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#taskTable');

    const column = await table.locator('thead tr th');
    const colCount = await column.count();
    console.log('Number of column :', colCount);
    expect(colCount).toBe(5);

    const rows = await table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log('Number of rows :', rowCount);
    expect(rowCount).toBe(4);

    //to get all row data
    const row = await rows.locator('td');
    const data = await row.count();
    console.log(data);
    for(let i=0;i<data;i++){
        const rowData = await row.nth(i).innerText();
        console.log(rowData);
    }

    //to get all column data
    for(let j=0;j<colCount;j++){
        const colData = await column.nth(j).innerText();
        console.log(colData);
    }
})