import { PageData } from "@DDBB/pageData.ddbb";
import { IncomingMessage, ServerResponse } from "http";

export default async function HeaderContent(
  request: IncomingMessage,
  response: ServerResponse
) {
  response.end(JSON.stringify(PageData));
}
