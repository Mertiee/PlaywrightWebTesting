const { test, expect } = require('@playwright/test');


test.describe("Examples", () => {                                                  // --grep '@demoqa' almayý unutma!!!// npx playwright test example2.spec.js

    test.skip('Testing Selectors @demoqa', async ({ page }) => {                             // KOD YAZMADAN RECORDER A KAYDEDEREK TEST YAPMAK ÝÇÝN  npx playwright codegen (internet sitesi) //

        await page.goto("https://demoqa.com/text-box");
        await page.locator('#userName').type("Test Username");                                //Web sayfasý incele, element, id=userName kýsmýný aldýk ctrl+f = #userName ile arattýk//
        await page.pause();
        await page.locator('[placeholder="name@example.com"]').type("test@email.com");       //Bu sefer attributes olarak placeholder'i aldýk [placeholder="name@example.com"]
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

        await page.goto("https://demoqa.com/text-box");                ///URL'nin title doðru mu testi  // --debug inspector açar (page.pause komutu olmadan)
        await expect(page).toHaveTitle("ToolsQA");
        await expect(page).toHaveURL("https://demoqa.com/text-box");

                                                                        //Web sayfasýnda incele içinde console sekmesinde kullanabilecek bazý komutlar //
                                                                        // playwright.$('span:has-text("Text Box")') - element doðru mu, yerinin gösterir.
                                                                        // playwright.$$('span.text') - bütün text element sayýsý verir.
                                                          // playwright.inspect('span:has-text("Text Box")') - element e geri götürür kod kaynaðý içinde yerini gösterir

    })
})

test.describe("Authentication", () => {   // npx playwright codegen --save-storage=auth.json parabank.parasoft.com / kullanýcý adý þifre kayýtlý cookie auth.json dosyasý kaydeder. //
    test.use({
        storageState: "automationUser.json"
    })

    test.beforeEach(async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    })
                                        // npx playwright codegen --load-storage=auth.json parabank.parasoft.com / kayýtlý cookie'yi kullanarak siteyi açýp kul. giriþi yapar.

    test.skip("Saving Authentication Test 1" , async ({ page }) => { 

        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.locator('input[name="username"]').click();
        await page.locator('input[name="username"]').fill('automationDemo');
        await page.locator('input[name="username"]').press('Tab');
        await page.locator('input[name="password"]').fill('admin');
        await page.getByRole('button', { name: 'Log In' }).click();

        await page.context().storageState({ path: 'automationUser.json' });  // codegen kullanmadan cookie oluþturup kayýt eder 

    })

    test("Saving Authentication Test 2 ", async ({ page }) => {

        await page.getByRole('link', { name: 'Transfer Funds' }).first().click();            // eðer sayfa üstünde birden fazla ayný isimde locator varsa first-second diye belirt

    })

    test("Saving Authentication Test 3 ", async ({ page }) => {

        await page.getByRole('link', { name: 'Bill Pay' }).first().click();

    })

    // EMULATOR KOMUTU ÝLE SPESÝFÝK CÝHAZDA TEST YAPMAK ÝÇÝN  npx playwright codegen --device= "iPhone 12" (www. internet sitesi) //


})