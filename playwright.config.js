const { playwrightTestConfig } = require('@playwright/test');

const config = {                                                 //npx playwright test --config=playwright.config.js --project=chromium(küçük harfle)  çalýþtýrýr.//
    retries: 0,                                            // npx playwright test (--workers=1 testleri 1'er 1'er yapar, workerlarý ayarlayabilirsin) --retries=3 (3 kez testi tekrar eder)
    timeout: 30000,
    reporter: 'list',
    use: {
        baseURL: "https://the-internet.herokuapp.com/",          //baseURL atanýr
        headless: true,                                      // Testi web tarayýcý açarak veya açmayarak koþma
        trace: "only-on-failure",             //  Yaptýðýmýz testi izlemek ve kaydetmek için kullanýrýz. npx playwright show-trace (+ trace dosya konumu) veya https://trace.playwright.dev/
        viewport: { width: 1280, height: 720},
        video: "off",                                          // "retain-on-faluire" (test baþarýsýz olursa kayýt altýna alýr)
        screenshot: "off"                                      // Bu yolla screenshotlar test sonunda alýnýr / "only-on-failure" hata durumunda alýnýr.
    },

    projects: [                                                   //PACKAGE JSON AÇIKLAMAYA ÝZÝN VERMEDÝÐÝ ÝÇÝN BURAYA YAZIYORUM: UZUN KODLARIN KISALTMASI NPM RUN TEST:CHROME OLDU//
        {
            name: 'Chrome',
            use: {browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' }
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit' }
        }
    ]
}

module.exports = config;