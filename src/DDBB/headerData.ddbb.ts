import { ID } from "@common/type";

type PageContent = {
  id: ID;
  title: string;
  description: string;
};

export const Data: Record<ID, PageContent> = {
  "0000": {
    id: "0000",
    title: "Getting Started",
    description: "Here you'll learn how to use Wrapping Letters",
  },
};
