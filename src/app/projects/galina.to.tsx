import React, { useState } from 'react'
import Heading from '../../../components/Heading'
import Label from '../../../components/Label'
import Card from '../../../components/Card'
import { Navigation } from '../../../components/Navigation'
import { BodyText, IndexMain, TechStack } from '../../../styles'
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

const Galinato = ({ dbs }: { dbs: any }) => {
  const [lightboxImage, setLightboxImage] = useState<string>('/dummy-image.png')
  const [isLightbox, setIsLightbox] = useState<Boolean>(false)
  const { data } = dbs
  const project = 'galina.to'

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    let event = e.target as HTMLImageElement
    setLightboxImage(event.dataset.set as string)
    setIsLightbox(!isLightbox)
  }

  return (
    <>
      <Meta title="Galina.to" />
      <Navigation />
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
          alt="lightbox"
        />
        <ButtonClose />
        <LightboxBackground />
      </Lightbox>
      <IndexMain className="now">
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
            src="/galinato-sketches.jpg"
            data-set="/galinato-sketches.jpg"
            layout="responsive"
            width={4}
            height={3}
            objectFit="cover"
            className="image-hover"
            onClick={handleClick}
            alt="sketches"
          />
          <BodyText>
            In previous versions of this website, the data, text and images
            derived from the source files itself. This meant that whenever I
            wanted to make a small change in text, I had to open up VS Code and
            push my latest commit to Github for the changes to take effect.
            Since I was updating my site regularly you could see how tidious
            this could get. I needed a better way of working.
            <br />
          </BodyText>
        </Card>
        <Card>
          <Label text="getting to work" />
          <Image
            src="/galinato-figma.jpg"
            data-set="/galinato-figma.jpg"
            layout="responsive"
            width={16}
            height={9}
            objectFit="cover"
            className="image-hover"
            onClick={handleClick}
            alt="figma"
          />
          <BodyText>
            Once I sorted out the logic and how I was going to connect this site
            to a database, it was a matter of redesigning the website to work
            effectively with the different technologies involved.
          </BodyText>
        </Card>
        <Card>
          <Label text="laying out the system" />
          <Image
            src="/galinato-design-system.jpg"
            data-set="/galinato-design-system.jpg"
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
            link="https://www.figma.com/file/EI5KVwwDI858pVO578ZX7N/galina.to-v2.0?node-id=2814%3A5561&viewport=1603%2C535%2C0.1"
          />
        </Card>
        <Card>
          <Label text="developing the idea" />
          <Image
            src="/galinato-develop.jpg"
            data-set="/galinato-develop.jpg"
            layout="responsive"
            width={16}
            height={9}
            objectFit="cover"
            className="image-hover"
            onClick={handleClick}
            alt="app"
          />
          <BodyText>
            As always, I translate my designs to code and develop everything
            myself. Since I was pulling all the data from a database, it took a
            bit of time to understand the logic, but by doing so it helped me
            become a better developer.
          </BodyText>
          <Button
            cta="View source code"
            link="https://github.com/jaygal0/galina.to"
          />
        </Card>
      </IndexMain>
    </>
  )
}

export default Galinato

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
