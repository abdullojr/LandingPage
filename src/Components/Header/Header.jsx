import logo from "../img/logo.png";
import "./style.css";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Grid, Modal, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ModalView from "./ModalView";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Navbar className="app-navbar">
      <Container fluid>
        <Navbar.Brand style={{ paddingRight: "235px" }}>
          <img src={logo} width={"80"} height="64" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="" className="nav-links">
              ЛИЧНЫЙ КАБИНЕТ
            </Nav.Link>
            <NavDropdown
              className="nav-links"
              title="О НАС"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#" className="dropdown_link">
                Услуги и цены
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="dropdown_link">
                Коллектив
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="dropdown_link">
                История компании
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home" className="nav-links">
              НОВОСТИ И АКЦИИ
            </Nav.Link>
            <Nav.Link href="#home" className="nav-links">
              КОНТАКТЫ
            </Nav.Link>
            <Nav.Link href="#home" className="nav-links">
              БЛОГ
            </Nav.Link>
          </Nav>
          <Navbar.Text onClick={handleOpen}>
            <Nav.Link className="l_hover">
              <LocationOnIcon
                className="little_loc"
                style={{ color: "#FFC59E" }}
              />
              ВОЛГОГРАД
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="modal_box_container">
          <ModalView closeF={handleClose} />
        </Box>
      </Modal>
    </Navbar>
  );
};

export default Header;
