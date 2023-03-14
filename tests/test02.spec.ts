import { test, expect } from '@playwright/test';
import { Pagina } from '../core/Pagina';
import { Page } from '@playwright/test';

let pageInstance: Pagina = new Pagina();
let selRadioWindows = '//input[@id="windows"]'
let selRadioMac = '//input[@id="macos"]'
let selRadioLinux = '//input[@id="linux"]'


test.skip('Test 02 Laboratorio 03', async ({ page }) => {
    let currentLocator = page.locator(selRadioWindows);
    
    await page.goto(pageInstance.getLinkPage());
    await page.locator(selRadioWindows).click();
    await expect(currentLocator).toBeChecked()

});


