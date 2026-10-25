import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL, URL } from "node:url";

const outputDirectory = resolve("dist");
const serverEntry = resolve(outputDirectory, "server", "entry-server.js");
const { portfolioConfig, renderApp } = await import(
  pathToFileURL(serverEntry).href
);
const indexPath = resolve(outputDirectory, "index.html");
let indexHtml = await readFile(indexPath, "utf8");
const rootPattern = /<div id="root"><\/div>/;

if (!rootPattern.test(indexHtml)) {
  throw new Error(`Could not find the root mount element in ${indexPath}`);
}

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function replaceMeta(html, key, value) {
  const metaPattern = new RegExp(
    `(<meta\\s+(?:name|property)="${key}"\\s+content=")[^"]*(")`,
  );
  return html.replace(metaPattern, `$1${escapeAttribute(value)}$2`);
}

const previewImageUrl = new URL(
  portfolioConfig.socialPreviewImage,
  portfolioConfig.canonicalUrl,
).href;

indexHtml = indexHtml.replace(
  /<title>[\s\S]*?<\/title>/,
  `<title>${escapeAttribute(portfolioConfig.pageTitle)}</title>`,
);
indexHtml = indexHtml.replace(
  /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
  `$1${escapeAttribute(portfolioConfig.canonicalUrl)}$2`,
);
indexHtml = replaceMeta(
  indexHtml,
  "description",
  portfolioConfig.pageDescription,
);
indexHtml = replaceMeta(indexHtml, "theme-color", portfolioConfig.themeColor);
indexHtml = replaceMeta(indexHtml, "og:site_name", portfolioConfig.name);
indexHtml = replaceMeta(indexHtml, "og:title", portfolioConfig.pageTitle);
indexHtml = replaceMeta(indexHtml, "og:description", portfolioConfig.pageDescription);
indexHtml = replaceMeta(indexHtml, "og:url", portfolioConfig.canonicalUrl);
indexHtml = replaceMeta(indexHtml, "og:image", previewImageUrl);
indexHtml = replaceMeta(
  indexHtml,
  "og:image:alt",
  portfolioConfig.socialPreviewAlt,
);
indexHtml = replaceMeta(indexHtml, "twitter:title", portfolioConfig.pageTitle);
indexHtml = replaceMeta(
  indexHtml,
  "twitter:description",
  portfolioConfig.pageDescription,
);
indexHtml = replaceMeta(indexHtml, "twitter:image", previewImageUrl);
indexHtml = indexHtml.replace(
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
  `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioConfig.name,
    jobTitle: portfolioConfig.role,
    url: portfolioConfig.canonicalUrl,
    email: portfolioConfig.email,
    sameAs: Object.values(portfolioConfig.socialLinks),
    address: {
      "@type": "PostalAddress",
      addressLocality: portfolioConfig.address.locality,
      addressRegion: portfolioConfig.address.region,
      addressCountry: portfolioConfig.address.country,
    },
  })}</script>`,
);

const renderedHtml = indexHtml.replace(
  rootPattern,
  (rootElement) => rootElement.replace("</div>", `${renderApp()}</div>`),
);

await writeFile(indexPath, renderedHtml);
