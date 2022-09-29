import { ID, PageContent } from "@common/type";
import { DataManager } from "@DDBB/index";
import { NextApiRequest, NextApiResponse } from "next";

export async function DynamicApiRoute(
  req: NextApiRequest,
  res: NextApiResponse,
  Data: Record<ID, PageContent> | PageContent
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
