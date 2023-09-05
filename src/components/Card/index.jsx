import React from "react";
import { Container } from "./style";
import { CardInfo } from "../../mock";

function Card() {
  // const  { img, } = props.data
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

      <div
        style={{
          background: "#181818",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}>
        {CardInfo.map((value) => {
          return (
            <>
              <Container.Card>
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

              {/* <Container.CardImg src={value.img} alt="" /> */}
              {/* <h1>{value.title}</h1> */}
            </>
          );

          // return <Card data={value} />;
          // <Container.CardRow>
          //   <Container.CardCol>
          //     <Container.CardImg />
          //   </Container.CardCol>
          //   <Container.CardCol>dsfafsdaf</Container.CardCol>
          // </Container.CardRow>;
        })}
      </div>
    </Container>
  );
}

export default Card;
