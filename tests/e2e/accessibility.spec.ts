import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
test('page has no serious accessibility violations and supports focus', async ({ page }) => { await page.goto('/'); const results = await new AxeBuilder({ page }).analyze(); expect(results.violations.filter((item) => ['serious', 'critical'].includes(item.impact ?? ''))).toEqual([]); await page.keyboard.press('Tab'); await expect(page.locator(':focus')).toBeVisible(); await expect(page.locator('h1')).toHaveCount(1); await expect(page.locator('main')).toHaveCount(1) })
