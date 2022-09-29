import { ID, WL } from "@common/type";

type Content = {
  id: string;
  content: {
    tag: "h2" | "a" | "p" | "img" | "h3" | "note" | "code";
    text: string;
    wlProps?: WL;
  }[];
};

export const PageData: Record<ID, Content> = {
  "getting-started": {
    id: "getting-started",
    content: [
      { tag: "h2", text: "first thing's first" },
      {
        tag: "p",
        text: "You do can install wrapping letter in your projects with next comand line in your terminal",
      },
    ],
  },
};
