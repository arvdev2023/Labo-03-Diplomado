import { test, expect } from '@playwright/test';
import { Pagina } from '../core/Pagina';

let paginaInstancia = new Pagina();
let selectorCheckSlid = '//input[@id="tried-test-cafe"]';
let selectorText='//textarea[@id="comments"]'

test('Test 05 Laboratorio 03.', async ({ page }) => {
    await page.goto(paginaInstancia.getLinkPage())
    await page.locator(selectorCheckSlid).click()
    await page.locator("#slider").click()
    await page.locator(selectorText).fill('TEXTO DE AREA LLENADO')
    test.setTimeout(80000)
});