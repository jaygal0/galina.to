import React from "react";
import styled from "styled-components";
import { ExternalLink } from "../../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;
const Main = styled.div`
  font-size: ${({ theme }) => theme.type.size.title.lg};
  font-weight: ${({ theme }) => theme.type.weight.bold};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.title.sm};
  }
`;
const Secondary = styled.div`
  font-size: ${({ theme }) => theme.type.size.title.sm};
  text-transform: capitalize;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.body.lg};
  }
`;

const NowText = ({
  main,
  secondary,
  chess,
}: {
  main: string;
  secondary?: string;
  chess?: boolean;
}) => {
  return (
    <Container>
      <Main>{main}</Main>
      {!chess ? (
        <Secondary>{secondary}</Secondary>
      ) : (
        <Secondary>
          Live from{" "}
          <ExternalLink href="https://lichess.org" target="_blank">
            lichess.org
          </ExternalLink>
        </Secondary>
      )}
    </Container>
  );
};

export default NowText;
