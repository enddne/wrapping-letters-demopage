import { ID, PageContent } from "@common/type";

export function Aside({
  currentHeader,
  allHeaders,
}: {
  currentHeader: PageContent;
  allHeaders: Record<ID, PageContent> | undefined;
}) {
  return <aside></aside>;
}
