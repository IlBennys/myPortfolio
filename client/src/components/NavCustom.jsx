import "../assets/sass/NavCustom.scss"
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import OffcanvasCustom from "./OffcanvasCustom";
import logo from "../assets/img/logo.png"
function NavCustom() {
  return (
    <Navbar >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <OffcanvasCustom />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavCustom;
