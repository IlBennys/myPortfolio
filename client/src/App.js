import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavCustom from "./components/NavCustom";
import Home from "./components/Home";

function App() {
  console.log(` ._       __          ____
  ;  \`\\--,-' /\`)    _.-'    \`-._
   \\_/    ' | /\`--,'            \`-.     .--....____
    /                              \`._.'           \`---...
    |-.   _      ;    MEOWWW.             .-----..._______)
  ,,\\q/ (q_>'_...                      .-'
  ===/ ; _.-'~~-             /       ,'
  \`""\`-'_,;  \`""         ___(       |
           \\         ; /'/   \\      \\
            \`.      //' (    ;\`\\    \`\\
            / \\    ;     \`-  /  \`-.  /
           (  (;   ;     (__/    /  /
            \\,_)\\  ;           ,'  /
    .-.          |  |           \`--'
   ("_.)-._     (__,>
   
      Hey there 👋, curious!
      You're probably wondering how cool this site is 😎.
      Send me a message on linkedin to have a chat https://www.linkedin.com/in/benedetto-manfré 😊
     `);
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
