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

type PropsContentComponent = Record<
  "data",
  {
    text?: string;
    anchor?: { url: string; text: string; target: "_blank" | "" };
    image?: { src: string; alt: string };

    options?: WL;
  }
>;

type ContentTextComponent = (props: PropsContentComponent) => JSX.Element;
