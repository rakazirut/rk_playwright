import { test, expect } from '@playwright/test';
import { login_elements, login_verbiage } from '../../support/login.js';

test.describe('Sauce Demo - Login Page Scenarios', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });
    
    test('Verify URL', async ({ page }) => {
        const url = page.url()
        expect(url).toContain('saucedemo')
    });

    test('Verify elements display', async ({ page }) => {
        await expect(page.locator(login_elements.user_field)).toBeVisible()
        await expect(page.locator(login_elements.pass_field)).toBeVisible()
        await expect(page.locator(login_elements.login_button)).toBeVisible()
        await expect(page.locator(login_elements.mascot_img)).toBeVisible()
        await expect(page.locator(login_elements.login_logo)).toBeVisible()
    });

    test('Verify username and password are requried for login',async ({ page }) => {
        await page.locator(login_elements.login_button).click()
        await expect(page.locator(login_elements.error_msg)).toBeVisible()
        await expect(page.locator(login_elements.error_msg)).toHaveText(login_verbiage.error_msg.username)
        await expect(page.locator(login_elements.user_field)).toHaveClass(/error/)
        await expect(page.locator(`${login_elements.user_field} + svg`)).toHaveAttribute('data-icon', 'times-circle')
        await expect(page.locator(login_elements.pass_field)).toHaveClass(/error/)
        await expect(page.locator(`${login_elements.pass_field} + svg`)).toHaveAttribute('data-icon', 'times-circle')
    });

    test('Verify password is requried for login',async ({ page }) => {
        await page.locator(login_elements.user_field).type(login_verbiage.usernames.standard)
        await page.locator(login_elements.login_button).click()
        await expect(page.locator(login_elements.error_msg)).toBeVisible()
        await expect(page.locator(login_elements.error_msg)).toHaveText(login_verbiage.error_msg.password)
        await expect(page.locator(login_elements.user_field)).toHaveClass(/error/)
        await expect(page.locator(`${login_elements.user_field} + svg`)).toHaveAttribute('data-icon', 'times-circle')
        await expect(page.locator(login_elements.pass_field)).toHaveClass(/error/)
        await expect(page.locator(`${login_elements.pass_field} + svg`)).toHaveAttribute('data-icon', 'times-circle')
    });

    test('Verify username is requried for login',async ({ page }) => {
        await page.locator(login_elements.pass_field).type(login_verbiage.password)
        await page.locator(login_elements.login_button).click()
        await expect(page.locator(login_elements.error_msg)).toBeVisible()
        await expect(page.locator(login_elements.error_msg)).toHaveText(login_verbiage.error_msg.username)
        await expect(page.locator(login_elements.user_field)).toHaveClass(/error/)
        await expect(page.locator(`${login_elements.user_field} + svg`)).toHaveAttribute('data-icon', 'times-circle')
        await expect(page.locator(login_elements.pass_field)).toHaveClass(/error/)
        await expect(page.locator(`${login_elements.pass_field} + svg`)).toHaveAttribute('data-icon', 'times-circle')
    });

    test('Verify incorrect username/password',async ({ page }) => {
        await page.locator(login_elements.user_field).type(login_verbiage.usernames.standard)
        await page.locator(login_elements.pass_field).type(login_verbiage.usernames.standard)
        await page.locator(login_elements.login_button).click()
        await expect(page.locator(login_elements.error_msg)).toBeVisible()
        await expect(page.locator(login_elements.error_msg)).toHaveText(login_verbiage.error_msg.wrongpass)
        await expect(page.locator(login_elements.user_field)).toHaveClass(/error/)
        await expect(page.locator(`${login_elements.user_field} + svg`)).toHaveAttribute('data-icon', 'times-circle')
        await expect(page.locator(login_elements.pass_field)).toHaveClass(/error/)
        await expect(page.locator(`${login_elements.pass_field} + svg`)).toHaveAttribute('data-icon', 'times-circle')
    });

    test('Verify locked user login',async ({ page }) => {
        await page.locator(login_elements.user_field).type(login_verbiage.usernames.locked)
        await page.locator(login_elements.pass_field).type(login_verbiage.password)
        await page.locator(login_elements.login_button).click()
        await expect(page.locator(login_elements.error_msg)).toBeVisible()
        await expect(page.locator(login_elements.error_msg)).toHaveText(login_verbiage.error_msg.locked)
        await expect(page.locator(login_elements.user_field)).toHaveClass(/error/)
        await expect(page.locator(`${login_elements.user_field} + svg`)).toHaveAttribute('data-icon', 'times-circle')
        await expect(page.locator(login_elements.pass_field)).toHaveClass(/error/)
        await expect(page.locator(`${login_elements.pass_field} + svg`)).toHaveAttribute('data-icon', 'times-circle')
    });

    test('Verify problem user login',async ({ page }) => {
        await page.locator(login_elements.user_field).type(login_verbiage.usernames.problem)
        await page.locator(login_elements.pass_field).type(login_verbiage.password)
        await page.locator(login_elements.login_button).click()
        const url = page.url()
        expect(url).toContain('inventory')
    });

    test('Verify standard user login',async ({ page }) => {
        await page.locator(login_elements.user_field).type(login_verbiage.usernames.standard)
        await page.locator(login_elements.pass_field).type(login_verbiage.password)
        await page.locator(login_elements.login_button).click()
        const url = page.url()
        expect(url).toContain('inventory')
    });
});