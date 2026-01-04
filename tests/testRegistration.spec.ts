import{expect,test} from '@playwright/test'
test('@web test Registion scenario',async ({page})=>{
await page.goto("https://demowebshop.tricentis.com");
await page.locator("text='Register'").click();
await page.locator('#gender-male').check();
await page.locator('#FirstName').fill('penchal');
await page.locator('#LastName').fill('tester');
let timestamp= Date.now().toString();
const email: string = `test${timestamp}@gmail.com`;
await page.locator('#Email').fill(email);
await page.locator('#Password').fill('Welcome123');
await page.locator('#ConfirmPassword').fill('Welcome123');
await page.locator('#register-button').click();

const actualsucessMessage:any=await page.locator('.result').textContent();
console.log(actualsucessMessage);
const expectedMessage:string = "Your registration completed";
expect(actualsucessMessage.trim()).toBe(expectedMessage);

})