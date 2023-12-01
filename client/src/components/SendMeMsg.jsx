import "../assets/sass/SendMsgCustom.scss";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Axios from "axios";
import { SiMinutemailer } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GiPlayButton } from "react-icons/gi";

const SendMeMsg = () => {
  const initialInputState = { name: "", email: "", message: "" };
  const [newMessage, setNewMessage] = useState(initialInputState);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = newMessage;

  const handleInputChange = (e) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    Axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: { name, email, message },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.data.success) {
          setSuccessMessage(
            "Email has been sent successfully. Look in your spam inbox email!"
          );
          setNewMessage(initialInputState);
        } else {
          setErrorMessage("Failed to send email. Please try again.");
        }
      })
      .catch((error) => {
        setErrorMessage("All fields are required. Please try again.");
      });
  };

  return (
    <div className="divForm">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center mt-4">
          <h1 className="blur text-white">
            Send Me a Message <SiMinutemailer />
          </h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          {successMessage && <p className="text-success">{successMessage}</p>}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Form>
            <FormGroup>
              <Label className="text-white" for="name">
                Full Name
                <span className="ms-2 fs-4">
                  <MdDriveFileRenameOutline />
                </span>
              </Label>
              <Input
                name="name"
                onChange={handleInputChange}
                value={name}
                placeholder="Enter your name here"
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-white" for="email">
                Email
                <span className="ms-2 fs-4">
                  <MdAttachEmail />
                </span>
              </Label>
              <Input
                type="email"
                name="email"
                onChange={handleInputChange}
                value={email}
                placeholder="Enter your email here"
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-white" for="message">
                Message
                <span className="ms-2 fs-4">
                  <FaMessage />
                </span>
              </Label>
              <Input
                type="textarea"
                value={message}
                onChange={handleInputChange}
                style={{ height: 150 }}
                name="message"
                placeholder="Write the message to send here"
              />
            </FormGroup>
            <Button onClick={sendMessage} className="bn632-hover bn26 mt-3">
              SHOOT
              <span className="ms-2 fs-4">
                <GiPlayButton />
              </span>
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SendMeMsg;
