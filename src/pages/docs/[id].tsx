import { IncomingMessage, ServerResponse } from "http";
import { useRouter } from "next/router";

// import Data from "@DataBase";

export default function SearchDocs(
  request: IncomingMessage,
  response: ServerResponse
): void {
  const { id } = useRouter().query;
  let DataToSend: string;

  const Data = {
    "1": {
      hola: "hello",
    },
    "2": {
      hola: "hello",
    },
  };

  if (Object.keys(Data).some((el) => el === id)) {
    Data[id];
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify(undefined));

    return;
  }

  response.end(JSON.stringify());
}
