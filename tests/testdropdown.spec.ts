import{expect,test} from '@playwright/test'
test('@web test dropdown field',async ({page})=>{
await page.goto("https://demowebshop.tricentis.com");
await page.click('text=Computers');
await page.click('text=Notebooks');
//await page.locator('#products-orderby').click();
/*const dropdown:Locator=page.locator('#products-orderby');
await page.waitForTimeout(2000);
await dropdown.selectOption('https://demowebshop.tricentis.com/desktops?orderby=10');*/
//await page.locator('#products-orderby').selectOption("Price: Low to High");
//await page.locator('#products-orderby').selectOption({index:1});
await page.waitForTimeout(2000);
let options=await page.locator('#products-orderby').allTextContents();
console.log("******************");
console.log("Total number of values:",options);

/*let expected:string="Created on\n";
const isPresent=options.includes(expected);
expect(isPresent).toContain(expect);*/

page.pause();

})