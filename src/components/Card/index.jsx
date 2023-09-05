import React, { useState } from "react";
import { Container } from "./style";
import { CardInfo } from "../../mock";
import SearchIcon from "../../assets/icons/search.svg";
import CameraIcon from "../../assets/icons/cam.svg";
import topBarIcon from "../../assets/icons/topbar.svg";
import BellIcon from "../../assets/icons/bell.svg";
import ProfilePhoto from "../../assets/icons/Profile-Photo.svg";

import { createContext } from "react";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext(null);

function Card() {

  const [data, setData] = useState(CardInfo);

  const onClick = (e) => {
    setData(
      CardInfo.filter((value) => value.filter === e.target.dataset.filter)
    );
  };
  const onChange = (e) => {
    setData(
      CardInfo.filter((value) =>
        value.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const darkTheme = {
    bg: "#181818",
    cl: "#fff"
  }
  const lightTheme = {
    bg: "#fff",
    cl: "#181818"
  }
  
  const [theme, setTheme] = useState("light");

  const isDarkTheme = theme === "light"

  
  const toggleTheme = ()=>{
    setTheme(isDarkTheme? "dark" : "light")
  }
  
  return (
    <ThemeProvider theme={isDarkTheme? darkTheme : lightTheme}>
      <Container>
      {/* bu eng tepadagi input */}
      <Container.Navbar>
        <Container.InputDiv>
          <Container.Input onChange={onChange} placeholder="search" />
          <Container.searchIcon src={SearchIcon} />
        </Container.InputDiv>
        <Container.frame>
          <Container.CameraIcons src={CameraIcon} />
          <Container.topBarIcon src={topBarIcon} />
          <Container.bellIcon src={BellIcon} />
          <Container.ProfilePhoto src={ProfilePhoto} />
        </Container.frame>
      </Container.Navbar>

      {/* bu navbigation category  */}

      <Container.Nav>
        <Container.NavUl>
          <Container.NavLi>
            <Container.NavItemFirst onClick={onClick} data-filter="Kino">
              Kino
            </Container.NavItemFirst>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem onClick={onClick} data-filter="Comedy">
              Comedy
            </Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem onClick={onClick} data-filter="Mix">
              Mix
            </Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem onClick={onClick} data-filter="Cartoons">
              Cartoons
            </Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem onClick={onClick} data-filter="Muzik">
              Muzik
            </Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem onClick={onClick} data-filter="Futbol">
              Futbol
            </Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem onClick={onClick} data-filter="Animasyon">
              Animasyon
            </Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem onClick={onClick} data-filter="Görsel sanatlar">
              Görsel sanatlar
            </Container.NavItem>
          </Container.NavLi>
          <Container.NavLi>
            <Container.NavItem onClick={onClick} data-filter="Son yüklenenler">
              Son yüklenenler
            </Container.NavItem>
          </Container.NavLi>
          <Container.ButtonMode onClick={toggleTheme}>dark/light</Container.ButtonMode>
        </Container.NavUl>
      </Container.Nav>

      {/* card body */}
        <div
          style={{
            // background: "#181818",

            display: "flex",
            flexWrap: "wrap",
            height: "283px",
            gap: "40px",
            justifyContent: "space-around",
            boxShadow: "rgba(100, 100, 111, 0.2), 0px 7px 29px 0px",
          }}>
          {data.map((value) => {
            return (
              <Container.Card key={value.id}>
                <Container.CardImg src={value.img} alt="" />
                <Container.CardInfoWrapper>
                  <Container.Icon src={value.imgChannel} />
                  <Container.ChannelWrapper>
                    <Container.Title> {value.title}</Container.Title>
                    <Container.ChannelName>
                      {value.channel}
                    </Container.ChannelName>
                    <Container.Statistics>
                      <Container.View>{value.views}</Container.View>
                      <Container.Time>{value.time}</Container.Time>
                    </Container.Statistics>
                  </Container.ChannelWrapper>
                </Container.CardInfoWrapper>
              </Container.Card>
            );
          })}
        </div>
    </Container>
    </ThemeProvider>
  );
}

export default Card;
