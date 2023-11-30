import "../assets/sass/HomeCustom.scss";
import { Col, Row } from "react-bootstrap";
import foto from "../assets/img/fotocv.png";
import linea from "../assets/img/linea.png";
import linear from "../assets/img/linear.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Pag from "./Pag";
import { useEffect, useRef } from "react";
import SendMeMsg from "./SendMeMsg";

function Home() {
  const sect1Ref = useRef(null);
  const sect2Ref = useRef(null);
  const sect3Ref = useRef(null);

  const handleLinkClick1 = () => {
    sect1Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleLinkClick2 = () => {
    sect2Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleLinkClick3 = () => {
    sect3Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickcv = () => {
    let link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1Kz1Ek4-dO7R3qvxpUJpGpZfCMkF5Z4uG/view?usp=sharing";
    link.download = "IlMioCV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    document
      .getElementById("scaricaCV")
      .addEventListener("click", handleClickcv);
    return () => {
      document
        .getElementById("scaricaCV")
        .removeEventListener("click", handleClickcv);
    };
  }, []);

  return (
    <Col sm={12} lg={12}>
      {/* ----------------- PRIMA PAGINA ----------------- */}
      <Row sm={12} lg={12} ref={sect1Ref}>
        <section className="sect-1 d-flex flex-wrap align-items-center justify-content-evenly">
          <div className="lineas">
            <img height={"300px"} src={linea} alt="pic-line" />
          </div>
          <div className="linear">
            <img height={"350px"} src={linear} alt="pic-line" />
          </div>
          <div className="div-uno  m-3">
            <h1 className="text-start animate-charcter fullSt">
              FULL STACK DEVELOPER
            </h1>
            <h4 className=" textclip acca4 text-start ">
              I am a passionate Full Stack Developer, a digital architect of
              ideas, combining creativity and precision to shape the future of
              the web. From frontend to backend, from vision to implementation,
              I transform concepts into engaging and functional digital
              experiences. Welcome to my digital universe, where professionalism
              merges with innovation
            </h4>
          </div>
          <div className="div-due rounded">
            <img width={"300px"} height={"300px"} src={foto} alt="pic-me" />
          </div>
          <div className="routering">
            <Pag
              onLinkClick1={handleLinkClick1}
              onLinkClick2={handleLinkClick2}
              onLinkClick3={handleLinkClick3}
            />
          </div>
        </section>
      </Row>

      {/* ----------------- SECONDA PAGINA ----------------- */}
      <Row sm={12} lg={12} ref={sect2Ref}>
        <section className="sect-2">
          <div className="div-principale d-flex flex-wrap flex-row">
            {/* ----------------- DIV UNO ----------------- */}
            <div className="div-uno parent">
              <div className="div1 m-5">
                <h1>
                  I SHOW YOU <br /> ALL MY PROJECTS
                </h1>
              </div>
              <div className="div2 m-5">
                <h3>
                  Open source projects,
                  <br /> CRM and
                  <br /> experimentals.
                </h3>
              </div>
              <div className="div3 m-5">
                <a
                  href="https://github.com/IlBennys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn41-43 btn-41"
                >
                  <div className="d-flex align-items-center justify-content-evenly fs-5">
                    SEE MY PROJECTS
                    <span className="fs-3">
                      <FaLongArrowAltRight />
                    </span>
                  </div>
                </a>
              </div>
            </div>
            {/* ----------------- DIV DUE ----------------- */}
            <div className="div-due parent">
              <div className="div1 m-5">
                <h1>
                  I SHOW YOU <br /> ALL MY SKILLS
                </h1>
              </div>
              <div className="div2 m-5">
                <h3>
                  HTML - CSS & SASS - JAVASCRIPT - JAVA
                  <br /> SQL -NODE.JS - BOOSTRAP - MUI - REACT - REDUX - POSTMAN
                  <br /> SPRING BOOT - POSTGRESQL - JPA CRUD.
                </h3>
              </div>
              <div className="div3 m-5">
                <a href="/" id="scaricaCV" className="btn41-43 btn-41">
                  <div className="d-flex align-items-center justify-content-evenly fs-5">
                    DOWLOAD MY CV
                    <span className="fs-3">
                      <FaLongArrowAltRight />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="routering2">
            <Pag
              onLinkClick1={handleLinkClick1}
              onLinkClick2={handleLinkClick2}
              onLinkClick3={handleLinkClick3}
            />
          </div>
        </section>
      </Row>

      {/* ----------------- TERZA PAGINA ----------------- */}
      <Row sm={12} lg={12} ref={sect3Ref}>
        <section className="sect-3">
          <div className="mt-5">
            <SendMeMsg />
          </div>
          <div className="routering3">
            <Pag
              onLinkClick1={handleLinkClick1}
              onLinkClick2={handleLinkClick2}
              onLinkClick3={handleLinkClick3}
            />
          </div>
        </section>
      </Row>
    </Col>
  );
}

export default Home;
