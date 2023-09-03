import styled from "styled-components";

const Container = styled.div`
display: inline-block;
`;
Container.Hero = styled.div`
  display: flex;
`;
// sidebar
Container.Sidebar = styled.div``;
Container.LeftNavbarPage = styled.div`
  background-color: var(--main-color);
  width: 240px;
`;

Container.LeftNavbarOption = styled.div`
  display: flex;
  gap: 26px;
  padding: 12px 24px;
`;
Container.HomeIcon = styled.img``;
Container.SidebarText = styled.p`
  color: #fff;
`;
// sidebar end

export { Container };
