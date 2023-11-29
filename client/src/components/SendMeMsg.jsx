import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Axios from "axios";

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
          console.log("Email has been sent");
          setSuccessMessage("Email has been sent successfully.");
          setNewMessage(initialInputState);
        } else {
          console.log("FAILURE");
          setErrorMessage("Failed to send email. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setErrorMessage(
          "An error occurred while sending the email. Please try again."
        );
      });
  };

  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center mt-4">
          <h2>Send a Message</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          {successMessage && <p className="text-success">{successMessage}</p>}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                name="name"
                onChange={handleInputChange}
                value={name}
                placeholder="Enter your name here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                onChange={handleInputChange}
                value={email}
                placeholder="Enter your email here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                value={message}
                onChange={handleInputChange}
                style={{ height: 150 }}
                name="message"
                placeholder="What's on your mind?"
              />
            </FormGroup>
            <Button onClick={sendMessage}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SendMeMsg;
