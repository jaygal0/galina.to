import React from 'react'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'
import Heading from '../components/Heading'

const contact = () => {
  return (
    <>
      <Navigation />
      <IndexMain className="blog">
        <Heading
          title="contact"
          text="Whether you have a business inquiry or just a random question, I check all my email and try to reply at a resonable time. You can get in touch at joshua[at]galina.to"
        />
      </IndexMain>
    </>
  )
}

export default contact
