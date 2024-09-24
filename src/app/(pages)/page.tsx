import IndexHero from '../../../components/IndexHero'
import { Navigation } from '../../../components/Navigation'

export default async function Home() {
//   const designers = await getData();

  return (
      <>
      <div className="home">
        <IndexHero />
      </div>
    </>
  );
}
