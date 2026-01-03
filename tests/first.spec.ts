import {test} from '@playwright/test'
test('@web test welcome message-first program',async ({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://www.google.com");

})