import React from "react";
import { Container } from "./style";
import { CardInfo } from "../../mock";

function Card(props) {
  const  { img, } = props.data
  return (
    <Container>
      {
        CardInfo.map((value)=>{
          return (
            <Card data={value}/>
          )
        })
      }
      <Container.CardRow>
        <Container.CardCol>
          <Container.CardImg img={img}/>
        </Container.CardCol>
        <Container.CardCol>dsfafsdaf</Container.CardCol>
      </Container.CardRow>
    </Container>
  );
}

export default Card;
