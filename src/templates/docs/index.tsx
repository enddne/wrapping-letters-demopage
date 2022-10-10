import { Aside } from "@components/document/sidebar.component";
import { Main } from "@components/document/content.component";

import styles from "@styles/docs/index.module.scss";

export function DocumentationTemplate({
  header,
  allHeaders,
  CONTENT_JSON,
}: {
  header: PageContent;
  allHeaders?: Record<ID, PageContent>;
  CONTENT_JSON?: Content;
}) {
  return (
    <div className={styles.container}>
      <Aside currentHeader={header} allHeaders={allHeaders} />
      <Main
        currentHeader={header}
        content={CONTENT_JSON}
        allHeaders={allHeaders}
      />
    </div>
  );
}
