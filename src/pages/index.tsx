import { Intrduction } from "@components/home/introduction.component";
import { WlSlider } from "@components/home/wl-slider.component";

export default function home() {
  return (
    <>
      <WlSlider />
      <header>
        <Intrduction />
      </header>
    </>
  );
}
