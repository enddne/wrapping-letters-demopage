import { Data } from "@DDBB/headerData.ddbb";
import { IncomingMessage, ServerResponse } from "http";

export default async function HeaderContent(
  request: IncomingMessage,
  response: ServerResponse
) {
  response.end(JSON.stringify(Data));
}
