import styles from "@styles/docs/content.module.scss";

export const PageData: Record<ID, Content> = {
  "getting-started": {
    id: "getting-started",
    content: [
      { tag: "h2", data: { text: "first thing's first" } },
      {
        tag: "p",
        data: {
          text: "You do can install` wrapping letter in your projects with next comand line in your terminal",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              classToAdd: styles["simple-code"],
              wordToSearch: "install`",
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `$ npm install wrapping-letters-react`,
        },
      },
      {
        tag: "a",
        data: {
          anchor: {
            url: "https://ttager.page/",
            text: "Or do you can go to this link :3",
            target: "_blank",
          },
          options: {
            PerWord: true,
          },
        },
      },
      {
        tag: "h3",
        data: {
          text: "This is a greate example",
        },
      },
    ],
  },
  "best-pratice": {
    id: "best-pratice",
    content: [{ tag: "h2", data: { text: "Best Pratice" } }],
  },
};
