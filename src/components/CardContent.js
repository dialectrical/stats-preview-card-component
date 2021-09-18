import React from "react";
import { StyledCardContentContainer } from "./styles/StyledCardContentContainer";

export const CardContent = () => {
  return (
    <StyledCardContentContainer>
      <h2>
        Get <span>insights</span> that help your business grow.
      </h2>
      <p>
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <div>
        <div>
          <p>1</p>
          <p>2</p>
        </div>
        <div>
          <p>3</p>
          <p>4</p>
        </div>
        <div>
          <p>5</p>
          <p>6</p>
        </div>
      </div>
    </StyledCardContentContainer>
  );
};
