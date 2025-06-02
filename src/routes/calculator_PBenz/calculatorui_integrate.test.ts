import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
    await page.goto('/calculator_PBenz');
    await expect(page.locator('h1')).toBeVisible();
});

test('1 + 1 = 2', async ({ page }) => {
    await page.goto('/calculator_PBenz');
    const button_1 =  page.getByRole('button', { name: '1' });
    await button_1.click();

    await expect(page.locator('[data-testid="display"]')).toHaveText('1');

    await page.getByRole('button', { name: '+' }).click();
    await expect(page.locator('[data-testid="display"]')).toHaveText('1+');

    await button_1.click();
    await expect(page.locator('[data-testid="display"]')).toHaveText('1+1');

    await page.getByRole('button', { name: '=' }).click();
    await expect(page.locator('[data-testid="display"]')).toHaveText('2');
});
