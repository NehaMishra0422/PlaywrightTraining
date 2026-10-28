import {test,expect} from '@playwright/test';

test('Visible VS Attached', async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html#section-showhide');
    await page.getByRole('button',{name : 'Hide Element'}).click();
     
    //Hidden + attached
    //element is hidden
    await expect(page.locator('#showhide-textbox')).toBeHidden();

    //element is not visible
    //await expect.soft(page.locator('#showhide-textbox')).toBeVisible();

    //element is hidden but attached in DOM
    await expect(page.locator('#showhide-textbox')).toBeAttached();
})
