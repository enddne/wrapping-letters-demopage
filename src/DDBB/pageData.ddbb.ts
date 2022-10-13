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
      // {
      //   tag: "code",
      //   data: {
      //     text: `$ yarn add wrapping-letters-react`,
      //   },
      // },
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
          text: 'Wrapping Letters has a default return is: "Hello World!!! <3", You do can test with this text the options has the component',
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ['"Hello World!!! <3"'],
              classToAdd: styles.italic,
            },
          },
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
          text: "With this basic knowlets now do you can start to use Wrapping Letter, go to the next doc to know more the library!",
          options: {
            ClassToAdd: `${styles.text} ${styles.italic}`,
          },
        },
      },
    ],
  },
  // "best-pratice": {
  //   id: "best-pratice",
  //   content: [{ tag: "h2", data: { text: "Best Pratice" } }],
  // },
  text: {
    id: "text",
    content: [
      {
        tag: "p",
        data: {
          text: "The prop text only can receive objects of type string, no matter how make the string",
        },
      },
      {
        tag: "code",
        data: {
          text: `<Wl text={new String("example string")} />

<Wl text="example string" />

<Wl text={data.title} />
`,
        },
      },
      {
        tag: "h2",
        data: {
          text: "Error when you don't send a string on text",
        },
      },
      {
        tag: "p",
        data: {
          text: `The code will eject a  Error\` but if you dont send nothing, the code will return a default string: Hello World!!! <3`,
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["Hello", "Error`", "World!!!", "<3", "string"],
              classToAdd: [styles["italic"], styles["simple-code"]],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "This is the error will eject WL when you don't send a string`",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "string`",
              classToAdd: `${styles["italic"]} ${styles["simple-code"]}`,
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: "[Error] Error: text must be a string --- WrappingLetters (index.js:82)...",
        },
      },
    ],
  },
  textOptions: {
    id: "textOptions",
    content: [
      {
        tag: "p",
        data: {
          text: 'textOptions` is the "main" prop, here you can create your customization for your text',
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "textOptions`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "textOptions` can only receive one object for now",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "textOptions`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `<WL text="your text" textOptions={{}}/>`,
        },
      },
      {
        tag: "note",
        data: {
          text: "if you put an empty object` on the prop, the component will return the elements with the default textOptions` configuration",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["object`", "textOptions`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "note",
        data: {
          text: "textOptions` will send the same error of text if you don't send an object`",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["object`", "textOptions`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
    ],
  },
  ClassToAdd: {
    id: "ClassToAdd",
    content: [
      {
        tag: "note",
        data: {
          text: "ClassToAdd` is an attribute of textOptions`",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["ClassToAdd`", "textOptions`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: 'The attribute ClassToAdd` is the "default" class to add to each element, their default value is an empty string` and its only can receive one string`',
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["ClassToAdd`", "string`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `<WL 
  text="custom text"
  textOptions={{ ClassToAdd: "common-class", }}
/>`,
        },
      },
      {
        tag: "p",
        data: {
          text: "If do you want put more classes, you can use the => `` <= is simple, let's take a look the next example",
        },
      },
      {
        tag: "code",
        data: {
          text: `<WL 
  text="custom text"
  textOptions={{ 
    ClassToAdd: \`common-class \${yourObject.attribute || yourVar}\`, 
  }}
/>`,
        },
      },
      {
        tag: "note",
        data: {
          text: "if you don't send a string` the component will return the same error of text`",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["text`", "string`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
    ],
  },
};
