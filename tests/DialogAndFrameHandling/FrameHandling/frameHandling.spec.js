/*
In Playwright, frames are used when a webpage contains another webpage embedded inside it, usually through an HTML <iframe> element.

For example, a payment form, CAPTCHA, embedded video, or editor may appear inside a frame on the main webpage.

Frames are basically the main page and the iframe have separate document contexts. 
A locator created on the main page generally cannot directly locate elements inside the iframe.
we can work with frames using frameLocator() or Frame objects.

THREE ways to handle frames -
Method	                     Purpose
frameLocator()	         Recommended for locating and interacting with elements inside a frame
page.frameLocator()	     Starts from the page and targets an iframe using a CSS selector
page.frame()	         Gets a Frame object by its name or URL-matching criteria


How to identify frames ?
Inspect the webpage using browser DevTools (F12 → Elements) and look for an <iframe> tag.
Ex -
<iframe id="myFrame"></iframe>
<iframe name="loginFrame"></iframe>
<iframe src="https://example.com/form"></iframe>


1. using .frameLocator() -
lets take an example , thee is one iframe and inside that there is username,password and login buttons
so to interact with these elements -

import { test, expect } from '@playwright/test';

test('Handle iframe', async ({ page }) => {
    await page.goto('https://example.com');
    const frame = page.frameLocator('#loginFrame');
    await frame.getByLabel('Username').fill('Neha');
    await frame.getByLabel('Password').fill('test123');
    await frame.getByRole('button', { name: 'Login' }).click();
});

Here we are interacting iframe elements using frame not page because we can't directly access them.

2. using page.frame() - when you want to retrieve a frame by its name.
ex - using by name
const frame = page.frame({ name: 'loginFrame' });

if (!frame) {
    throw new Error('Login frame not found');
}

await frame.locator('#username').fill('Neha');
await frame.locator('#loginBtn').click();

here, frame is frame object not frameLocator.

using by attribute :-

// Get frame using the frame's name attribute
const frame = page.frame('frame-login');

// Get frame using frame's URL
const frame = page.frame({ url: /.*domain.*/ //});

// Interact with the frame
/*
await frame.fill('#username-input', 'John');


*/