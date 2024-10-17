import React from "react";
import styled from "styled-components";
import { Navigation } from "../../../components/Navigation";
import { ExternalLink, IndexMain } from "../../../styles";
import Button from "../../../components/global/Button";
import Image from "next/image";
import Meta from "../../../components/Meta";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: min-content;
  align-items: center;
  justify-content: center;
  padding-bottom: 10.4rem;
  max-width: 986px;
  animation: ContainerTransition 1.8s ease-in-out;

  @keyframes ContainerTransition {
    from {
      opacity: 0;
      transform: translateY(8rem);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: 100vw;
  }
`;
const Title = styled.h1`
  width: 90%;
  font-size: ${({ theme }) => theme.type.size.title.lg};
  font-family: "DM Sans", sans-serif;
  line-height: ${({ theme }) => theme.type.height.md};
  margin-bottom: 0.8rem;
  text-transform: capitalize;
  letter-spacing: 0.5px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.title.sm};
  }
`;
const Text = styled.p`
  width: 90%;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  line-height: ${({ theme }) => theme.type.height.lg};
  margin-bottom: 3.2rem;
  font-weight: ${({ theme }) => theme.type.weight.normal};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.body.lg};
  }

  &.margin-bottom {
    margin-bottom: 1.6rem;
  }

  &.bold {
    text-transform: capitalize;
    font-weight: ${({ theme }) => theme.type.weight.bold};
    margin-bottom: 0.8rem;
  }
`;
const ListWrapper = styled.ul`
  width: 85%;
  margin-bottom: 2.4rem;
`;
const List = styled.li`
  font-size: ${({ theme }) => theme.type.size.title.sm};
  margin-left: 2.4rem;
  line-height: ${({ theme }) => theme.type.height.lg};
  width: max-content;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.body.lg};
  }

  &.link {
    :hover {
      cursor: pointer;
    }
  }
`;
const Secondary = styled.div`
  width: 90%;
  font-size: ${({ theme }) => theme.type.size.body.md};
  margin: 3.2rem 0;
`;

const unofficeHours = () => {
  return (
    <>
      <Meta title="Unoffice Hours" />
      <Navigation />
      <IndexMain className="unoffice-hours">
        <Container>
          <Title>Unoffice Hours</Title>
          <Text>
            Every Wednesday afternoon, I’m opening up my calendar so anyone can
            book a 30 minute call and chat about anything you want.
          </Text>
          <Text className="margin-bottom">Some possible topics include:</Text>
          <ListWrapper>
            <List>Design and/or Technology</List>
            <List>Ways we can work together</List>
            <List>A general catchup</List>
          </ListWrapper>
          <Button
            flex
            link="https://cal.com/galinato/unoffice-hours"
            cta="book a 30 minute call"
          />
          <Secondary>
            Inspired by{" "}
            <ExternalLink href="https://davesmyth.com/" target="_blank">
              Dave Smyth
            </ExternalLink>
          </Secondary>
          <Text className="bold">webring</Text>
          <Text className="margin-bottom">
            There are other people offering Unoffice Hours:
          </Text>
          <ListWrapper>
            <ExternalLink
              className="no-underline"
              href="https://unofficehours.com/prev.html"
              target="_blank"
            >
              <List className="link">
                Previous{" "}
                <Image
                  src="/external-link.svg"
                  height={16}
                  width={16}
                  alt="external icon"
                />
              </List>
            </ExternalLink>

            <ExternalLink
              className="no-underline"
              href="https://unofficehours.com/next.html"
              target="_blank"
            >
              <List className="link">
                Next{" "}
                <Image
                  src="/external-link.svg"
                  height={16}
                  width={16}
                  alt="external icon"
                />
              </List>
            </ExternalLink>
            <ExternalLink
              className="no-underline"
              href="https://unofficehours.com/random.html"
              target="_blank"
            >
              <List className="link">
                Random{" "}
                <Image
                  src="/external-link.svg"
                  height={16}
                  width={16}
                  alt="external icon"
                />
              </List>
            </ExternalLink>
            <ExternalLink
              className="no-underline"
              href="https://unofficehours.com"
              target="_blank"
            >
              <List className="link">
                All sites{" "}
                <Image
                  src="/external-link.svg"
                  height={16}
                  width={16}
                  alt="external icon"
                />
              </List>
            </ExternalLink>
          </ListWrapper>
        </Container>
      </IndexMain>
    </>
  );
};

export default unofficeHours;
