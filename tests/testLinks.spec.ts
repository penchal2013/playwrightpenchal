import{Locator, test} from '@playwright/test'
test('@regression test all links present scenario',async ({page})=>{
await page.goto("https://demowebshop.tricentis.com");
const totalElements_ofComputers:Locator[]=await page.locator("[href='computers']").all();
console.log("Total elements:"+totalElements_ofComputers.length);

const alllinks:Locator=page.locator('a');
const links_count:number=await alllinks.count();

console.log("total links:"+links_count);
for(let i=0;i<links_count;i++){
    console.log('Link at ${i} th index is:'+await alllinks.nth(i).textContent());
    }
})