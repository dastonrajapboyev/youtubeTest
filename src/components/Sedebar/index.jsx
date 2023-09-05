import React from "react";
import { Container } from "./style";
// icons
import HomeIcon from "../../assets/icons/sidebar-icons/home.svg";
import DiscoverIcon from "../../assets/icons/sidebar-icons/discover.svg";
import Burger from "../../assets/icons/hamburgerbutton.svg";
import logo from "../../assets/icons/logo.png";

const Sidebar = () => {
  return (
    <Container>
      <Container.Sidebar>
        <Container.LeftNavbarPage>
          <Container.logoDiv>
            <Container.Burger src={Burger} />
            <Container.LogoImg src={logo} />
          </Container.logoDiv>

          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={DiscoverIcon} />
            <Container.SidebarText> Keşfet </Container.SidebarText>
          </Container.LeftNavbarOption>
          <hr />
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <hr />
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
          <hr />
          <Container.LeftNavbarOption>
            <Container.HomeIcon src={HomeIcon} />
            <Container.SidebarText> Anasayfa </Container.SidebarText>
          </Container.LeftNavbarOption>
        </Container.LeftNavbarPage>
      </Container.Sidebar>
    </Container>
  );
};

export default Sidebar;
