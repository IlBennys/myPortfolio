import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavCustom from "./components/NavCustom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <NavCustom />
      <Row className="d-flex flex-column flex-md-row">
        <Col xs={12} lg={12}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Col>
      </Row>
    </BrowserRouter>
  );
}

export default App;
