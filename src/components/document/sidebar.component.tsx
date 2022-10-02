import { ID, PageContent } from "@common/type";

export function Aside({
  currentHeader,
  allHeaders,
}: {
  currentHeader: PageContent;
  allHeaders: Record<ID, PageContent> | undefined;
}) {
  console.log(currentHeader, allHeaders);
  return <aside></aside>;
}
