import type { MetaFunction } from "remix";

import img from "../images/green.png";

export const meta: MetaFunction = () => {
  return {
    title: "page B",
    description: "page B description",
    "og:image": img,
    "og:image:type": "image/png",
    "og:image:width": "424",
    "og:image:height": "372",
    "og:image:alt": "page B og-image alt",
    "og:title": "page B og-title",
    "og:description": "page B og-description",
    "twitter:card": "summary_large_image",
    "twitter:site": "openai",
    "twitter:title": "page B twitter-title",
    "twitter:description": "page B twitter-description",
    "twitter:image": img,
    "twitter:image:alt": "page B twitter-image alt",
  };
};

export default function B() {
    return <div>B</div>;
  }