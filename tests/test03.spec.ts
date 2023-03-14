import { test, expect } from '@playwright/test';
import { Pagina } from '../core/Pagina';

let pageInstance: Pagina = new Pagina();
test.skip('Test 02 Laboratorio 03', async ({ page }) => {
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

