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

const H2Element: ContentTextComponent = ({ data, options }) => {
  return (
    <h1>
      <Wl text={data} textOptions={options && options} />
    </h1>
  );
};

const AnchorElement: ContentTextComponent = ({ data, options }) => (
  <a href={data.url}>
    <Wl text={data.text} textOptions={options && options} />
  </a>
);

const ParaElement: ContentTextComponent = ({ data, options }) => (
  <p>
    <Wl text={data.text} textOptions={options && options} />
  </p>
);
