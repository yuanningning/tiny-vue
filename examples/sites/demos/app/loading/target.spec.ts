import { test, expect } from '@playwright/test'

test('区域加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/loading/target')
  const loading = page.locator('#boxeight > .tiny-loading')
  await expect(loading).toBeVisible()
})
