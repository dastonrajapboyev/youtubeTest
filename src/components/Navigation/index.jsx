import React from "react";
import { Container } from "./style";

function Navigation() {
  return (
    <Container>
      <Container.Nav>
        <Container.NavUl>
          <Container.NavLi>
            <Container.NavItemFirst>Kino</Container.NavItemFirst>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem>Comedy</Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem>Mix</Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem>Cartoons</Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem>Muzik</Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem>Futbol</Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem>El sanatları</Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem>UX Tasarım</Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem>Animasyon</Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem>Görsel sanatlar</Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem>Son yüklenenler</Container.NavItem>
          </Container.NavLi>
        </Container.NavUl>
      </Container.Nav>
    </Container>
  );
}

export default Navigation;
