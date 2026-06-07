import { useEffect } from "react";
import { seoConfig } from "../config/seo";

export function useSEO(title?: string, description?: string) {
  useEffect(() => {
    const currentTitle = title ? `${title} | Harbesh Sethia` : seoConfig.title;
    const currentDesc = description || seoConfig.description;

    // Set page title
    document.title = currentTitle;

    // Helper to query and update or create meta tags
    const updateMetaTag = (attr: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update standard meta
    updateMetaTag("name", "description", currentDesc);
    updateMetaTag("name", "keywords", seoConfig.keywords);
    updateMetaTag("name", "robots", seoConfig.robots);

    // Update Open Graph
    updateMetaTag("property", "og:title", currentTitle);
    updateMetaTag("property", "og:description", currentDesc);
    updateMetaTag("property", "og:image", seoConfig.openGraph.image);
    updateMetaTag("property", "og:url", window.location.href);

    // Update Twitter Cards
    updateMetaTag("name", "twitter:title", currentTitle);
    updateMetaTag("name", "twitter:description", currentDesc);
    updateMetaTag("name", "twitter:image", seoConfig.twitter.image);
    updateMetaTag("name", "twitter:card", seoConfig.twitter.card);

  }, [title, description]);
}
