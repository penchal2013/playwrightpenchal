import {test} from '@playwright/test'

test.describe.serial('Hooks Implementation', async () => {
    let page:any
    let browser;
    let context:any
    
    test.beforeAll('It is a :Before ALL ', async () => {
        console.log(" Executed the Before ALL");
    });
    test.beforeEach('Verify Before Each', async ({ browser }) => {
        console.log(" <----Before each test Executed --->");
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://demowebshop.tricentis.com/");
    });
    test.afterEach('Verify After Each', async () => {
        console.log(" <----After each test Executed --->");
        await page.waitForTimeout(2000);
        await context.close();
    });
    test('@web Verify Test1',{tag:'@web'}, async () => {
        console.log(" <----Test1 Executed --->");
        await page.click('text=Apparel & Shoes');
        await page.getByRole('button', { name: 'Add to cart' }).first().click();
    });
    test('@regression Verify Test2', async () => {
        console.log(" <----Test2 Executed in regression suite--->");
        await page.getByRole('link', { name: 'Computers' }).nth(1).click();
        await page.getByRole('link', { name: 'Desktops' }).last().click();
        await page.locator('.product-item').filter({ hasText: 'expensive' }).click();
        await page.waitForTimeout(2000);
    });
    test.afterAll('Lanching the application:After ALL ', async () => {
        console.log(" Executed the AfterALL");
    });
});
