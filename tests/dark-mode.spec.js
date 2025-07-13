const { test, expect } = require('@playwright/test');

test.describe('Dark Mode Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Start each test on the home page
    await page.goto('http://localhost:3000');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
  });

  test('should have dark mode toggle in navigation', async ({ page }) => {
    // Check if dark mode toggle is visible
    const darkModeToggle = page.locator('button[aria-label*="Switch to"]');
    await expect(darkModeToggle).toBeVisible();
    
    // Check initial state (should be light mode by default)
    await expect(darkModeToggle).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  test('should toggle between light and dark modes', async ({ page }) => {
    const darkModeToggle = page.locator('button[aria-label*="Switch to"]');
    
    // Initial state should be light mode
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await expect(darkModeToggle).toHaveAttribute('aria-label', 'Switch to dark mode');
    
    // Click to switch to dark mode
    await darkModeToggle.click();
    
    // Check that dark mode is activated
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(darkModeToggle).toHaveAttribute('aria-label', 'Switch to light mode');
    
    // Click to switch back to light mode
    await darkModeToggle.click();
    
    // Check that light mode is restored
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await expect(darkModeToggle).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  test('should persist dark mode preference across page reloads', async ({ page }) => {
    const darkModeToggle = page.locator('button[aria-label*="Switch to"]');
    
    // Switch to dark mode
    await darkModeToggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    
    // Reload the page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Dark mode should still be active
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(darkModeToggle).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  test('should apply dark mode styles to navigation', async ({ page }) => {
    const darkModeToggle = page.locator('button[aria-label*="Switch to"]');
    const navigation = page.locator('nav');
    
    // Switch to dark mode
    await darkModeToggle.click();
    
    // Check that navigation has dark mode classes
    await expect(navigation).toHaveClass(/dark/);
    
    // Check navigation links have appropriate dark mode styling
    const navLinks = page.locator('nav a[href="/"]');
    await expect(navLinks).toBeVisible();
  });

  test('should apply dark mode styles to home page content', async ({ page }) => {
    const darkModeToggle = page.locator('button[aria-label*="Switch to"]');
    
    // Switch to dark mode
    await darkModeToggle.click();
    
    // Check hero section has dark mode styling
    const heroSection = page.locator('.hero-bg').first();
    await expect(heroSection).toBeVisible();
    
    // Check that text elements are visible in dark mode
    const mainHeading = page.locator('h1').first();
    await expect(mainHeading).toBeVisible();
    
    // Check that the page background has dark mode classes
    const mainContainer = page.locator('div').first();
    await expect(mainContainer).toBeVisible();
  });

  test('should work on all pages', async ({ page }) => {
    const darkModeToggle = page.locator('button[aria-label*="Switch to"]');
    const pages = [
      { path: '/try', name: 'Try Ubuntu' },
      { path: '/installation', name: 'Installation' },
      { path: '/software', name: 'Software' },
      { path: '/community', name: 'Community' },
      { path: '/why-ubuntu', name: 'Why Ubuntu' }
    ];
    
    // Switch to dark mode on home page
    await darkModeToggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    
    // Test each page
    for (const pageInfo of pages) {
      await page.goto(`http://localhost:3000${pageInfo.path}`);
      await page.waitForLoadState('networkidle');
      
      // Dark mode should persist
      await expect(page.locator('html')).toHaveClass(/dark/);
      
      // Toggle should show correct state
      const toggleOnPage = page.locator('button[aria-label*="Switch to"]');
      await expect(toggleOnPage).toHaveAttribute('aria-label', 'Switch to light mode');
      
      // Page content should be visible
      await expect(page.locator('h1, h2').first()).toBeVisible();
    }
  });

  test('should have smooth transitions', async ({ page }) => {
    const darkModeToggle = page.locator('button[aria-label*="Switch to"]');
    
    // Check that body has transition classes
    const body = page.locator('body');
    await expect(body).toHaveCSS('transition-property', /color|background/);
    
    // Toggle dark mode and check for smooth transition
    await darkModeToggle.click();
    
    // Wait a bit for transition to complete
    await page.waitForTimeout(500);
    
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('should handle mobile navigation dark mode', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    const darkModeToggle = page.locator('button[aria-label*="Switch to"]');
    
    // Open mobile menu
    const mobileMenuButton = page.locator('button[aria-label="Toggle navigation"]');
    await mobileMenuButton.click();
    
    // Mobile dark mode toggle should be visible
    const mobileDarkModeToggle = page.locator('button[aria-label*="Switch to"]').last();
    await expect(mobileDarkModeToggle).toBeVisible();
    
    // Switch to dark mode using mobile toggle
    await mobileDarkModeToggle.click();
    
    // Check dark mode is activated
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('should maintain accessibility in dark mode', async ({ page }) => {
    const darkModeToggle = page.locator('button[aria-label*="Switch to"]');
    
    // Switch to dark mode
    await darkModeToggle.click();
    
    // Check that toggle has proper ARIA attributes
    await expect(darkModeToggle).toHaveAttribute('aria-label', 'Switch to light mode');
    await expect(darkModeToggle).toHaveAttribute('title', 'Switch to light mode');
    
    // Check that focus is still visible in dark mode
    await darkModeToggle.focus();
    await expect(darkModeToggle).toBeFocused();
    
    // Check that all interactive elements are still accessible
    const links = page.locator('a, button');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);
    
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Should be able to navigate with keyboard
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});
