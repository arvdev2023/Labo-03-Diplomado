import { test, expect } from '@playwright/test';
import { Page } from '../core/Page';

let pageInstance: Page = new Page();
let locatorInput = '//input[@id="developer-name"]';
let locatorSubmit = '//input[@id="populate"]';
test.skip('Test 01 Laboratorio 03', async ({ page }) => {

    await page.goto(pageInstance.getLinkPage());
    await page.locator(locatorInput).click()
    await page.locator(locatorInput).fill('TEST 01')
    await page.locator(locatorSubmit).click()
    test.setTimeout(60000)
});
