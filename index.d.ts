type ID = string;

type SpecialArray = string | string[];

type WL = {
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

type PageContent = {
  id: ID;
  title: string;
  description: string;
};

type Content = {
  id: string;
  content: {
    tag: "h2" | "a" | "p" | "img" | "h3" | "note" | "code";
    text: string;
    wlProps?: WL;
  }[];
};
