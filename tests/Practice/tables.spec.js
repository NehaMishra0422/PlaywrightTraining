import {test,expect} from '@playwright/test';

test('Web Tables', async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    const column = page.locator('thead tr th');
    const colCount = await column.count();
    console.log('Number of columns :' , colCount);
    expect(colCount).toBe(7);

    const row = page.locator('tbody tr');
    const rowCount = await row.count();
    expect(rowCount).toBe(3);
    console.log('Number of rows :' , rowCount);

    //find specific data
    const rowData = row.filter({
        has : page.locator('td'),
        hasText : 'Cierra'
    })
   await expect(rowData).toContainText('Cierra');

})

test('Web tables -1',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/');
  const table = await page.locator('#productTable');
  const column = table.locator('thead tr th');
  const colCount = await column.count();
  console.log('number of columns :', colCount);

  const row = table.locator('tbody tr');
  const rowCount = await row.count();
  console.log('number of rows :', rowCount);

  
await MutlipleProducts(page,'Smartphone',row);
await MutlipleProducts(page,'Smartwatch',row);
  
})

async function MutlipleProducts(page,name,row){
  const rowData = row.filter({
    has : page.locator('td'),
    hasText : name
  })
  const checkbox = await rowData.locator("input[type='checkbox']");
  checkbox.check();
  await expect(checkbox).toBeChecked();
}
