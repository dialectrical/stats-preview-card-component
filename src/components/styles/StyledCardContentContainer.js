import styled from "styled-components";

export const StyledCardContentContainer = styled.div`
  height: 70.85%;
  width: 36.35%;
  margin: 71px 635px 59px 71.5px;
  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    margin-bottom: 25px;
  }
  span {
    color: #ab5cdb;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    opacity: 0.75;
    width: 92.8%;
  }
  @media (max-width: 414px) {
    display: inline-block;
    width: 80.88%;
    height: 60%;
    margin: 250px 31px 32px 31px;
    h2 {
      font-size: 28px;
      line-height: 32px;
      text-align: center;
    }
    p {
      width: 100%;
      text-align: center;
    }
  }
`;
