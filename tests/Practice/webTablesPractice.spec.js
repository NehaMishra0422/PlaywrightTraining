import {test,expect} from '@playwright/test';

test('Tables', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable');

    //column
    const column = await table.locator('thead tr th');
    const colCount = await column.count();
    console.log('Number of Columns:', colCount);
    expect(colCount).toBe(4);
    
    //rows
    const row = await table.locator('tbody tr');
    const rowCount = await row.count();
    console.log('Number of rows :', rowCount);
    expect(rowCount).toBe(5);

    //pages
    const pages = await page.locator('.pagination li a');
    const pageCount = await pages.count();
    console.log('Number of pages:', pageCount);
    expect(pageCount).toBe(4);

    for(let p=0;p<pageCount;p++){
        if(p>0){
            await pages.nth(p).click();
        }
    }
    
    for(let i=0;i<rowCount;i++){
        const rows = row.nth(i);
        const data = await rows.locator('td');
        const dataCell = await data.count();
        for(let j=0;j<dataCell-1;j++){
            const rowData = await data.nth(j).textContent();
            console.log(rowData); 
        }
    }


})