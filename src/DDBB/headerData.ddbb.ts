export const Data: Record<ID, Record<ID, PageContent>> = {
  "Getting started": {
    "getting-started": {
      id: "getting-started",
      title: "Getting Started",
      description: `Wrapping Letters can you help in your animation in your projects on React, with a simple syntaxis to to reduce your code considerably!

What are you waiting? start now :D`,
    },
    // "best-pratice": {
    //   id: "best-pratice",
    //   title: "Best Pratice",
    //   description: "Here you'll learn how to use Wrapping Letters",
    // },
  },
  "Component Syntaxis": {
    text: {
      id: "text",
      title: "text<string | string[]>",
      description:
        "The most important prop in at component, If do you want work with WL(Wrapping Letters), You do need know how work the prop: text",
    },
    textOptions: {
      id: "textOptions",
      title: "textOptions<object>",
      description:
        "If do you want make a customization your text, you need the prop textOptions for this job",
    },
    ClassToAdd: {
      id: "ClassToAdd",
      title: "ClassToAdd<string>",
      description:
        "Set a default class on your elements with ClassToAdd, each element will receive the class that your put here",
    },
    SelectClass: {
      id: "SelectClass",
      title: "SelectClass<object>",
      description:
        "SelectClass is a object it can a search a word, phrase or letters in the sentence to make customizations in your text",
    },
  },
};
