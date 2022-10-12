import Image from "next/image";
import Link from "next/link";
import Wl from "wrapping-letters-react";

import styles from "@styles/docs/content.module.scss";

export const H2Element: ContentTextComponent = ({ text = "", options }) => {
  return (
    <h2>
      <Wl text={text} textOptions={options && options} />
    </h2>
  );
};

export const H3Element: ContentTextComponent = ({ text = "", options }) => {
  return (
    <h3>
      <Wl text={text} textOptions={options && options} />
    </h3>
  );
};

export const ParaElement: ContentTextComponent = ({ text = "", options }) => (
  <p>
    <Wl text={text} textOptions={options && options} />
  </p>
);

export const NoteElement: ContentTextComponent = ({ text, options }) => (
  <div className={styles["note--container"]}>
    <p>
      <Wl text={text} textOptions={options && options} />
    </p>
  </div>
);
export const CodeElement: ContentTextComponent = ({ text }) => (
  <pre className={styles["code--container"]}>
    <code>{text}</code>
  </pre>
);

export const AnchorElement: ContentTextComponent = ({
  anchor = {},
  options,
}) => {
  if (anchor.target != "") {
    return (
      <Link href={anchor.url ? anchor.url : ""}>
        <a className={styles["simple-link"]}>
          <Wl text={anchor.text} textOptions={options && options} />
        </a>
      </Link>
    );
  }

  return (
    <a
      href={anchor.url}
      className={styles["simple-link"]}
      target={anchor.target}
      rel="noreferrer"
    >
      <Wl text={anchor.text} textOptions={options && options} />
    </a>
  );
};

export const ImageElement: ContentTextComponent = ({ image }) => {
  const src = image?.src ? image.src : "";

  return (
    <div className={styles["image--box"]}>
      <Image src={src} alt={image?.alt} />
    </div>
  );
};

// --- tag for words ----
// SpecialWrapp is not avalible with JSON .-.

export const AnchorWord = ({
  link,
  letter,
  cssClass,
}: {
  link: string;
  letter?: string;
  cssClass: string;
}) => (
  <a href={link} className={cssClass}>
    {letter}
  </a>
);
