import { test, expect } from '@playwright/test';
import { Page } from '../core/Page';

let pageInstance: Page = new Page();
test('Test 02 Laboratorio 03', async ({ page }) => {
    await page.goto(pageInstance.getLinkPage());
});
function defineChecks(numberChecks: number) {
    switch (numberChecks) {
        case 1: {
            break;
        }
        case 2: {
            break;
        }
        case 3: {
            break;
        }
        case 4: {
            break;
        }
        case 5: {
            break;
        }
    }
}

