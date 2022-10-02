import { Content, ID, PageContent } from "@common/type";
import styles from "@styles/docs/index.module.scss";
import { Aside } from "@components/document/sidebar.component";

export function DocumentationTemplate({
  header,
  allHeaders,
  CONTENT_JSON,
}: {
  header: PageContent;
  allHeaders?: Record<ID, PageContent>;
  CONTENT_JSON?: Content;
}) {
  console.log(CONTENT_JSON);
  return (
    <div className={styles.container}>
      <Aside currentHeader={header} allHeaders={allHeaders} />
    </div>
  );
}
