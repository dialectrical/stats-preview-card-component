import styled from "styled-components";

export const CardImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 48.64%;
  border-radius: 0px 8px 8px 0px;
  margin-left: 51.36%;
  background-color: rgba(171, 92, 219, 0.5);
  @media (max-width: 414px) {
    width: 100%;
    height: 240px;
    top: 0;
    left: 0;
    margin-left: 0;
    border-radius: 8px 8px 0px 0px;
  }
`;
