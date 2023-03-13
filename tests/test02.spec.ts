import { test, expect } from '@playwright/test';
import { Page } from '../core/Page';

let pageInstance: Page = new Page();
test('Test 02 Laboratorio 03', async ({ page }) => {
    await page.goto(pageInstance.getLinkPage());
});

 
