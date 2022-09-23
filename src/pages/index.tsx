import { DemoContent } from "@components/home/demo-content.module";
import { Intrduction } from "@components/home/introduction.component";
import { WlSlider } from "@components/home/wl-slider.component";

export default function home() {
  return (
    <>
      <WlSlider />
      <header className="container">
        <Intrduction />
      </header>
      <main className="container">
        <DemoContent />
      </main>
    </>
  );
}
