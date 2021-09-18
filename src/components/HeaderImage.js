import { StyledCardImg } from "./styles/StyledCardImg";
import { CardImageOverlay } from "./styles/CardImageOverlay";
import { StyledImageContainer } from "./styles/StyledImageContainer";
import HeaderImg from "../img/header.jpg";

export const HeaderImage = () => {
  return (
    <StyledImageContainer>
      <StyledCardImg src={HeaderImg} alt="" />
      <CardImageOverlay />
    </StyledImageContainer>
  );
};
