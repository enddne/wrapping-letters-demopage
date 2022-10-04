import { Content } from "@common/type";
import { NotFound } from "pages/404";

export function Main({ content }: { content?: Content }) {
  if (!content) return <NotFound />;

  return <main>{Object.entries(content).toString()}</main>;
}
