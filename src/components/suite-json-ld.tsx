import {
  SITE_URL,
  SITE_NAME,
  ORG_NAME,
  absoluteUrl,
  suiteProducts,
} from "@/lib/seo";

export function SuiteJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: ORG_NAME,
        url: SITE_URL,
        email: "support@skylandapps.com",
        brand: { "@type": "Brand", name: SITE_NAME },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "Zero-install, browser-native tools from Skyland Reach for work, teams, and everyday life.",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#suite`,
        name: SITE_NAME,
        numberOfItems: suiteProducts.length,
        itemListElement: suiteProducts.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: product.name,
            url: absoluteUrl(product.path),
            description: product.description,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web browser",
            ...(product.sameAs ? { sameAs: product.sameAs } : {}),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
