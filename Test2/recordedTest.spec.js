const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.locator('svg').first().click();
    await page.getByText('Text Box').click();
    await page.getByPlaceholder('Full Name').click();
    await page.getByPlaceholder('Full Name').fill('test');
    await page.getByPlaceholder('name@example.com').click();
    await page.getByPlaceholder('name@example.com').fill('test@email.com');
    await page.getByPlaceholder('Current Address').click();
    await page.getByPlaceholder('Current Address').fill('test');
    await page.locator('#permanentAddress').click();
    await page.locator('#permanentAddress').fill('test');
    await page.getByRole('button', { name: 'Submit' }).click();
});