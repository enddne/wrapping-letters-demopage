import Link from "next/link";
import { ContentAppear } from "@common/appearContentAnimation";
import Wl from "wrapping-letters-react";

export default function TagManager({ content }: Content) {
  const Elements: Record<Tags, ContentTextComponent> = {
    h2: H2Element,
    a: AnchorElement,
    p: ParaElement,
    img: any,
  };

  return content.map((el, index) => (
    <div key={index}>
      <ContentAppear>{Elements[el.tag]}</ContentAppear>
    </div>
  ));
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

const H2Element: ContentTextComponent = ({ data: { text = "", options } }) => {
  return (
    <h2>
      <Wl text={text} textOptions={options && options} />
    </h2>
  );
};

const ParaElement: ContentTextComponent = ({
  data: { text = "", options },
}) => (
  <p>
    <Wl text={text} textOptions={options && options} />
  </p>
);

const AnchorElement: ContentTextComponent = ({
  data: { anchor = {}, options },
}) => {
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
