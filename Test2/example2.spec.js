const { test, expect } = require('@playwright/test');


test.describe("Examples", () => {                                                  // --grep '@demoqa' almay� unutma!!!// npx playwright test example2.spec.js

    test.skip('Testing Selectors @demoqa', async ({ page }) => {                             // KOD YAZMADAN RECORDER A KAYDEDEREK TEST YAPMAK ���N  npx playwright codegen (internet sitesi) //

        await page.goto("https://demoqa.com/text-box");
        await page.locator('#userName').type("Test Username");                                //Web sayfas� incele, element, id=userName k�sm�n� ald�k ctrl+f = #userName ile aratt�k//
        await page.pause();
        await page.locator('[placeholder="name@example.com"]').type("test@email.com");       //Bu sefer attributes olarak placeholder'i ald�k [placeholder="name@example.com"]
        await page.waitForTimeout(2000);
        await page.locator('#currentAddress').type("Test");                                  
        await page.pause();
        await page.locator('#permanentAddress').type("test");
        await page.waitForTimeout(2000);
        await page.locator('button:has-text("Submit")').click();

        await page.pause();
        const name = page.locator('#name');
        const email = page.locator('#email');
        const currentAddress = page.locator('p#currentAddress');
        const permanentAddress = page.locator('p#permanentAddress');

        await expect(name).toBeVisible();
        await expect(name).toHaveText('Name:Test Username');
        await expect(email).toBeVisible();
        await expect(email).toHaveText('Email:test@email.com');
        await expect(currentAddress).toBeVisible();
        await expect(currentAddress).toHaveText("Current Address :Test");
        await expect(permanentAddress).toBeVisible();
        await expect(permanentAddress).toHaveText("Permananet Address :test");

    })

    test.skip('Testing Assertions @demoqa1', async ({ page }) => {

        await page.goto("https://demoqa.com/text-box");                ///URL'nin title do�ru mu testi  // --debug inspector a�ar (page.pause komutu olmadan)
        await expect(page).toHaveTitle("ToolsQA");
        await expect(page).toHaveURL("https://demoqa.com/text-box");

                                                                        //Web sayfas�nda incele i�inde console sekmesinde kullanabilecek baz� komutlar //
                                                                        // playwright.$('span:has-text("Text Box")') - element do�ru mu, yerinin g�sterir.
                                                                        // playwright.$$('span.text') - b�t�n text element say�s� verir.
                                                          // playwright.inspect('span:has-text("Text Box")') - element e geri g�t�r�r kod kayna�� i�inde yerini g�sterir

    })
})

test.describe("Authentication", () => {   // npx playwright codegen --save-storage=auth.json parabank.parasoft.com / kullan�c� ad� �ifre kay�tl� cookie auth.json dosyas� kaydeder. //
    test.use({
        storageState: "automationUser.json"
    })

    test.beforeEach(async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    })
                                        // npx playwright codegen --load-storage=auth.json parabank.parasoft.com / kay�tl� cookie'yi kullanarak siteyi a��p kul. giri�i yapar.

    test.skip("Saving Authentication Test 1" , async ({ page }) => { 

        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.locator('input[name="username"]').click();
        await page.locator('input[name="username"]').fill('automationDemo');
        await page.locator('input[name="username"]').press('Tab');
        await page.locator('input[name="password"]').fill('admin');
        await page.getByRole('button', { name: 'Log In' }).click();

        await page.context().storageState({ path: 'automationUser.json' });  // codegen kullanmadan cookie olu�turup kay�t eder 

    })

    test("Saving Authentication Test 2 ", async ({ page }) => {

        await page.getByRole('link', { name: 'Transfer Funds' }).first().click();            // e�er sayfa �st�nde birden fazla ayn� isimde locator varsa first-second diye belirt

    })

    test("Saving Authentication Test 3 ", async ({ page }) => {

        await page.getByRole('link', { name: 'Bill Pay' }).first().click();

    })

    // EMULATOR KOMUTU �LE SPES�F�K C�HAZDA TEST YAPMAK ���N  npx playwright codegen --device= "iPhone 12" (www. internet sitesi) //


})