const { playwrightTestConfig } = require('@playwright/test');

const config = {                                                 //npx playwright test --config=playwright.config.js --project=chromium(k���k harfle)  �al��t�r�r.//
    retries: 0,                                            // npx playwright test (--workers=1 testleri 1'er 1'er yapar, workerlar� ayarlayabilirsin) --retries=3 (3 kez testi tekrar eder)
    timeout: 30000,
    reporter: 'list',
    use: {
        baseURL: "https://the-internet.herokuapp.com/",          //baseURL atan�r
        headless: true,                                      // Testi web taray�c� a�arak veya a�mayarak ko�ma
        trace: "only-on-failure",             //  Yapt���m�z testi izlemek ve kaydetmek i�in kullan�r�z. npx playwright show-trace (+ trace dosya konumu) veya https://trace.playwright.dev/
        viewport: { width: 1280, height: 720},
        video: "off",                                          // "retain-on-faluire" (test ba�ar�s�z olursa kay�t alt�na al�r)
        screenshot: "off"                                      // Bu yolla screenshotlar test sonunda al�n�r / "only-on-failure" hata durumunda al�n�r.
    },

    projects: [                                                   //PACKAGE JSON A�IKLAMAYA �Z�N VERMED��� ���N BURAYA YAZIYORUM: UZUN KODLARIN KISALTMASI NPM RUN TEST:CHROME OLDU//
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