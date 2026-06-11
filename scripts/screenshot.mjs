// Capture full-page screenshots of every route at desktop and mobile widths.
// Usage: node scripts/screenshot.mjs [baseUrl] [outDir]
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const baseUrl = process.argv[2] ?? "http://localhost:3000";
const outDir = process.argv[3] ?? "/tmp/di-screenshots";

const routes = [
  ["home", "/"],
  ["services", "/services"],
  ["svc-operations-automation", "/services/operations-automation"],
  ["svc-data-systems", "/services/data-systems"],
  ["svc-automation-platform", "/services/automation-platform"],
  ["svc-inventory", "/services/inventory"],
  ["svc-pricing", "/services/pricing"],
  ["ownership", "/ownership"],
  ["approach", "/approach"],
  ["about", "/about"],
  ["insights", "/insights"],
  ["post-ownership-question", "/insights/the-ownership-question"],
  ["post-automation-money", "/insights/automation-should-not-spend-money"],
  ["post-catalog-pricing", "/insights/the-95-percent-of-your-catalog"],
  ["contact", "/contact"],
  ["not-found", "/this-page-does-not-exist"],
];

const viewports = [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", { width: 390, height: 844 }],
];

mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();

for (const [vpName, viewport] of viewports) {
  const context = await browser.newContext({
    viewport,
    reducedMotion: "reduce",
    deviceScaleFactor: vpName === "mobile" ? 2 : 1,
  });
  const page = await context.newPage();
  for (const [name, route] of routes) {
    try {
      await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(400);
      await page.screenshot({
        path: `${outDir}/${name}--${vpName}.png`,
        fullPage: true,
      });
      console.log(`ok ${name} ${vpName}`);
    } catch (err) {
      console.error(`FAIL ${name} ${vpName}: ${err.message}`);
    }
  }
  await context.close();
}

await browser.close();
console.log(`done -> ${outDir}`);
