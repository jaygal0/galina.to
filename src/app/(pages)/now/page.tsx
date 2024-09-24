import React, { useEffect, useState } from 'react'
import Age from '../../../../components/Age'
import Card from '../../../../components/Card'
import DeathCount from '../../../../components/DeathCount'
import Heading from '../../../../components/HeroText'
import Label from '../../../../components/Label'
import LocationNow from '../../../../components/LocationNow'
import NowText from '../../../../components/NowText'
import ProfessionNow from '../../../../components/ProfessionNow'
import { ExternalLink, IndexMain } from '../../../../styles'
import Meta from '../../../../components/Meta'
import LocationPrevious from '../../../../components/LocationPrevious'
import ProfessionPrevious from '../../../../components/ProfessionPrevious'
import GeneralCard from '../../../../components/now/GeneralCard'

const Now = () => {
  return (
    <>
      <Heading
        key="0"
        heading="What I'm up to now"
        desc="hello"
        now={Date.now()}
      />
      <div className='flex gap-2 my-8'>
        <GeneralCard>
          <Age />
        </GeneralCard>
      </div>
      {/* <Card isIcon age>
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
          <LocationNow
            key={dbsNowLocation.data[dbsNowLocation.data.length - 1]._id}
            city={dbsNowLocation.data[dbsNowLocation.data.length - 1].city}
            country={
              dbsNowLocation.data[dbsNowLocation.data.length - 1].country
            }
          />
          <Expand
            onClick={() => {
              setIsLocationExpand(!isLocationExpand)
            }}
          >
            {isLocationExpand
              ? 'Hide previous locations'
              : 'Show previous locations'}
          </Expand>
          {isLocationExpand && (
            <>
              {dbsNowLocation.data.map((location: any) => {
                if (
                  location.city !=
                  dbsNowLocation.data[dbsNowLocation.data.length - 1].city
                ) {
                  return (
                    <LocationPrevious
                      key={location._id}
                      city={location.city}
                      country={location.country}
                      date={location.date}
                    />
                  )
                }
              })}
            </>
          )}
        </Card>
        <Card isIcon profession>
          <Label text="career" />

          <ProfessionNow
            key={dbsNowCareer.data[dbsNowCareer.data.length - 1]._id}
            job={dbsNowCareer.data[dbsNowCareer.data.length - 1].role}
            company={dbsNowCareer.data[dbsNowCareer.data.length - 1].company}
          />
          <Expand
            onClick={() => {
              setIsCareerExpand(!isCareerExpand)
            }}
          >
            {isCareerExpand
              ? 'Hide previous professions'
              : 'Show previous professions'}
          </Expand>
          {isCareerExpand && (
            <>
              {dbsNowCareer.data.map((career: any) => {
                if (
                  career.role !=
                  dbsNowCareer.data[dbsNowCareer.data.length - 1].role
                ) {
                  return (
                    <ProfessionPrevious
                      key={career._id}
                      job={career.role}
                      company={career.company}
                      date={career.date}
                    />
                  )
                }
              })}
            </>
          )}
        </Card>
        <Card isIcon book>
          <Label text="reading" />
          <NowText
            key={dbsNowReading.data[firstDocument]._id}
            main={dbsNowReading.data[firstDocument].title}
            secondary={`By ${dbsNowReading.data[firstDocument].author}`}
          />
        </Card> */}
      {/* <Card isIcon audiobook>
          <Label text="Listening to" />
          <NowText
            key={dbsNowAudiobook.data[firstDocument]._id}
            main={dbsNowAudiobook.data[firstDocument].title}
            secondary={`By ${dbsNowAudiobook.data[firstDocument].author}`}
          />
        </Card> */}
      {/*    <Card isIcon chess>
          <Label text="Chess Rating" />
          <NowText main={`Rapid: ${lichess.perfs.rapid.rating}`} chess />
        </Card> */}
    </>
  )
}

export default Now