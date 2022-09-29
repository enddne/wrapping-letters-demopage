import { Data } from "@DDBB/headerData.ddbb";
import { NextApiRequest, NextApiResponse } from "next";
import { DynamicApiRoute } from "@modules/dynamicApi.module";

const API = async (req: NextApiRequest, res: NextApiResponse) =>
  DynamicApiRoute(req, res, Data);

export default API;
