import{expect,test} from '@playwright/test'
test('@regression test error message while logging in',async ({page})=>{
await page.goto("https://demowebshop.tricentis.com/login");
await page.locator("#Email").fill("penchal@gmail.com");
await page.locator("#Password").fill("penchal@");
await page.locator('[value="Log in"]').click();
//await page.waitForTimeout(1000);
let errormessage:string=await page.locator('.validation-summary-errors').textContent()??"";
console.log(errormessage);
page.pause();
})