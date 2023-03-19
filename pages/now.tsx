import React, { useEffect, useState } from 'react'
import Age from '../components/Age'
import Card from '../components/Card'
import DeathCount from '../components/DeathCount'
import Heading from '../components/Heading'
import Label from '../components/Label'
import LocationNow from '../components/LocationNow'
import LocationStriked from '../components/LocationStriked'
import { Navigation } from '../components/Navigation'
import NowText from '../components/NowText'
import ProfessionNow from '../components/ProfessionNow'
import ProfessionStriked from '../components/ProfessionStriked'
import { ExternalLink, IndexMain } from '../styles'
import Meta from '../components/Meta'

const now = ({
  dbsNowText,
  dbsNowReading,
  dbsNowAudiobook,
  dbsNowCareer,
  dbsNowLocation,
  lichess,
}: any) => {
  const firstDocument = 0

  return (
    <>
      <Meta title="Now" />
      <Navigation />
      <IndexMain className="now">
        <Heading
          key={dbsNowText.data[firstDocument]._id}
          title="What I'm up to now"
          text={dbsNowText.data[firstDocument].text}
          now={dbsNowText.data[firstDocument].date}
        />
        <Card isIcon age>
          <Label text="age" />
          <Age />
        </Card>
        <Card isIcon death>
          <Label text="estimated time left to live" />
          <div>
            A reminder of my mortality. Data taken from{' '}
            <ExternalLink href="https://www.death-clock.org/" target="_blank">
              The Death Clock
            </ExternalLink>
          </div>
          <DeathCount />
        </Card>
        <Card isIcon location>
          <Label text="location" />
          {dbsNowLocation.data.map((location: any) => {
            if (
              location.city !=
              dbsNowLocation.data[dbsNowLocation.data.length - 1].city
            ) {
              return (
                <LocationStriked
                  key={location._id}
                  city={location.city}
                  country={location.country}
                />
              )
            }
          })}
          <LocationNow
            key={dbsNowLocation.data[dbsNowLocation.data.length - 1]._id}
            city={dbsNowLocation.data[dbsNowLocation.data.length - 1].city}
            country={
              dbsNowLocation.data[dbsNowLocation.data.length - 1].country
            }
          />
        </Card>
        <Card isIcon profession>
          <Label text="career" />
          {dbsNowCareer.data.map((career: any) => {
            if (
              career.role !=
              dbsNowCareer.data[dbsNowCareer.data.length - 1].role
            ) {
              return (
                <ProfessionStriked
                  key={career._id}
                  job={career.role}
                  company={career.company}
                />
              )
            }
          })}
          <ProfessionNow
            key={dbsNowCareer.data[dbsNowCareer.data.length - 1]._id}
            job={dbsNowCareer.data[dbsNowCareer.data.length - 1].role}
            company={dbsNowCareer.data[dbsNowCareer.data.length - 1].company}
          />
        </Card>
        <Card isIcon book>
          <Label text="reading" />
          <NowText
            key={dbsNowReading.data[firstDocument]._id}
            main={dbsNowReading.data[firstDocument].title}
            secondary={`By ${dbsNowReading.data[firstDocument].author}`}
          />
        </Card>
        <Card isIcon audiobook>
          <Label text="Listening to" />
          <NowText
            key={dbsNowAudiobook.data[firstDocument]._id}
            main={dbsNowAudiobook.data[firstDocument].title}
            secondary={`By ${dbsNowAudiobook.data[firstDocument].author}`}
          />
        </Card>
        <Card isIcon chess>
          <Label text="Chess Rating" />
          <NowText main={`Rapid: ${lichess.perfs.rapid.rating}`} chess />
        </Card>
      </IndexMain>
    </>
  )
}

export default now

export async function getStaticProps(context: any) {
  const site = process.env.WEB_SITE

  const resNowText = await fetch(`${site}/api/nowText`)
  const dbsNowText = await resNowText.json()
  if (!dbsNowText) {
    return {
      notfound: true,
    }
  }
  const resNowReading = await fetch(`${site}/api/nowReading`)
  const dbsNowReading = await resNowReading.json()
  if (!dbsNowReading) {
    return {
      notfound: true,
    }
  }
  const resNowAudiobook = await fetch(`${site}/api/nowAudiobook`)
  const dbsNowAudiobook = await resNowAudiobook.json()
  if (!dbsNowReading) {
    return {
      notfound: true,
    }
  }
  const resNowCareer = await fetch(`${site}/api/nowCareer`)
  const dbsNowCareer = await resNowCareer.json()
  if (!dbsNowReading) {
    return {
      notfound: true,
    }
  }
  const resNowLocation = await fetch(`${site}/api/nowLocation`)
  const dbsNowLocation = await resNowLocation.json()
  if (!dbsNowReading) {
    return {
      notfound: true,
    }
  }
  const resChess = await fetch(`https://lichess.org/api/account`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })
  const lichess = await resChess.json()
  if (!lichess) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      dbsNowText,
      dbsNowReading,
      dbsNowAudiobook,
      dbsNowCareer,
      dbsNowLocation,
      lichess,
    },
    revalidate: 10,
  }
}
