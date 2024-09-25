import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Meta = ({ title }: { title?: string }) => {
  return (
    <Head>
      <title>{title ? `Joshua Galinato | ${title}` : 'Joshua Galinato'}</title>
    </Head>
  )
}

export default Meta
