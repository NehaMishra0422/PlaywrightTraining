import {test,expect} from '@playwright/test';

test('Web Tables',async ({page})=>{
    await page.goto('https://demoqa.com/webtables');
    const columns = await page.locator('thead tr th');
    const colCount = await columns.count();
    console.log('Number of columns :' , colCount);
    expect(colCount).toBe(7);

    const rows = await page.locator('tbody tr');
    const rowCount = await rows.count();
    console.log('Number of rows :', rowCount); 
    expect(rowCount).toBe(3);

    //to get specific row data
    const rowData =  rows.filter({
        has : page.locator('td'),
        hasText :'Alden'
    })
    expect(rowData).toContainText('Alden');
})

test('Handling Dynamic web tables',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#taskTable');
    const columns = await table.locator('#headers th');
    const colCount = await columns.count();
    console.log('Number of columns :' , colCount);
    expect(colCount).toBe(5);

    const rows = await table.locator('#rows tr');
    const rowCount = await rows.count();
    console.log('Number of rows :', rowCount);
    expect(rowCount).toBe(4);

    //to get specific row data
    const rowData =  rows.filter({
        has : page.locator('td'),
        hasText : 'Chrome'
    })
    expect(rowData).toContainText('Chrome');
})

test('Pagination Web Table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const colCount = await columns.count();
    console.log('Number of columns :' , colCount);
    expect(colCount).toBe(4);

    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log('Number of rows :', rowCount);
    expect(rowCount).toBe(5);

    await MultipleProducts(page,rows,'Wireless Earbuds');
    await MultipleProducts(page,rows,'Smartwatch');
    await MultipleProducts(page,rows,'Laptop');

    //to print all the data from rows using for loop
    for(let i=0;i<rowCount;i++){
         const row = rows.nth(i); //to get the particular row
         const data = await row.locator('td'); // to get all the data from that particular row.
         //data.count() will give the nu. of columns in that particular row
       for(let j=0;j<data.count()-1;j--){   //here we don't want to print the last column which is'Checkbox' so we are using data.count()-1
            console.log(await data.count(j)).textContent(); //to print all the data from that particular row
        } 


    }

   
    //to get specific row data and check the check box
    // const rowData = rows.filter({
    //     has : page.locator('td'),
    //     hasText : 'Wireless Earbuds'
    // })
    // expect(rowData).toContainText('Wireless Earbuds');
    // const check = await rowData.locator("input[type='checkbox']").check();
    // expect(check).toBeTruthy();
})

//to select multiple products and check the check boxes, we can create a re-useable function
async function MultipleProducts(page,rows,name){
    const rowData = rows.filter({
        has : page.locator('td'),
        hasText : name
    })
    const checkbox = await rowData.locator("input[type='checkbox']");
    await checkbox.check();
    expect(checkbox).toBeChecked();
}