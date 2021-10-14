import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 250px;
  max-height: 400px;
  margin: 5px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 100px;
    contain: content;
  }
`;

export const HomeContainer = styled.div`
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeaderCart = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: inset 0 2px 3px 0 rgba(255, 255, 255, 0.3),
    inset 0 -3px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 2px 0 rgba(0, 0, 0, 0.2);

  li {
    margin: 3px;
  }
`;
