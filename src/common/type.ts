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
  url: string;
  title: string;
  description: string;
};
