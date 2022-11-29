import "./App.css";
import {} from "react-scroll-motion";
import NavBar from "./Home-components/NavBar.js/NavBar";
import Header from "./Home-components/Header/Header";
import Video from "./Home-components/videos/Video";
import Discours from "./Home-components/discours/Discours";
import Atouts from "./Home-components/Atouts/Atouts";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import Equipe from "./Home-components/Equipe/Equipe";
import * as SimpleSlider from "./scroll/Slider";
import Filere from "./Home-components/Filiere/Filere";
import Reservation from "./Home-components/Reservations/Reservation";
import Footer from "./Home-components/Footer/Footer";
function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -300))}>
            <div className="layout">
              <NavBar />

              <Header />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyOut(), ZoomOut())}>
            <Video />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <Discours />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <Atouts />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <Equipe />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <Reservation />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <Footer />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
     
    </>
  );
}

export default App;
