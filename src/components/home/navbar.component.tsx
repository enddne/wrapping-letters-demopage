import Link from "next/link";

const styles = require("@styles/home/navbar.module.scss");

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["anchor--container"]}>
        <Link href="/docs">
          <a>Documentation</a>
        </Link>
      </div>
      <div className={`${styles["anchor--container"]} ${styles.disable}`}>
        {/* <Link href="/docs"> */}
        <a>Examples</a>
        {/* </Link> */}
      </div>
    </nav>
  );
}
