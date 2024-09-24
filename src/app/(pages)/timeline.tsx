import CardTimeLine from '../../../components/CardTimeline'
import Heading from '../../../components/Heading'
import Meta from '../../../components/Meta'
import { Navigation } from '../../../components/Navigation'
import { IndexMain } from '../../../styles'

const timeline = ({ dbs }: { dbs: any }) => {
  const { data } = dbs

  return (
    <>
      <Meta title="Timeline" />
      <Navigation />
      <IndexMain className="timeline">
        <Heading
          title="timeline"
          text="Instead of boring you with an 'About' page, here's a timeline of some of the interesting events that have happened in my life."
        />
        {data
          .sort((a: any, b: any) => {
            if (a.date > b.date) {
              return 1
            } else {
              return -1
            }
          })
          .map((item: any) => {
            return (
              <CardTimeLine
                key={item._id}
                start={item.start}
                heading={item.title}
                desc={item.desc}
                date={item.date}
                category={item.category}
                image={item.image}
                buttonText={item.buttonText}
                buttonLink={item.buttonLink}
              />
            )
          })}
      </IndexMain>
    </>
  )
}

export default timeline

export async function getStaticProps(context: any) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/timeline`)
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
