import { Data } from "@DDBB/headerData.ddbb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function HeaderContent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(Data);
}
