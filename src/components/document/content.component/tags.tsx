import { ContentAppear } from "@common/appearContentAnimation";

import Image from "next/image";
import Link from "next/link";
import Wl from "wrapping-letters-react";

import styles from "@styles/docs/content.module.scss";

export default function TagManager({
  pageData: { content },
}: {
  pageData: Content;
}) {
  const Elements: Record<Tags, ContentTextComponent> = {
    h2: H2Element,
    h3: H3Element,
    a: AnchorElement,
    p: ParaElement,
    img: ImageElement,
    note: NoteElement,
    code: CodeElement,
  };

  console.log(content);

  return (
    <>
      {content.map((el, index) => (
        <div key={index}>
          <ContentAppear>{Elements[el.tag](el.data)}</ContentAppear>
        </div>
      ))}
    </>
  );
}

//
//
//
//
//
//
//
//
//
//
//
//
//

const H2Element: ContentTextComponent = ({ text = "", options }) => {
  return (
    <h2>
      <Wl text={text} textOptions={options && options} />
    </h2>
  );
};

const H3Element: ContentTextComponent = ({ text = "", options }) => {
  return (
    <h3>
      <Wl text={text} textOptions={options && options} />
    </h3>
  );
};

const ParaElement: ContentTextComponent = ({ text = "", options }) => (
  <p>
    <Wl text={text} textOptions={options && options} />
  </p>
);

const NoteElement: ContentTextComponent = ({ text }) => (
  <div className={styles["note--container"]}>
    <p>{text}</p>
  </div>
);
const CodeElement: ContentTextComponent = ({ text }) => (
  <pre className={styles["note--container"]}>
    <code>{text}</code>
  </pre>
);

const AnchorElement: ContentTextComponent = ({ anchor = {}, options }) => {
  if (anchor.target != "") {
    return (
      <Link href={anchor.url ? anchor.url : ""}>
        <a>
          <Wl text={anchor.text} textOptions={options && options} />
        </a>
      </Link>
    );
  }

  return (
    <a href={anchor.url} target={anchor.target} rel="noreferrer">
      <Wl text={anchor.text} textOptions={options && options} />
    </a>
  );
};

const ImageElement: ContentTextComponent = ({ image }) => {
  const src = image?.src ? image.src : "";

  return (
    <div className={styles["image--box"]}>
      <Image src={src} alt={image?.alt} />
    </div>
  );
};
