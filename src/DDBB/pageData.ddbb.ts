import styles from "@styles/docs/content.module.scss";

export const PageData: Record<ID, Content> = {
  "getting-started": {
    id: "getting-started",
    content: [
      { tag: "h2", data: { text: "first thing's first" } },
      {
        tag: "p",
        data: {
          text: "You do can install` Wrapping letters in your projects with the next command lines",
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
        tag: "code",
        data: {
          text: `$ yarn add wrapping-letters-react`,
        },
      },
      {
        tag: "h2",
        data: {
          text: "Initialization",
          options: {
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "To use the component just do you need import` the its in add on your components",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "import`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `import Wl from "wrapping-letters-react"
          
export default function MyComponentWithWl() {
  return <Wl />
}`,
        },
      },
      {
        tag: "p",
        data: {
          text: "Wrapping Letters has a default return is: Hello World!!! <3; You do can test with this text the options has the component",
        },
      },
      {
        tag: "code",
        data: {
          text: `// default return

<span>H</span>
<span>e</span>
<span>l</span>
<span>l</span>
<span>o</span>
//...`,
        },
      },
      {
        tag: "p",
        data: {
          text: "With this basic knowlets now do you can start to use Wrapping Letter, go to the next doc to know more the libra  ry",
        },
      },
    ],
  },
  "best-pratice": {
    id: "best-pratice",
    content: [{ tag: "h2", data: { text: "Best Pratice" } }],
  },
};
