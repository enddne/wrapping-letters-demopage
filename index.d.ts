type ID = string;

type SpecialArray = string | string[];

type Tags = "h2" | "a" | "p" | "img" | "h3" | "note" | "code";

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
  strucuture: function;
};

type PageContent = {
  id: ID;
  title: string;
  description: string;
};

type Content = {
  id: string;
  content: {
    tag: Tags;
    text: string;
    wlProps?: WL;
  }[];
};

type DataContentComponent =
  | string
  | { url: string; text: string }
  | { src: string; alt: string; target: "_blank" | "" };

type PropsContentComponent = { data: DataContentComponent; options: WL };

type ContentTextComponent = (props: PropsContentComponent) => JSX.Element;
