import { ID, PageContent } from "@common/type";

export class DataManager {
  constructor() {}

  getHeaderByID(
    headers: Record<ID, PageContent> | undefined,
    id: string
  ): PageContent | null {
    if (!headers) return null;

    if (!Object.prototype.hasOwnProperty.call(headers, id)) return null;

    return headers[id];
  }
}
