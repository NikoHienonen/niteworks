import styled from "styled-components";
import { colors, devices, fontSizes } from "../styles";

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${colors.offBlack};
  background: linear-gradient(
    90deg,
    ${colors.offBlack} 0%,
    ${colors.mint} 35%,
    ${colors.offBlack} 100%
  );
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: ${fontSizes["2xl"]};
  @media ${devices.md} {
    font-size: ${fontSizes["4xl"]};
  }
  font-family: "Share Tech Mono", monospace;
`;

const Subtitle = styled.h3`
  font-size: ${fontSizes.lg};
  @media ${devices.md} {
    font-size: ${fontSizes["xl"]};
  }
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const Landing = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Niteworks</Title>
        <Subtitle>Coding and it solutions</Subtitle>
      </TitleContainer>
    </Container>
  );
};
