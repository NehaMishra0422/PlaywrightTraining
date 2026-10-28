import {test,expect} from '@playwright/test';

test('locator.waitForTimeout() Practical', async({page})=>{
    await page.goto('https://playground.qajourney.net/dynamic-dom/');
    await page.getByRole('button',{name : 'Show Element'}).click();

    //state : visible
    await page.locator('#dyn-el').waitFor({state : 'visible'});

    //enabled is supported with expect()
    await expect(page.getByRole('button',{name : 'Hide Element'})).toBeEnabled();

    //Throws error - locator.waitFor: state: expected one of (attached|detached|visible|hidden)
    //enabled is not supported with waitFor()
    //await page.getByRole('button',{name : 'Hide Element'}).waitFor({state : 'enabled'});
    await page.getByRole('button',{name : 'Hide Element'}).click();

   // state : hidden
   await expect(page.locator('#dyn-el')).toBeHidden();
   await page.locator('#dyn-el').waitFor({state : 'hidden'});
   
   //add items to the list
   await page.locator('#list-input').fill('item 1');
   await page.getByRole('button',{name :'Add'}).click();
   await page.locator('#list-input').fill('item 2');
   await page.getByRole('button',{name :'Add'}).click();
   
  //attached
   await page.getByText('item 1').waitFor({state : 'attached'});

   await page.locator('.dom-remove').first().click();

   //detached
   await page.getByText('item 1').waitFor({state : 'detached'});
})