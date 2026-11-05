import { test, expect } from '../customFixture/demoblazeFixture.js';

test('Verify homepage title', async ({ demoblazeLogin }) => {
     await expect(demoblazeLogin).toHaveTitle('STORE');

});

test('Verify login button', async ({ demoblazeLogin }) => {
     await expect(demoblazeLogin.locator('#login2')).toBeVisible();

});

test('Verify signup button', async ({ demoblazeLogin }) => {
      await expect(demoblazeLogin.locator('#signin2')).toBeVisible();

});