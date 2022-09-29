import { ID, PageContent } from "@common/type";
import { Data } from "@DDBB/headerData.ddbb";
import { DataManager } from "@DDBB/index";
import { NextApiRequest, NextApiResponse } from "next";

export default async function DynamicApiRouteToDocs(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const Manager = new DataManager();
  const { id } = req.query;

  // An issue with the peticion
  // const allContentHeader = await fetch(`${process.env.API}/docs/`);

  const allContentHeader = Data;

  const ENTRY = Manager.getHeaderByID(
    allContentHeader as unknown as Record<ID, PageContent>,
    id as string
  );

  if (!ENTRY) {
    res.status(404);
    res.end(
      JSON.stringify({
        status: "404",
        AllContentHeader: allContentHeader,
        ID: id,
      })
    );
  }

  res.status(200);
  res.end(JSON.stringify(ENTRY));
}
