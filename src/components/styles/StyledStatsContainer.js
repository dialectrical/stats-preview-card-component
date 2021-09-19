import styled from "styled-components";

export const StyledStatsContainer = styled.div`
  width: 87.11%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-top: 16.14%;
  h3 {
    line-height: 29px;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 0;
  }
  p {
    line-height: 25px;
    font-size: 12px;
    font-family: "Lexend Deca";
    font-weight: 400;
    opacity: 0.6;
    margin-top: 0;
    letter-spacing: 1px;
  }
  @media (max-width: 414px) {
    flex-direction: column;
    text-align: center;
    margin: auto;
    div {
      height: 56px;
      margin-bottom: 24px;
    }
  }
`;
