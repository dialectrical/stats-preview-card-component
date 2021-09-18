import React from "react";
import { StyledCardContentContainer } from "./styles/StyledCardContentContainer";
import { StyledStatsContainer } from "./styles/StyledStatsContainer";

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
      <StyledStatsContainer>
        <div>
          <h3>10k+</h3>
          <p>COMPANIES</p>
        </div>
        <div>
          <h3>314</h3>
          <p>TEMPLATES</p>
        </div>
        <div>
          <h3>12M+</h3>
          <p>QUERIES</p>
        </div>
      </StyledStatsContainer>
    </StyledCardContentContainer>
  );
};
