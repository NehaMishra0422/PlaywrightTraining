import {test,expect} from '@playwright/test';

test('Pagination',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable');
    const column = table.locator('thead tr th');
    const colCount = await column.count();
    console.log('Number of column :', colCount);
    
    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log('Number of Rows :', rowCount);


//pages
const pages = await page.locator('.pagination li a');
const pageCount = await pages.count();
console.log('Number of pages:', pageCount);

for(let p=0;p<pageCount;p++){
    if(p>0){
        await pages.nth(p).click();
    }
}
for(let i=0;i<rowCount;i++){
    const row = rows.nth(i);
    const data = await row.locator('td');
    const cellcount = await data.count();
    for(let j=0;j<cellcount-1;j++){
        const cellData = await data.nth(j).textContent();
        console.log(cellData);
    }
}


})

