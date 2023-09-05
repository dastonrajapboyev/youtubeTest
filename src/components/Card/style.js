import styled from "styled-components";

/**header navbar section */

const Container = styled.div`
width: 100%;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.cl};
`;
Container.Navbar = styled.div`
background-color: var(--main-color); 
display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

Container.frame = styled.div`
  display: flex;
  gap: 8px;
`;
Container.CameraIcons = styled.img`
  cursor: pointer;
`;
Container.topBarIcon = styled.img`
  cursor: pointer;
`;
Container.bellIcon = styled.img`
  cursor: pointer;
`;
Container.ProfilePhoto = styled.img`
  cursor: pointer;
`;
Container.LogoText = styled.h1`
  color: #fff;
`;
Container.InputDiv = styled.div`
  display: flex;
  align-items: center;
`;
Container.Input = styled.input`
  width: 574px;
  height: 32px;
   background-color: #000000; 
   color: #fff;
   /* background-color: ${(props) => props.theme.bg}; */
  /* color: ${(props) => props.theme.cl}; */
  border: none;
  outline: none;
  margin: 12px 0 12px 220px;
  padding-left: 10px;
  @media (max-width: 768px) {
    width: 200px;
  }
`;
Container.searchIcon = styled.img`
height: 32px;
  padding: 4px 20px;
  cursor: pointer;
  border-radius: 0px 2px 2px 0px;
  background: var(--white-20, rgba(255, 255, 255, 0.2));
`;

/**header navbar section end */

/* navigation */

Container.Nav = styled.nav`
  padding: 12px 0;
  /* background-color: var(--main-color); */
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.cl};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

Container.NavUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

Container.NavLi = styled.li`
  cursor: pointer;
`;

Container.NavItemFirst = styled.p`
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 5px 12px;
  background-color: #fff;
  color: var(--main-color);
`;

Container.NavItem = styled.p`
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 5px 12px;
  background-color: rgba(255, 255, 255, 0.2);
`;

Container.ButtonMode = styled.button`
  padding: 10px;
  margin-left: 60px;
  color: ${(props) => props.theme.bg};
  background-color: ${(props) => props.theme.cl};
`

/* navigation end*/

Container.Card = styled.div`
  /* width: 100%; */
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 283px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.cl};
  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

Container.CardInfoWrapper = styled.div`
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 12px;
  gap: 12px;
`;

Container.Title = styled.p`
  width: 260px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

Container.Icon = styled.img``;

Container.CardImg = styled.img``;

Container.ChannelWrapper = styled.div``;

Container.ChannelName = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 4px;
`;

Container.Statistics = styled.div`
  /* width: 100%; */
  display: flex;
  gap: 6px;
`;

Container.View = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
Container.Time = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

// darkmode and lightmode
Container.styledMode = styled.div`

`

export { Container };
