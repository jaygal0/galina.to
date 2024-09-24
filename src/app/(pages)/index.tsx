import type { NextPage } from 'next'
import IndexHero from '../../../components/IndexHero'
import { Navigation } from '../../../components/Navigation'
import { IndexMain } from '../../../styles'
import Meta from '../../../components/Meta'

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Navigation />
      <IndexMain className="home">
        <IndexHero />
      </IndexMain>
    </>
  )
}

export default Home
