const { test, expect } = require('@playwright/test');

      //test("First Test", async ({ page }) => {                            //Powershell --headed(browser açar) / --browser=firefox/chrome vs. spesifik browser ile iþlem yapar//
                                                                      // --grep '@smoke' (smoke tag olanlarý test eder) --grep-invert '@smoke' (smoke tag dýþýndakileri test eder)//
      //await page.goto("https://www.playwright.dev");                   
                                                                               //Reporter Build In//    --reporter=html  / show-report test raporu gösterir.
                                                            // --reporter=list (liste þeklinde bütün browserlarda test eder. --reporter=line (7/8) þeklinde test eder. =dot nokta þeklinde)
      //const title = page.locator('.navbar_inner .navbar_title');
      //await expect(title).toHaveTest('Playwright');
      //await page.pause();                                          //testi bu noktada durdurur.//
      //})
    //Grup Testi Bloðu Aþaðýda Yer Almakta//
test.describe.parallel("Smoke Tests", () => {                      //test.describe.parallel testleri ayný anda çalýþtýrýr//
    test.beforeEach(async ({ page }) => {
        await page.goto("/");                     ///beforeEach'e her test öncesi girmesi gereken web sayfasýný girdik//
  
    })
    test.afterEach(async ({ page }) => {
        console.log("This test finished succesfully");        //afterEach' her test sonunda aþaðýdaki þeyi yaptýrýr.//
    })

    test('Simple Click Test @smoke', async ({ page, browserName }) => {

        
        await page.waitForTimeout(4000);
        await page.locator("text=Add/Remove Elements").click();
        await page.waitForTimeout(4000);
        await page.click("text=Add Element");
        
    })

    test('Duplicate Test Two @smoke', async ({ page }) => {

        await page.waitForTimeout(3000);
        await page.locator("text=Add/Remove Elements").click();
        await page.waitForTimeout(3000);
        await page.click("text=Add Element"); 
        
    })
})


test.skip('Simple Click Test @smoke', async ({ page }) => {

    await page.goto("/");                                      //config'de use kýsmýna baseURL ekledik. Otomatik site açýlýr. ( /checkboxes yazarsan sitedeki url rotasýna gider)
    await page.waitForTimeout(4000);
    await page.locator("text=Add/Remove Elements").click();
    await page.waitForTimeout(4000);
    await page.click("text=Add Element");                ///Ýkinci sayfadaki add element isimli text'e týklama kodunun farklý yazýmý(üstteki birinci yol)//

                                                        //veya aþaðýdaki üçüncü yol ile de yapýlabilir
                                                        // const element = page.locator("text=Add/Remove Elements");
                                                        // const addElement = page.locator("text=Add Element");
                                                        // await.element.click();
                                                        //await addElement.click();
    await page.pause();
})

//test.only('Simple Click Test', async ({ page }) => {                //test.only sadece bu bloðu testini yapar.Debugging kýsmýnda hayat kurtarýr//

    //await page.goto("https://the-internet.herokuapp.com/");
    //await page.waitForTimeout(4000);
    //await page.locator("text=Add/Remove Elements").click();
    //await page.waitForTimeout(4000);
    //await page.click("text=Add Element");
//})

//test.skip('Simple Click Test', async ({ page }) => {                //test.skip bu bloktaki testi atlar. Yine önemli bilgilerden //

    //await page.goto("https://the-internet.herokuapp.com/");
    //await page.waitForTimeout(4000);
    //await page.locator("text=Add/Remove Elements").click();
    //await page.waitForTimeout(4000);
    //await page.click("text=Add Element");
//})

test.skip("Duplicate Test @regression", async ({ page, browserName}) => {                //bu test bloðunun özel bir browserda(mesela firefox) çalýþmasýný engeller //

    test.skip(browserName === 'firefox', 'Working on the firefox fix');
    await page.goto("https://the-internet.herokuapp.com");
    await page.screenshot({ path: "screenshot2.png", fullPage: true });                   //screenshot almak için path belirtmek gerek / fullpage:true bütün sayfayý alýr //
    await page.locator("text=Add/Remove Elements").click();
                                                                                          // Sadece sayfada clicklenecek yerin screenshot'u þöyle alýnýr
                                                                                          //const locator1 = page.locator1("text=Add/Remove Elements");
                                                                                          //await.locator1.screenshot({path: "screenshot3.png"});
    await page.waitForTimeout(4000);
    await page.click("text=Add Element");
})