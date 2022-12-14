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
  SelectClass: {
    id: "SelectClass",
    content: [
      {
        tag: "a",
        data: {
          anchor: {
            url: `https://${process.env.URL}/docs/specialArray/`,
            text: "In this page you will see a new topic [special Array], click the link to go the documentation page",
            target: "_blank",
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "SelectClass has three attributes to work your text: wordToSearch` classToAdd` and spaceBetweenWord`",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: [
                "wordToSearch`",
                "classToAdd`",
                "spaceBetweenWord`",
              ],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: 'wordToSearch<string>` is the word to search for, but you can search for more word with an [specialArray]` these Arrays are called "special array"',
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: [
                "wordToSearch<string>`",
                '"special',
                'array"',
                "[specialArray]`",
              ],
              classToAdd: [styles["simple-code"], styles.italic, styles.italic],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "classToAdd<string>` is the class to add at element, You can add more classes with an [specialArray]`",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: [
                "classToAdd<string>`",
                "element,",
                "[specialArray]`",
              ],
              classToAdd: [styles["simple-code"], styles.italic],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "spaceBetweenWord<bolean>` is the a conditional for the search (default is false)",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "spaceBetweenWord<bolean>`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: 'For example, wordToSearch` has the word "example" but the algorithm can search for a word within other words and also being alone, spaceBetweenWord` in true only allows searching for the word alone, in false searches everywhere',
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["spaceBetweenWord`", '"ping"', "wordToSearch`"],
              classToAdd: [styles["simple-code"], styles.italic],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `text="this is an example, thisisanexample"

textOptions={{
  "SelectClass": {
    wordToSearch: "example",
    classToAdd: "class",
    spaceBetweenWord: false,
  }
}}`,
        },
      },
      {
        tag: "p",
        data: {
          text: "this is the return",
        },
      },
      {
        tag: "code",
        data: {
          text: `<span> </span>
<span class="class">e</span>
<span class="class">x</span>
<span class="class">a</span>
<span class="class">m</span>
//..

<span>a</span>
<span>n</span>
<span class="class">e</span>
<span class="class">x</span>
<span class="class">a</span>
<span class="class">m</span>`,
        },
      },
      {
        tag: "note",
        data: {
          text: "SelectClass` look for all the times the word is repeated, spaceBetweenWord` is important for avoiding problems",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["SelectClass`", "spaceBetweenWord`"],
              classToAdd: [styles["simple-code"]],
            },
            PerWord: true,
          },
        },
      },
    ],
  },
  PerWord: {
    id: "PerWord",
    content: [
      {
        tag: "p",
        data: {
          text: "Sometimes we need to separate word by word for animation, styles, labels, etc. The PerWord attribute separates each element with a word thanks to the white spaces in its text",
        },
      },
      {
        tag: "p",
        data: {
          text: "Here is an example of how it can be used",
        },
      },
      {
        tag: "code",
        data: {
          text: `<WrappingLetters
  text="Carlos is a good person, but Carlos is a bad person"
  textOptions={{
    ClassToAdd: "class",
    SelectClass: {
      wordToSearch: "Carlos",
      classToAdd: "special-class",
    },
    PerWord: true,
  }}
/>`,
        },
      },
      {
        tag: "p",
        data: {
          text: "the return is:",
        },
      },
      {
        tag: "code",
        data: {
          text: `<span class="class special-class">Carlos </span>
<span class="class">is </span>
<span class="class">a </span>
<span class="class">good </span>
<span class="class">person, </span>
//...`,
        },
      },
      {
        tag: "note",
        data: {
          text: `
When PerWord is true, spaceBetweenWord\` always is disabled. wordToSearch\` must be a single word, spaces break the search.

THE CODE SEARCH EACH WORD BY THE SPACE HAS BETWEEN EACH WORD`,
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["spaceBetweenWord`", "wordToSearch`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
    ],
  },
  SpecialWrapp: {
    id: "SpecialWrapp",
    content: [
      {
        tag: "a",
        data: {
          anchor: {
            url: `https://${process.env.URL}/docs/specialArray/`,
            text: "This attribute has support with [special Array] click the link to go its docs",
            target: "_blank",
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "This attribute has the same functionality of SelectClass` are very similar. The atribute will find the words in the text for to add a specialWrapp",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "SelectClass`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `<Wl
  text="This is a short sentence"
  textOptions={{
      SpecialWrapp: {
          wordToSearch: ["short", "is", "This"],
          structureToAdd: [specialTag, specialTag1],
          spaceBetweenWord: false,
      },
  }}
/>`,
        },
      },
      {
        tag: "note",
        data: {
          text: "SpecialWrapp` has support with [special Array]",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "SpecialWrapp`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "The components on structureToAdd` will revice 2 props: letter` and cssClass`",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["letter`", "structureToAdd`", "cssClass`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "letter` is the text to wrap, this prop content depend of PerWord",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["letter`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "cssClass` is the the custom class from SelectClass` if the text has a same match with SelectClass` this cssClass` will recive the class of this match",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["cssClass`", "SelectClass`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "Here an example of an component to the wrap",
        },
      },
      {
        tag: "code",
        data: {
          text: `function specialTag({ letter, cssClass }) {
  return (
    <div className={\`example-class \${cssClass}\`}>
      <a
        className={\`another example-class\`}
        href="//..."
      >
        {letter}
      </a>
    </div>
  )
}`,
        },
      },
      {
        tag: "note",
        data: {
          text: "!IMPORTANT The component has priority in the SelectClass` for example:",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "SelectClass`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "You have this code:",
        },
      },
      {
        tag: "code",
        data: {
          text: `text="This is an apple ???? :3"

textOptions={{
  SelectClass: {
    wordToSearch: ["a", "apple"],
    classToAdd: "class"
  },
  SpecialWrapp: {
    wordToSearch: "an",
    structureToAdd: specialWrapp
  }
}}`,
        },
      },
      {
        tag: "p",
        data: {
          text: "This is the return:",
        },
      },
      {
        tag: "code",
        data: {
          text: `//...
<span>i</span>
<span>s</span>
<span> </span>
<span class="class">a</span>
<span class="">n</span>
//...`,
        },
      },
      {
        tag: "p",
        data: {
          text: 'The code first will iterate the SelectClass` after the SpecialWrapp` The code sintaxis will work with the letter and then remove it, In this example the next letter is "n" so no SpecialWrapp is added',
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["SelectClass`", "SpecialWrapp`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "To avoid this priority you can use spaceBetweenWord: true, the code will check if the wordToSerch from SelectClass` is between white-space",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["SelectClass`", "SpecialWrapp`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "a",
        data: {
          anchor: {
            url: "",
            text: `SpecialWrapp is available with the feature {props}, click this link to go the documentation page if you want know more about the feature`,
            target: "_blank",
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "It's very easy, you just need to change the function to an object` with the following attributes: structureToAdd` and props`",
          options: {
            ClassToAdd: `${styles.text}`,
            SelectClass: {
              wordToSearch: ["object`", "structureToAdd`", "props`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `SpecialWrapp: {
  wordToSearch: ["Text", "example"],
  structureToAdd: {
    structureToAdd: yourCustomComponent,
    props: {
      // your customs props
    }
  }
}`,
          options: {
            ClassToAdd: `${styles.text}`,
            SelectClass: {
              wordToSearch: ["object`", "structureToAdd`", "props`"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
    ],
  },
  structure: {
    id: "structure",
    content: [
      {
        tag: "p",
        data: {
          text: "It is simple to use, this accessory only receives one function/component, let's take a look the example",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "structure`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `function App(){
  return(
    <WrappingLetters
      text='This is the sentence to wrapped'
      textOptions={{
        SelectClass: {
            wordToSearch: 'sentence',
            ClassToAdd: 'specialClass',
            spaceBeetwenWord: true,,
        },
      }}
      structure={ReactComponent}
    />
  )
}`,
        },
      },
      {
        tag: "p",
        data: {
          text: "structure` is a prop that modify the wrapper for more flexibility to do animations or whatever you can think of.",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "structure`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `function ReactComponent({ letter, cssClass }) {
  return (
    <div className={\`container-letter \${cssClass}\`}>
      <span className="letter-wrapp">{letter}</span>
    </div>
  );
}`,
        },
      },
      {
        tag: "p",
        data: {
          text: "Well get this problem, Do you have a struture` in your component, but how do You can put the SpecialWrapp` ? well is simple.",
        },
      },
      {
        tag: "p",
        data: {
          text: "The component on structure receives a prop called specialWrapp`, lets take a look the next example to how use the prop:",
        },
      },
      {
        tag: "p",
        data: {
          text: 'Now your custom structure will receive the prop specialWrapp` With this prop do you can comprobate if the text has a "specialWrapp"',
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["specialWrapp`", '"specialWrapp"'],
              classToAdd: [styles["simple-code"], styles.italic],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `function customStrucuture({ letter, cssClass, specialWrapp }) {
  // specialWrapp is an object with this attribute.
  const { hasCustomWrapp, NewWrappStructure } = specialWrapp;
    
  return //...
}`,
        },
      },
      {
        tag: "p",
        data: {
          text: 'here will declare the components to the comprobation the "Default" component, when the hasCustomWrapp` is false this is will returned',
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["hasCustomWrapp`", '"Default"'],
              classToAdd: [styles["simple-code"], styles.italic],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `const Default = ({ letter, cssClass }) => (
  <div className="container">
    <span className={cssClass}>{letter}</span>
  </div>
);`,
        },
      },
      {
        tag: "p",
        data: {
          text: "When hasCustomWrapp` is true this is the return NewWrappStructure` will pass to be the custom wrapp",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: [
                "NewWrappStructure`",
                "custom",
                "wrapp",
                "hasCustomWrapp`",
              ],
              classToAdd: [styles["simple-code"], styles.italic, styles.italic],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `const CustomComponent = ({ letter, cssClass }) => (
  <div className="container">
    // I have been error when I don't put this comprobation 
    // because "NewWrappStrucuture" is undefined 
    // when hasCustomWrapp is false.
    {
      hasCustomWrapp && 
        <NewWrappStructure letter={letter} cssClass={cssClass} />
    }
  </div>
);`,
        },
      },
      {
        tag: "p",
        data: {
          text: "Now You do will make the comprobation with your another params or it can be like this",
        },
      },
      {
        tag: "code",
        data: {
          text: `
  return hasCustomWrapp ? (
    <CustomComponent letter={letter} cssClass={cssClass} />
  ) : (
    <Default letter={letter} cssClass={cssClass} />
  );
}`,
        },
      },
      {
        tag: "p",
        data: {
          text: "end of the example",
          options: {
            ClassToAdd: `${styles.text} ${styles.italic}`,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "The list of element to send a the component for now is small:",
        },
      },
      {
        tag: "p",
        data: {
          text: "letter` is the letter to wrap",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "letter`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "cssClass` is the matching CSS class",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "cssClass`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "specialWrapp` this attribute is explaining in the next section",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "specialWrapp`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "index` yeah, the index is now available.",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "index`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "note",
        data: {
          text: "!IMPORTANT The key is assigned automatically in the component",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "!IMPORTANT",
              classToAdd: styles["italic"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "key` is the key :3 ('{wrappedElement}'-{indexNumber})",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: "key`",
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "note",
        data: {
          text: "!IMPORTANT The ClassToAdd` attribute of textOptions` is disable when the structure` is active, if you want a css class use className` in the component.",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: [
                "ClassToAdd`",
                "!IMPORTANT",
                "textOptions`",
                "structure`",
                "className`",
              ],
              classToAdd: [styles["simple-code"], styles.italic],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "a",
        data: {
          anchor: {
            url: "",
            text: `structure is available with the feature {props}, click this link to go the documentation page if you want know more about the feature`,
            target: "_blank",
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "It's very easy to use, You just need change the structure` to an Object` with the following attributes: structure` and props`",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              classToAdd: styles["simple-code"],
              wordToSearch: ["structure`", "Object`", "props`"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `structure={{
  structure: ReactComponent,
  props: {
    // your custom props
  }
}}`,
        },
      },
    ],
  },
  specialArray: {
    id: "specialArray",
    content: [
      {
        tag: "p",
        data: {
          text: "Its syntax is very easy, only you need change the string to an Array of strings, look at this example",
        },
      },
      {
        tag: "p",
        data: {
          text: "You put 3 words to search",
        },
      },
      {
        tag: "code",
        data: {
          text: `wordToSearch: ["cheese", "rice", "eggs"]`,
        },
      },
      {
        tag: "p",
        data: {
          text: "the code will select the index of the word and will check what the class is in the array",
        },
      },
      {
        tag: "code",
        data: {
          text: `classToAdd: ["class-1", "class-2"]`,
        },
      },
      {
        tag: "p",
        data: {
          text: "if the index of the word is greater than that of the length of the array of specialClass, it'll select the first class.",
        },
      },
      {
        tag: "code",
        data: {
          text: `return
  // PerWord: true
  <span class="class-1">cheese </span>
  <span class="class-2">rice </span>
  <span class="class-1">eggs</span>
`,
        },
      },
      {
        tag: "p",
        data: {
          text: "sometimes you do need add a loot of word(letters, phrases... xd) with an only class, well you can stacks the strings in an Array and this array will be an the receptor to the class in their index",
        },
      },
      {
        tag: "p",
        data: {
          text: "look this example:",
        },
      },
      {
        tag: "code",
        data: {
          text: `wordToSearch: [["this", "is"], "the", ["new", "feature"]],
classToAdd: ["hahahah", "cool", "right?"],`,
        },
      },
      {
        tag: "p",
        data: {
          text: "the return is:",
        },
      },
      {
        tag: "code",
        data: {
          text: `<span class="hahahah">this</span>
<span class="hahahah">is</span>
<span class="cool">the</span>
<span class="right?">new</span>
<span class="right?">feature</span>

// PerWord: true,
`,
        },
      },
      {
        tag: "p",
        data: {
          text: "This examples is avalible in any attribute/prop that suport [special Array]",
          options: {
            ClassToAdd: `${styles.text} ${styles.italic}`,
          },
        },
      },
    ],
  },
  props: {
    id: "props",
    content: [
      {
        tag: "a",
        data: {
          anchor: {
            url: `${process.env.URL}/docs/specialArray/`,
            text: "This feature is available with [special Array], click this link to go to its documentation page",
            target: "_blank",
          },
        },
      },
      {
        tag: "p",
        data: {
          text: "This feature help you to add custom props` to your components with a simple syntax, You just need change the element will receive props` to an Object`, let's take a look the next example",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              wordToSearch: ["props`", "Object`,"],
              classToAdd: styles["simple-code"],
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `{
  "name of the element that has been changed": component,
  props: {
    // your props
  }
}`,
        },
      },
      {
        tag: "p",
        data: {
          text: "The name of the attribute that has the component as its value has the same name as the Object` that contains it. for example",
          options: {
            ClassToAdd: styles.text,
            SelectClass: {
              classToAdd: styles["simple-code"],
              wordToSearch: "Object`",
            },
            PerWord: true,
          },
        },
      },
      {
        tag: "code",
        data: {
          text: `// This object is from SpecialWrapps 
structureToAdd: {
  structureToAdd: yourComponent,
  props: {
    // your props
  }
}`,
        },
      },
      {
        tag: "note",
        data: {
          text: "Changes to props don't cause the component to re-render",
        },
      },
    ],
  },
};
