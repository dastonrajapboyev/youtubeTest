import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

Container.Nav = styled.nav`
  position: absolute;
  padding: 12px 0;
  color: #fff;
  top: -758px;
  /* left: 0; */
  background-color: var(--main-color);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

Container.NavUl = styled.ul`
  width: 1424px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

Container.NavLi = styled.li`

`;

Container.NavItemFirst = styled.p`
border-radius: 30px;
border: 1px solid  rgba(255, 255, 255, 0.40);
padding: 5px 12px;
background-color: #fff;
color: var(--main-color);
`;

Container.NavItem = styled.p`
border-radius: 30px;
border: 1px solid  rgba(255, 255, 255, 0.40);
padding: 5px 12px;
background-color: rgba(255, 255, 255, 0.20);
`;

export { Container };
