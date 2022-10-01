export type ID = string;

export type SpecialArray = string | string[];

export type WL = {
  ClassToAdd?: string;
  SelectClass?: {
    wordToSearch: SpecialArray;
    classToAdd: SpecialArray;
    spaceBeetwenWord: boolean;
  };
  SpecialWrapp: {
    wordToSearch: SpecialArray;
    strucutureToAdd: SpecialArray;
  };
  PerWord: boolean;
  strucuture: Function;
};

export type PageContent = {
  id: ID;
  title: string;
  description: string;
};

export type Content = {
  id: string;
  content: {
    tag: "h2" | "a" | "p" | "img" | "h3" | "note" | "code";
    text: string;
    wlProps?: WL;
  }[];
};
