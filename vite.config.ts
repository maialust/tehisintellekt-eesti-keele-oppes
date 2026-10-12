import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL, facilitator, seo, workshop } from "./src/data/workshop.ts";

/**
 * GitHub Pages avaldab lehe aadressil https://<kasutaja>.github.io/<repo>/.
 * GitHub Actions annab õige alamkausta muutujas BASE_PATH (vt .github/workflows/deploy.yml).
 * Kohalikul arendamisel kasutatakse juurkausta "/".
 */
const rawBase = process.env.BASE_PATH ?? "/";
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** "28.11.2026" + "15:00" → "2026-11-28T15:00:00+02:00" (Tallinn, talveaeg) */
const iso = (date: string, time: string) => {
  const [d, m, y] = date.split(".");
  return `${y}-${m}-${d}T${time}:00+02:00`;
};

/** Loob SEO- ja Open Graph metaandmed failist src/data/workshop.ts */
function seoPlugin(): Plugin {
  return {
    name: "workshop-seo",
    transformIndexHtml(html) {
      const siteUrl = SITE_URL.trim().replace(/\/?$/, "/");
      const hasSite = /^https?:\/\//.test(SITE_URL.trim());
      const ogImage = hasSite ? `${siteUrl}og-image.png` : `${base}og-image.png`;

      const jsonLd: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Event",
        name: workshop.name,
        description: seo.description,
        inLanguage: "et",
        startDate: iso(workshop.date, workshop.start),
        endDate: iso(workshop.date, workshop.end),
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: workshop.venue,
          address: { "@type": "PostalAddress", streetAddress: "Toompuiestee 27 / Paldiski mnt 4", postalCode: "10149", addressLocality: "Tallinn", addressCountry: "EE" },
        },
        organizer: { "@type": "Organization", name: workshop.organizer },
        performer: { "@type": "Person", name: facilitator.name },
        superEvent: { "@type": "Event", name: workshop.event },
        // Hinda (offers) ei lisata, sest see info puudub.
      };
      if (hasSite) jsonLd.url = siteUrl;

      const tags = [
        `<title>${esc(seo.title)}</title>`,
        `<meta name="description" content="${esc(seo.description)}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:locale" content="et_EE" />`,
        `<meta property="og:site_name" content="${esc(workshop.organizer)}" />`,
        `<meta property="og:title" content="${esc(seo.ogTitle)}" />`,
        `<meta property="og:description" content="${esc(seo.ogDescription)}" />`,
        `<meta property="og:image" content="${esc(ogImage)}" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:alt" content="${esc(workshop.name)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        hasSite ? `<meta property="og:url" content="${esc(siteUrl)}" />` : "",
        hasSite ? `<link rel="canonical" href="${esc(siteUrl)}" />` : "",
        `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`,
      ]
        .filter(Boolean)
        .join("\n    ");

      return html.replace("<!-- SEO -->", tags);
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), seoPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        notFound: "404.html",
      },
    },
  },
});
