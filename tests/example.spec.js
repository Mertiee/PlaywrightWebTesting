const { test, expect } = require('@playwright/test');

      //test("First Test", async ({ page }) => {                            //Powershell --headed(browser a�ar) / --browser=firefox/chrome vs. spesifik browser ile i�lem yapar//
                                                                      // --grep '@smoke' (smoke tag olanlar� test eder) --grep-invert '@smoke' (smoke tag d���ndakileri test eder)//
      //await page.goto("https://www.playwright.dev");                   
                                                                               //Reporter Build In//    --reporter=html  / show-report test raporu g�sterir.
                                                            // --reporter=list (liste �eklinde b�t�n browserlarda test eder. --reporter=line (7/8) �eklinde test eder. =dot nokta �eklinde)
      //const title = page.locator('.navbar_inner .navbar_title');
      //await expect(title).toHaveTest('Playwright');
      //await page.pause();                                          //testi bu noktada durdurur.//
      //})
    //Grup Testi Blo�u A�a��da Yer Almakta//
test.describe.parallel("Smoke Tests", () => {                      //test.describe.parallel testleri ayn� anda �al��t�r�r//
    test.beforeEach(async ({ page }) => {
        await page.goto("/");                     ///beforeEach'e her test �ncesi girmesi gereken web sayfas�n� girdik//
  
    })
    test.afterEach(async ({ page }) => {
        console.log("This test finished succesfully");        //afterEach' her test sonunda a�a��daki �eyi yapt�r�r.//
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

    await page.goto("/");                                      //config'de use k�sm�na baseURL ekledik. Otomatik site a��l�r. ( /checkboxes yazarsan sitedeki url rotas�na gider)
    await page.waitForTimeout(4000);
    await page.locator("text=Add/Remove Elements").click();
    await page.waitForTimeout(4000);
    await page.click("text=Add Element");                ///�kinci sayfadaki add element isimli text'e t�klama kodunun farkl� yaz�m�(�stteki birinci yol)//

                                                        //veya a�a��daki ���nc� yol ile de yap�labilir
                                                        // const element = page.locator("text=Add/Remove Elements");
                                                        // const addElement = page.locator("text=Add Element");
                                                        // await.element.click();
                                                        //await addElement.click();
    await page.pause();
})

//test.only('Simple Click Test', async ({ page }) => {                //test.only sadece bu blo�u testini yapar.Debugging k�sm�nda hayat kurtar�r//

    //await page.goto("https://the-internet.herokuapp.com/");
    //await page.waitForTimeout(4000);
    //await page.locator("text=Add/Remove Elements").click();
    //await page.waitForTimeout(4000);
    //await page.click("text=Add Element");
//})

//test.skip('Simple Click Test', async ({ page }) => {                //test.skip bu bloktaki testi atlar. Yine �nemli bilgilerden //

    //await page.goto("https://the-internet.herokuapp.com/");
    //await page.waitForTimeout(4000);
    //await page.locator("text=Add/Remove Elements").click();
    //await page.waitForTimeout(4000);
    //await page.click("text=Add Element");
//})

test.skip("Duplicate Test @regression", async ({ page, browserName}) => {                //bu test blo�unun �zel bir browserda(mesela firefox) �al��mas�n� engeller //

    test.skip(browserName === 'firefox', 'Working on the firefox fix');
    await page.goto("https://the-internet.herokuapp.com");
    await page.screenshot({ path: "screenshot2.png", fullPage: true });                   //screenshot almak i�in path belirtmek gerek / fullpage:true b�t�n sayfay� al�r //
    await page.locator("text=Add/Remove Elements").click();
                                                                                          // Sadece sayfada clicklenecek yerin screenshot'u ��yle al�n�r
                                                                                          //const locator1 = page.locator1("text=Add/Remove Elements");
                                                                                          //await.locator1.screenshot({path: "screenshot3.png"});
    await page.waitForTimeout(4000);
    await page.click("text=Add Element");
})