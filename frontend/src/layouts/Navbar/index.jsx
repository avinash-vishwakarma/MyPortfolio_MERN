import React from "react";
import classes from "./Navbar.module.css";
import Container from "../../components/ui/Container";
import FullLogo from "../../assets/svgs/FullLogo.svg";
import Button from "../../components/ui/Button";
import NavbarLinks from "./NavbarLinks";
import { Icon } from "@iconify/react";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ToggleNavLiderHandler = () => {
    setShowMenu((oldValue) => !oldValue);
  };

  return (
    <>
      <nav className={`${classes.navbarContainer} bg-dark`}>
        <Container className={classes.navbar_dataholder}>
          <Icon
            icon="akar-icons:three-line-horizontal"
            className={classes.menuSliderButton}
            onClick={ToggleNavLiderHandler}
            width={"30px"}
          />
          <img src={FullLogo} alt="" />
          <NavbarLinks ShowMenu={showMenu}></NavbarLinks>
          <Button className={classes.dontShowOnMobel}>
            Resume <Icon icon="charm:download" />
          </Button>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className={classes.showInMobile}
          >
            <Icon icon="carbon:document-preliminary" height="30px" />
          </a>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
