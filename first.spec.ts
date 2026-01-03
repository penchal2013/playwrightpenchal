import {test} from '@playwright/test'
test('test welcome message-first program',async ({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
page.goto("https://www.google.com");

})