import{expect,test} from '@playwright/test'
<<<<<<< HEAD
test('test dropdown field',async ({page})=>{
=======
test('@regression test error message while logging in',async ({page})=>{
>>>>>>> ef88c29 (updated validateErrormessagetest)
await page.goto("https://demowebshop.tricentis.com/login");
await page.locator("#Email").fill("penchal@gmail.com");
await page.locator("#Password").fill("penchal@");
await page.locator('[value="Log in"]').click();
//await page.waitForTimeout(1000);
let errormessage:string=await page.locator('.validation-summary-errors').textContent()??"";
console.log(errormessage);
page.pause();

})