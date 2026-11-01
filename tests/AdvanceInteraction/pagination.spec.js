import {test,expect} from '@playwright/test';

test('Pagination', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable');

    //for columns
    const columns = table.locator('thead tr th');
    const colCount = await columns.count();
    console.log('Number of columns :' , colCount);
    expect(colCount).toBe(4);

    //for rows
    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log('Number of rows :', rowCount);
    expect(rowCount).toBe(5);

    //for pages 
    const pages = await page.locator('.pagination li a');
    const pageCount = await pages.count();
    expect(pageCount).toBe(4);

    //to print all the data from all pages (pagination)
    //loop for pages to click
    for(let p=0;p<pageCount;p++){
          if(p>0){
            await pages.nth(p).click();  //to click on the page number
          }
    
        //loop for rows to get the data from each row  
        for(let i=0;i<rowCount;i++){
        const row = rows.nth(i); //to get the particular row
        const data = await row.locator('td'); // to get all the data from that particular row.
         //data.count() will give the nu. of columns in that particular row
       for(let j=0;j<data.count()-1;j--){   //here we don't want to print the last column which is'Checkbox' so we are using data.count()-1
            console.log(await data.count(j)).textContent(); //to print all the data from that particular row
        } 

}}
})

        