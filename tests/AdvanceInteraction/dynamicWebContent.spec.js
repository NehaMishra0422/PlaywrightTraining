import {test,expect} from '@playwright/test';

test('Dynamic Web Table Content', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#taskTable');

    const columns = table.locator('thead tr th');
    const colCount = await columns.count();
    expect(colCount).toBe(5);

    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();
    expect(rowCount).toBe(4);

    //to get all row data from the table
    for(let i=0;i<rowCount;i++){
        const rowData = await rows.nth(i).innerText();
        console.log(rowData);
    }

    //to get specific row data
    const specificData = rows.filter({
        has : page.locator('td'),
        hasText : 'System'
  })
expect(specificData).toContainText('System');

//to get dynamic content (initial value)
const initialValue = await rows.nth(2).innerText();
console.log('initial Value :', initialValue);

//wait until row content changes
await page.reload();

// after refresh, updated value
const updatedValue = await rows.nth(2).innerText();
console.log('Updated Value :', updatedValue);
expect(updatedValue).not.toBe(initialValue);
})

test('Dynamic content',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const CPULoad = await page.locator('p .chrome-cpu').innerText();
    console.log(CPULoad);
    const memory = await page.locator('p .firefox-memory').innerText();
    console.log(memory);
    const network = await page.locator('p .chrome-network').innerText();
    console.log(network);
    const space = await page.locator('p .firefox-disk').innerText();
    console.log(space);

    const table = await page.locator('#taskTable');

    const columns =  table.locator('thead tr th');
    const colCount = await columns.count();
    expect(colCount).toBe(5);

    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();
    expect(rowCount).toBe(4);

    //specific data
    await expect(page.locator('p .chrome-cpu')).toHaveText(CPULoad);
    await expect(page.locator('p .firefox-memory')).toHaveText(memory);
    await expect(page.locator('p .chrome-network')).toHaveText(network);
    await expect(page.locator('p .firefox-disk')).toHaveText(space);


    

})

