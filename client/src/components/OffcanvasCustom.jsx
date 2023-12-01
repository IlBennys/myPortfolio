import "../assets/sass/OffcanvasCustom.scss";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiMapPinUserFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function OffcanvasCustom() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="bottoneNav" onClick={handleShow}>
        <RiMapPinUserFill className="fs-3" />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header
          className="justify-content-end"
          closeButton
        ></Offcanvas.Header>
        <Offcanvas.Title className="mt-5 mb-4 text-center text-black titlee">
          <div className="patterns">
            <svg width="100%" height="100%">
              <defs>
                <pattern
                  id="polka-dots"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                </pattern>
              </defs>

              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#polka-dots)"
              ></rect>
              <text x="50%" y="60%" textAnchor="middle">
                Contacts
              </text>
            </svg>
          </div>
        </Offcanvas.Title>
        <Offcanvas.Body className="off-body">
          {/* -- email -- */}
          <Form className="mb-4">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4 text-black fw-bold labell">
                <div className="d-flex align-items-center ">
                  <TfiEmail />
                </div>
              </Form.Label>
              <Col sm="8">
                <a href="mailto:benedettomanfre99@gmail.com">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue="benedettomanfre99@gmail.com"
                  />
                </a>
              </Col>
            </Form.Group>
          </Form>
          <hr className="text-white" />

          {/* -- GitHub -- */}
          <Form className="mb-4">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextGitHub"
            >
              <Form.Label column sm="4 text-black fw-bold labell">
                <div className="d-flex align-items-center ">
                  <FaGithub />
                </div>
              </Form.Label>
              <Col sm="7">
                <a
                  href="https://github.com/IlBennys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/IlBennys
                </a>
              </Col>
            </Form.Group>
          </Form>
          <hr className="text-white" />

          {/* -- Linkedin -- */}
          <Form className="mb-4">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextLinkedin"
            >
              <Form.Label column sm="4 text-black fw-bold labell">
                <div className="d-flex align-items-center ">
                  <FaLinkedin />
                </div>
              </Form.Label>
              <Col sm="7">
                <a
                  href="https://www.linkedin.com/in/benedetto-manfré"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/benedetto-manfré
                </a>
              </Col>
            </Form.Group>
          </Form>
          <hr className="text-white" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasCustom;
