import React, { useState } from 'react'
import Heading from '../../../components/HeroText'
import Label from '../../../components/Label'
import Card from '../../../components/Card'
import { Navigation } from '../../../components/Navigation'
import {
  BodyText,
  IndexMain,
  TechStack,
  IndexFlexRowContainer,
} from '../../../styles'
import Button from '../../../components/Button'
import Image from 'next/image'
import styled from 'styled-components'
import ButtonClose from '../../../components/ButtonClose'
import Meta from '../../../components/Meta'

const Lightbox = styled.div`
  position: relative;
  width: 0vw;
  height: 0vh;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  &.isLightbox {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding: 2.4rem;

    &:hover {
      cursor: zoom-out;
    }
  }
`
const LightboxBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  z-index: -1;
`

const Typ = ({ dbs }: { dbs: any }) => {
  const [lightboxImage, setLightboxImage] = useState<string>('/dummy-image.png')
  const [isLightbox, setIsLightbox] = useState<Boolean>(false)
  const { data } = dbs
  const project = 'TYP_'

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    let event = e.target as HTMLImageElement
    setLightboxImage(event.dataset.set as string)
    setIsLightbox(!isLightbox)
  }
  return (
    <>
      <Meta title="Typ_" />
      <Navigation />
      <IndexMain className="now">
        <Lightbox
          onClick={() => {
            setIsLightbox(!isLightbox)
          }}
          className={isLightbox && 'isLightbox'}
        >
          <Image
            src={lightboxImage}
            layout="responsive"
            width={16}
            height={9}
            objectFit="cover"
            alt="lightbox active"
          />
          <ButtonClose />
          <LightboxBackground />
        </Lightbox>
        {data.map((item: any) => {
          if (item.title == project) {
            return (
              <Heading key={item._id} title={item.title} text={item.text} />
            )
          }
        })}
        <Card>
          <Label text="Apps Used" />
          {data.map((item: any) => {
            if (item.title == project) {
              return item.techStack
                .sort((a: any, b: any) => {
                  if (a > b) {
                    return 1
                  } else {
                    return -1
                  }
                })
                .map((program: any, index: string) => {
                  return <TechStack key={index}>{program}</TechStack>
                })
            }
          })}
        </Card>
        <Card padding>
          <Label text="defining the problem" />
          <Image
            src="/typ-sketches.jpg"
            data-set="/typ-sketches.jpg"
            layout="responsive"
            width={4}
            height={3}
            objectFit="cover"
            className="image-hover"
            onClick={handleClick}
            alt="sketches"
          />
          <BodyText>
            Since moving to Sweden I needed to find better tools to help me
            learn the language. Since I couldn&apos;t find a decent writing tool
            I decided to design and build one for myself.
          </BodyText>
        </Card>
        <Card>
          <Label text="getting to work" />
          <Image
            src="/typ-figma.jpg"
            data-set="/typ-figma.jpg"
            layout="responsive"
            width={16}
            height={9}
            objectFit="cover"
            className="image-hover"
            onClick={handleClick}
            alt="A screenshot of the Commonplacebook Figma file"
          />
          <BodyText>
            Once I figured out the overall concept as well as the logic, I went
            straight to Figma to design the app.
          </BodyText>
        </Card>
        <Card>
          <Label text="laying out the system" />
          <Image
            src="/typ-design-systems.jpg"
            data-set="/typ-design-systems.jpg"
            layout="responsive"
            width={16}
            height={9}
            objectFit="cover"
            className="image-hover"
            onClick={handleClick}
            alt="design systems"
          />
          <BodyText>
            Creating a level of consistency in design requires attention to
            detail as well as a strong design language. Just with every project
            I work on, I try to build on good foundations by making sure a good
            design system is in place.
          </BodyText>
          <Button
            cta="View design system"
            link="https://www.figma.com/file/EKeNzDmhNgZxNGeIbqGKli/Typ_?node-id=1639%3A2105"
          />
        </Card>
        <Card>
          <Label text="developing the idea" />
          <Image
            src="/typ-app.gif"
            layout="responsive"
            width={16}
            height={10}
            objectFit="cover"
            alt="app"
          />
          <BodyText>
            As always, I translate my designs to code and develop everything
            myself. Unfortunately, I didn&apos;t have enough time to build it
            exactly like the sketches, but what I&apos;ve built so far is enough
            for me to help me with my language learning.
          </BodyText>
          <IndexFlexRowContainer>
            <Button cta="View app" link="https://typ-eta.vercel.app/" />
            <Button
              secondary
              cta="View source code"
              link="https://github.com/jaygal0/typ"
            />
          </IndexFlexRowContainer>
        </Card>
      </IndexMain>
    </>
  )
}

export default Typ

export async function getStaticProps(context: any) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/projects`)
  const dbs = await res.json()

  if (!dbs) {
    return {
      notfound: true,
    }
  }

  return {
    props: { dbs },
  }
}
