import styled from "styled-components";

const Container = styled.div`
  /* display: inline-block; */
`;

/* navigation */

Container.Nav = styled.nav`
  padding: 12px 0;
  color: #fff;
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

Container.NavLi = styled.li``;

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

/* navigation end*/

Container.Card = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  background-color: #181818;
  `;


Container.CardInfoWrapper = styled.div`
  display: flex;
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

Container.ChannelWrapper = styled.div``

Container.ChannelName = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 4px;
`;

Container.Statistics = styled.div`
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

export { Container };
