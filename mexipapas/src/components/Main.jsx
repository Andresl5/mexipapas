import Img from "./Img";
import Section from "./Section";
import ImgDos from "./ImgDos";
import ImgTres from "./ImgTres";

import { FaStepForward, FaStepBackward } from "react-icons/fa";
const Main = () => {
  return (
    <main className="main">
      <Section />
      <section>
        <div id="conteItemCarrusel">
          <div className="itemCarrusel" id="itemCarrusel-1">
            <div className="tarjetaCarrusel" id="tarjetaCarrusel-1">
              <Img />
            </div>
            <div className="flechasCarrusel">
              <a href="#itemCarrusel-3">
                <FaStepBackward />
              </a>

              <a href="#itemCarrusel-2">
                <FaStepForward />
              </a>
            </div>
          </div>

          <div className="itemCarrusel" id="itemCarrusel-2">
            <div className="tarjetaCarrusel" id="tarjetaCarrusel-2">
              <ImgDos />
            </div>
            <div className="flechasCarrusel">
              <a href="#itemCarrusel-1">
                <FaStepBackward />
              </a>

              <a href="#itemCarrusel-3">
                <FaStepForward />
              </a>
            </div>
          </div>

          <div className="itemCarrusel" id="itemCarrusel-3">
            <div className="tarjetaCarrusel" id="tarjetaCarrusel-3">
              <ImgTres />
            </div>
            <div className="flechasCarrusel">
              <a href="#itemCarrusel-2">
                <FaStepBackward />
              </a>

              <a href="#itemCarrusel-1">
                <FaStepForward />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
