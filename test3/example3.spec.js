const { test, expect } = require('@playwright/test');

test.skip('Real Deal Test', async ({ page }) => {                                            // BÝLGÝSAYAR DOSYA KONUMUNDA TEK YERÝNE 2 \\ KULLAN!!!

    test.setTimeout(5000)                               //5 saniye içinde sonlanmazsa fail verir

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');                         // ÝNTERNET SÝTESÝNÝN PDF OLARAK KAYIT ETMEK ÝÇÝN//
    await page.locator('input[name="username"]').click();                                       //npx playwright pdf (internet sitesi) (dosyaadý.pdf)
    await page.locator('input[name="username"]').fill('automationDemo');
    await page.locator('input[name="username"]').press('Tab');
    await page.locator('input[name="password"]').fill('admin');
    await page.getByRole('button', { name: 'Log In' }).click();                              // npx playwright screenshot -h veya --help // screenshot komutlarý
    await page.getByRole('link', { name: 'Transfer Funds' }).click(); //örnek komut= npx playwright screenshot https://www.youtube.com.tr yotube.png (internet sitesi - dosya adý)
    await page.locator('#amount').click();                                                   //(opsiyonel --full-page) (opsiyonel --device="iPhone 12") (--wait-for-timeout 5000)
    await page.locator('#amount').fill('500');
    await page.locator('#toAccountId').selectOption('16119');
    await page.getByRole('button', { name: 'Transfer' }).click();
    await page.getByRole('link', { name: 'Find Transactions' }).click();
    await page.getByRole('link', { name: 'Log Out' }).click();

})

test.skip('Checkbox Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes');                //kutucuk iþaretleme/iþareti kaldýrma testi//
    await page.locator('input[type="checkbox"]').first().check();
    await page.locator('input[type="checkbox"]').last().uncheck();



})

test.skip('Drag and Drop Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');            // tut-sürükle-býrak testi // 
    await page.dragAndDrop('#column-a', '#column-b');
    await page.pause();
    await page.dragAndDrop('#column-b', '#column-a');

})

test.skip('Drop-Down Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator('#dropdown').selectOption('1');                       //selectOption value'dýr., text rakamý anlamýnda deðil!! (<option value="1">Option 1</option>)
    await expect(page.locator('#dropdown')).toHaveValue('1');                // 2.NCÝ YOL LABEL VERÝRSÝN  await page.locator('#dropdown').selectOption({ label: 'Option 1'});
    await page.locator('#dropdown').selectOption({label: 'Option 2'});
    await expect(page.locator('#dropdown')).toHaveValue('2');

})

test.skip('iFrame Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');
    await page.getByRole('menuitem', { name: 'File' }).click();                  /// iframe yani yazý kutucuðunu doldurma testi 
    await page.getByText('New document').click();
    const frameTest = page.frameLocator('#mce_0_ifr').locator('html');
    await frameTest.click();
    await frameTest.type(' This is just a test typing in iframe');

})

test.skip('File Download Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download');          //Dosya indirme testi

    const [download] = await Promise.all([
        // Start waiting for the download
        page.waitForEvent('download'),
        // Perform the action that initiates download
        page.locator('text=text.txt').click(),
    ]);
    // Wait for the download process to complete
    console.log(await download.path());
    // Save downloaded file somewhere
    await download.saveAs('C:\\Users\\mertc\\Desktop\\Playwright Folder\\test3\\files\\text.txt');
    const url = download.url();
    console.log(url);

})

test.skip('File Upload Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.setInputFiles('#file-upload', 'C:\\Users\\mertc\\Desktop\\Playwright Folder\\test3\\files\\sample.pdf');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.locator('text=File Uploaded!')).toBeVisible();
    await expect(page.locator('text=sample.pdf')).toBeVisible();

    ///FILE CHOOSER YOLU ILE YAPMAYA ÇALIÞTIÐIMIZDA // Note that Promise.all prevents a race condition
                                                    // between clicking and waiting for the file chooser.
                                                    //const [fileChooser] = await Promise.all([
                                                    // It is important to call waitForEvent before click to set up waiting.
                                                    //page.waitForEvent('filechooser'),
                                                    //page.locator('upload').click(),
                                                    //]);
                                                    //await fileChooser.setFiles('myfile.pdf');

})

test.skip('Hover Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/hovers');          //Hover(Mouse'u üstüne getirdiðinde detaylarý açýlan) testi
    await page.hover('[alt="User Avatar"]');
    await expect(page.locator('text =name: user1')).toBeVisible();
    await page.getByRole('link', { name: 'View profile' }).click();


})

test('Key Press Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/key_presses');
    await page.press('#target', 'F1');                        //target týklanacak hedef - f1 basýlacak tuþ//

})





test.skip('Text Input ile neler yapýlýr', async ({ page }) => {

    // Text input
    await page.getByRole('textbox').fill('Peter');

    // Date input
    await page.getByLabel('Birth date').fill('2020-02-02');

    // Time input
    await page.getByLabel('Appointment time').fill('13:15');

    // Local datetime input
    await page.getByLabel('Local time').fill('2020-03-02T05:15');

    //Checkboxes and radio buttons
    // Check the checkbox
    await page.getByLabel('I agree to the terms above').check();

    // Assert the checked state
    expect(await page.getByLabel('Subscribe to newsletter').isChecked()).toBeTruthy()

    // Select the radio button
    await page.getByLabel('XL').check();

    //Select Options
    // Single selection matching the value
    await page.getByLabel('Choose a color').selectOption('blue');

    // Single selection matching the label
    await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });

    // Multiple selected items
    await page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);

    //Mouse Click
    // Generic click
    await page.getByRole('button').click();

    // Double click
    await page.getByText('Item').dblclick();

    // Right click
    await page.getByText('Item').click({ button: 'right' });

    // Shift + click
    await page.getByText('Item').click({ modifiers: ['Shift'] });

    // Hover over element
    await page.getByText('Item').hover();

    // Click the top left corner
    await page.getByText('Item').click({ position: { x: 0, y: 0 } });

    //Keys-ShortCuts
    // Hit Enter
    await page.getByText('Submit').press('Enter');

    // Dispatch Control+Right
    await page.getByRole('textbox').press('Control+ArrowRight');

    // Press $ sign on keyboard
    await page.getByRole('textbox').press('$');

})
