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
