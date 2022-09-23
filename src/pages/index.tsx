import { DemoContent } from "@components/home/demo-content.module";
import { Intrduction } from "@components/home/introduction.component";
import { WlSlider } from "@components/home/wl-slider.component";

const styles = require("@styles/home/index.module.scss");

export default function home() {
  return (
    <>
      <WlSlider />
      <header className={`container ${styles.header}`}>
        <Intrduction />
      </header>
      <main className={`container ${styles.main}`}>
        <DemoContent />
      </main>
    </>
  );
}
