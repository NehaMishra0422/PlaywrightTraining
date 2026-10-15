import { chromium } from 'playwright';
(async()=> {
    const browser = await chromium.launch({headless : false}); //launches chrome browser
    const page = await browser.newPage();  // opens new page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button' , {name : 'Login' }).click();
    await browser.close();
})();

// import { firefox,webkit} from 'playwright';
    // Launch Firefox
    // const browser2 = await firefox.launch({ headless: false });
    // const page2 = await browser2.newPage();
    // await page2.goto('https://www.saucedemo.com/');
    // await browser2.close();

    // Launch WebKit (Safari engine)
    // const browser3 = await webkit.launch({ headless: false });
    // const page3 = await browser3.newPage();
    // await page3.goto('https://www.saucedemo.com/');
    // await browser3.close();
