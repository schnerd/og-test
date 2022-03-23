import type { MetaFunction } from "remix";

import img from "../images/blue.png";

export const meta: MetaFunction = () => {
  return {
    title: "page A",
    description: "page A description",
    "og:image": img,
    "og:image:type": "image/png",
    "og:image:width": "424",
    "og:image:height": "372",
    "og:image:alt": "page A og-image alt",
    "og:title": "page A og-title",
    "og:description": "page A og-description",
    "twitter:card": "summary_large_image",
    "twitter:site": "openai",
    "twitter:title": "page A twitter-title",
    "twitter:description": "page A twitter-description",
    "twitter:image": img,
    "twitter:image:alt": "page A twitter-image alt",
  };
};

export default function A() {
    return <div>A</div>;
  }