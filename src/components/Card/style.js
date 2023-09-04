import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

Container.CardRow = styled.div`
  display: flex;
  position: absolute;
  padding: 12px 0;
  color: #fff;
  top: -703px;
  background-color: var(--main-color);
`;

Container.CardCol = styled.div``;

Container.CardImg = styled.img`

`

export { Container };
