import { ID, PageContent } from "@common/type";

export function Aside({
  currentHeader,
  allHeaders,
}: {
  currentHeader: PageContent;
  allHeaders: Record<ID, Record<ID, PageContent>>;
}) {
  let entriesArray = Object.entries(allHeaders);

  console.log(entriesArray);
  return (
    <aside>
      <ul>
        {entriesArray.map((el, index) => (
          <li key={`${el[0]} ${index}`}>
            {el[0]}
            <ul>
              {Object.values(el[1]).map((element: PageContent) => (
                <li key={element.id}>{element.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}
