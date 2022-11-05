import React from "react";
import classes from "./Navbar.module.css";
import Container from "../../components/ui/Container";
import FullLogo from "../../assets/svgs/FullLogo.svg";
import Button from "../../components/ui/Button";
import NavbarLinks from "./NavbarLinks";
import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <>
      <nav className={`${classes.navbarContainer} bg-dark`}>
        <Container className={classes.navbar_dataholder}>
          <img src={FullLogo} alt="" />
          <NavbarLinks></NavbarLinks>
          <Button>
            Resume <Icon icon="charm:download" />
          </Button>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
