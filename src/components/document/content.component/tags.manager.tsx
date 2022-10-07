import { ContentAppear } from "@common/appearContentAnimation";

import {
  AnchorElement,
  CodeElement,
  H2Element,
  H3Element,
  ImageElement,
  NoteElement,
  ParaElement,
} from "./tags.container";

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
