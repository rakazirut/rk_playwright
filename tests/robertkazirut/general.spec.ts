import { test, expect } from '@playwright/test';

test.describe('Personal Website Testing - General Scenario', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://robertkazirut.com');
    });
    
    test('Verify URL', async ({ page }) => {
        const url = page.url()
        expect(url).toContain('robertkazirut')
    });

    test('Verify images display', async ({ page }) => {
        await expect(page.locator('.custom-logo')).toBeVisible()
        await expect(page.locator('.custom-logo-link')).toHaveAttribute('href', 'https://robertkazirut.com/')
        await expect(page.locator('.social-icons__icon').first()).toBeVisible()
        await expect(page.locator('.social-icons__icon').first()).toHaveAttribute('href', 'https://www.linkedin.com/in/robert-kazirut/')
        await expect(page.locator('.social-icons__icon').last()).toBeVisible()
        await expect(page.locator('.social-icons__icon').last()).toHaveAttribute('href', 'https://github.com/rakazirut/')
    });
});