import { ID } from "@common/type";

type PageContent = {
  id: ID;
  url: string;
  title: string;
  description: string;
};

export const Data: Record<ID, PageContent> = {
  "0000": {
    id: "0000",
    url: "getting_started",
    title: "Getting Started",
    description: "Here you'll learn how to use Wrapping Letters",
  },
};
