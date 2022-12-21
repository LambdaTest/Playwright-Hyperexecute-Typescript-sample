import { expect } from "@playwright/test";
import test from "../lambdatest-setup";

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await page.getByRole("link", { name: "Docs" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/intro");

  await page.getByRole("link", { name: "Writing Tests" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/writing-tests");

  await page.getByRole("link", { name: "Running Tests" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/running-tests");

  await page
    .locator(
      'li:has-text("Getting StartedInstallationWriting TestsRunning TestsTest GeneratorTrace ViewerC")'
    )
    .getByRole("link", { name: "Test Generator" })
    .click();
  await expect(page).toHaveURL("https://playwright.dev/docs/codegen-intro");

  await page
    .locator(
      'li:has-text("Getting StartedInstallationWriting TestsRunning TestsTest GeneratorTrace ViewerC")'
    )
    .getByRole("link", { name: "Trace Viewer" })
    .click();
  await expect(page).toHaveURL(
    "https://playwright.dev/docs/trace-viewer-intro"
  );

  await page.getByRole("link", { name: "CI GitHub Actions" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/ci-intro");

  await page.getByRole("link", { name: "Annotations" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-annotations");

  await page.getByRole("link", { name: "API testing" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-api-testing");

  await page.getByRole("link", { name: "Assertions" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-assertions");

  await page.getByRole("link", { name: "Command line" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-cli");

  await page.getByRole("link", { name: "Configuration" }).click();
  await expect(page).toHaveURL(
    "https://playwright.dev/docs/test-configuration"
  );

  await page.getByRole("link", { name: "Parallelism and sharding" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-parallel");

  await page.getByRole("link", { name: "Parametrize tests" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-parameterize");

  await page.getByRole("link", { name: "Reporters" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-reporters");

  await page.getByRole("link", { name: "Test retry" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-retries");

  await page.getByRole("link", { name: "Timeouts" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-timeouts");

  await page.getByRole("link", { name: "TypeScript" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-typescript");

  await page.getByRole("link", { name: "Visual comparisons" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-snapshots");

  await page.getByRole("link", { name: "Advanced: configuration" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-advanced");

  await page.getByRole("link", { name: "Advanced: fixtures" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-fixtures");

  await page.getByRole("link", { name: "Experimental: components" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/test-components");

  await page.getByRole("link", { name: "Library" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/library");

  await page.getByRole("link", { name: "Accessibility testing" }).click();
  await expect(page).toHaveURL(
    "https://playwright.dev/docs/accessibility-testing"
  );

  await page.getByRole("link", { name: "Actions" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/input");

  await page.getByRole("link", { name: "Authentication" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/auth");

  await page.getByRole("link", { name: "Auto-waiting" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/actionability");

  await page.getByRole("link", { name: "Browsers" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/browsers");

  await page.getByRole("link", { name: "Chrome Extensions" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/chrome-extensions");

  await page.getByRole("link", { name: "Command line tools" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/cli");

  await page
    .getByText(
      "LibraryAccessibility testingActionsAuthenticationAuto-waitingBrowsersChrome Exte"
    )
    .click();
  await expect(page).toHaveURL("https://playwright.dev/docs/debug");

  await page.getByRole("link", { name: "Dialogs" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/dialogs");

  await page.getByRole("link", { name: "Downloads" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/downloads");

  await page.getByRole("link", { name: "Emulation" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/emulation");

  await page.getByRole("link", { name: "Evaluating JavaScript" }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/evaluating");
});
