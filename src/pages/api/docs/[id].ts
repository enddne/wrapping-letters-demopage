import { ID, PageContent } from "@common/type";
import { DataManager } from "@DDBB/index";
import { NextApiRequest, NextApiResponse } from "next";

export default async function DynamicApiRouteToDocs(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const Manager = new DataManager();
  const { id } = req.query;

  const allContentHeader = await fetch(`${process.env.API}/docs/`);

  const Data = await Manager.getHeaderByID(allContentHeader, id as string);

  res.status(200).json(Data);
}
