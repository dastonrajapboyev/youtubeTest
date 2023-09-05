import React from "react";
import { Container } from "./style";
import logo from "../../assets/icons/logo.png";
import SearchIcon from "../../assets/icons/search.svg";
import CameraIcon from "../../assets/icons/cam.svg";
import topBarIcon from "../../assets/icons/topbar.svg";
import BellIcon from "../../assets/icons/bell.svg";
import Burger from "../../assets/icons/hamburgerbutton.svg";
import ProfilePhoto from "../../assets/icons/Profile-Photo.svg";

const Header = () => {
  return (
    <Container>
      <Container.Navbar>
        <Container.logoDiv>
          <Container.Burger src={Burger} />
          <Container.LogoImg src={logo} />
        </Container.logoDiv>
        <Container.InputDiv>
          <Container.Input placeholder="search" />
          <Container.searchIcon src={SearchIcon} />
        </Container.InputDiv>
        <Container.frame>
          <Container.CameraIcons src={CameraIcon} />
          <Container.topBarIcon src={topBarIcon} />
          <Container.bellIcon src={BellIcon} />
          <Container.ProfilePhoto src={ProfilePhoto} />
        </Container.frame>
      </Container.Navbar>
    </Container>
  );
};
export default Header;
