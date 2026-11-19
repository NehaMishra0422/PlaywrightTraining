/*

1. What is the difference between browser, browserContext, and page in Playwright?
These are the three main levels of browser handling.
Object	           Meaning	                                                        Example
Browser	          Actual browser instance, such as Chromium, Firefox or WebKit.	   chromium.launch()
BrowserContext	  An isolated browser session with its own cookies and storage.	   browser.newContext()
Page	          A tab or window inside a browser context.	                       context.newPage()

Ex-
import {test, chromium} from '@playwright/test';

test('Browser handling', async()=>{
    const browser = await chromium.lainch({
    headless : true
    })
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://example.com');
    await brwser.close();
    })

2. How do you launch Chromium, Firefox, and WebKit? What changes are needed to run the same test across all three?
Playwright supports three major browser engines:
- Chromium – used by Chrome and Edge.
- Firefox – Mozilla Firefox.
- WebKit – used by Safari.

Ex-
import { chromium, firefox, webkit } from '@playwright/test';

const browser1 = await chromium.launch();
const browser2 = await firefox.launch();
const browser3 = await webkit.launch();

await browser1.close();
await browser2.close();
await browser3.close();  

To run the same test across all three browsers using Playwright Test, configure projects in playwright.config.js.

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] }
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] }
        }
    ]
});

3. What is the difference between launching a browser using chromium.launch() and using Playwright Test's built-in page fixture?
chromium.launch()	                         Built-in page fixture
Launches a browser manually.	             Playwright Test manages the browser and page.
We create the context and page ourselves.	 Page and context are provided automatically.
We manage cleanup manually.	                 Playwright handles cleanup automatically.
More control over browser lifecycle.	     Easier and recommended for normal test automation.

4. What is a browser context, and why does Playwright use isolated browser contexts for tests?
A browser context is an independent browser session.

It maintains its own:
- Cookies.
- Local storage.
- Session storage.
- Cache and other browser session data.
Playwright creates isolated contexts so that one test does not interfere with another test.

5. What happens if two pages are opened in the same browser context? Do they share cookies and local storage?
Yes. Pages in the same browser context share the same browser session.

Ex-
const context = await browser.newContext();

const page1 = await context.newPage();
const page2 = await context.newPage();

Both pages share:
- Cookies.
- Local storage for the same origin.
- Session-level browser context settings

6. How do you open a new tab or page within an existing browser context?
Use context.newPage().
Ex-
const page1 = await context.newPage();
await page1.goto('https://example.com');

const page2 = await context.newPage();
await page2.goto('https://google.com');

7. What is the difference between page.goto() and opening a new page using context.newPage()?
page.goto()	                                context.newPage()
Navigates an existing page to a URL.	    Creates a new page or tab.
Does not create another tab.	            Opens a separate tab.
Used for navigation.	                    Used for opening another page.

Ex- Navigates to a existing page 
await page.goto('https://google.com');

Ex- opens a new tab and navigates it
const page = await context.newPage();
await page.goto('https://google.com');

8. How do you configure the browser, base URL, viewport, and browser projects in playwright.config.js?
import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        browserName: 'chromium',
        baseURL: 'https://example.com',
        headless: false,
        viewport: {
            width: 1280,
            height: 720
        }
    },

    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' }
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' }
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' }
        }
    ]
});

9. What is the difference between viewport size and the actual browser window size?
Viewport size	                                            Browser window size
Visible webpage content area.	                           Overall browser window dimensions.
Does not include browser toolbar or tabs.	               Includes browser UI such as tabs and toolbar.
Controls webpage layout and responsive behavior.	       Controls the size of the browser window.

For example, a browser window might be 1400 × 900 pixels, while its webpage viewport is smaller

10. How do you set a custom viewport size, and why might a test behave differently at different viewport sizes?
We can configure the viewport in the test or configuration file.

in playwright.config.js file
use: {
    viewport: {
        width: 1366,
        height: 768
    }
}

in test file
await page.setViewportSize({
    width: 1280,
    height: 720
});

Different viewport sizes can change:
- Element positions.
- Navigation menus.
- Responsive layouts.
- Visibility of buttons.
- Whether elements are displayed in desktop or mobile layouts.

11. Does Playwright provide a direct equivalent of Selenium's maximize() method? How can you configure a suitable viewport or launch a headed browser with a larger window?
Playwright does not provide a direct maximize() method like Selenium's driver.manage().window().maximize().

We can set a custom viewport:
await page.setViewportSize({
    width: 1920,
    height: 1080
});

Or launch Chromium in headed mode with a maximized window:
const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized']
});

const context = await browser.newContext({
    viewport: null
});

const page = await context.newPage();

Here:
- headless: false opens the browser UI.
- --start-maximized asks Chromium to start maximized.
- viewport: null disables Playwright's fixed viewport emulation so the page uses the actual window size.
This approach is Chromium-specific.

12. What is device emulation in Playwright? Which settings can be emulated?
Device emulation means configuring the browser to behave like a particular mobile or tablet device.

Playwright can emulate:
- Screen and viewport dimensions.
- User agent.
- Device scale factor.
- Touch support.
- Mobile browser behavior.
- Orientation.
- Color scheme and other browser preferences.
Ex-
const context = await browser.newContext({
    viewport: {
        width: 390,
        height: 844
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true
});

13. How would you run a test using a predefined device profile, such as an iPhone or Pixel?
Playwright provides predefined device profiles through devices.
Ex-
import { test, devices } from '@playwright/test';

test.use({
    ...devices['iPhone 13']
});

test('Mobile test', async ({ page }) => {
    await page.goto('https://example.com');
});

using pixel profile -
test.use({
    ...devices['Pixel 7']
});

14. Does device emulation mean the test is running on a real mobile device? Explain the difference.
No. Device emulation does not mean the test is running on a physical mobile device.
Device emulation	                        Real mobile device
Runs in a desktop browser environment.	    Runs on actual mobile hardware.
Simulates mobile settings.	                Uses actual device hardware and OS.
Useful for responsive testing.	            Useful for real-device compatibility testing.
Cannot reproduce every hardware behavior.	Can test actual touch, hardware and OS behavior.

15. If two tests use the same browser, how can you prevent cookies and session data from leaking between them?
Use separate browser contexts.

Each context maintains independent cookies and storage.
Ex-
const context1 = await browser.newContext();
const context2 = await browser.newContext();

const page1 = await context1.newPage();
const page2 = await context2.newPage();































*/