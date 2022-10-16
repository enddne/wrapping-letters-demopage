export class DataManager {
  getDataByID(
    headers: Record<ID, PageContent> | Record<ID, Content> | undefined,
    id: string
  ): PageContent | Content | null {
    if (!headers) return null;

    if (!Object.prototype.hasOwnProperty.call(headers, id)) return null;

    return headers[id];
  }
}
