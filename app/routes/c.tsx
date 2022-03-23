import type { MetaFunction } from "remix";

import img from "../images/red.png";

export const meta: MetaFunction = () => {
  return {
    title: "page C",
    description: "C h̷̨̢̩̭̘͖͎̲̰̘͎̥̑͛̽̃̈́̀̔͂̏͐̍̕͘͝ͅě̸͓̽̊́̄̇́̀͂̈́̃̈́̚͝ļ̷̢͖̲̱͓̣̯̕ļ̴̫̬̘̣̹̯͚̗̝̩̥́̄͆̎̾̓͊̇̓͘͝ơ̸͎̥̱̮̲̬̪͇͙̪̫̜̤͑̆̉̓̌͛̊͋͂̒̓͋̚͝ͅ  👍 漢字",
    "og:image": img,
    "og:image:type": "image/png",
    "og:image:width": "1024",
    "og:image:height": "1024",
    "og:image:alt": "page C og-image alt",
    "og:title": "page C og-title",
    "og:description": "page C og-description",
    "twitter:card": "summary_large_image",
    "twitter:site": "openai",
    "twitter:title": "page C twitter-title",
    "twitter:description": "page C twitter-description",
    "twitter:image": img,
    "twitter:image:alt": "page C twitter-image alt",
  };
};

export default function C() {
    return <div>C</div>;
  }