import styled from "styled-components";

const Container = styled.div`
  background: var(--main-color);
  color: #fff;
`;
Container.Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
Container.Burger = styled.img`
cursor: pointer;
`
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
Container.logoDiv = styled.div`
  display: flex;
  align-items: center;
`;
Container.LogoImg = styled.img`
  width: 120px;
  height: 56px;
  object-fit: cover;
`;
Container.LogoText = styled.h1`
  color: #fff;
`;
Container.InputDiv = styled.div`
  display: flex;
`;
Container.Input = styled.input`
  width: 574px;
  height: 32px;
  background-color: #000000;
  color: #fff;
  border: none;
  padding-left: 10px;
  @media (max-width: 768px){
    width: 200px
  }
`;
Container.searchIcon = styled.img`
  padding: 4px 20px;
  cursor: pointer;
  border-radius: 0px 2px 2px 0px;
  background: var(--white-20, rgba(255, 255, 255, 0.2));
`;
export { Container };
