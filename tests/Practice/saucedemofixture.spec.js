import {test,expect} from '../Practice/saucedemofixture.js';

test('Verfiy username field enabled', async({SauceDemo})=>{
    await expect(SauceDemo.getByPlaceholder('Username')).toBeEnabled();
})