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
        tag: "p",
        data: {
          text: "You do can install wrapping letter in your projects with next comand line in your terminal",
        },
      },
    ],
  },
  "best-pratice": {
    id: "best-pratice",
    content: [{ tag: "h2", data: { text: "Best Pratice" } }],
  },
};
