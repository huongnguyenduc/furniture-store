import BannerSection from '../components/Home/Banner/BannerSection';
import CategoryList from '../components/Home/Category/CategoryList';
import CustomJourneySection from '../components/Home/CustomJourney/CustomJourneySection';
import DifferenceSection from '../components/Home/Difference/DifferenceSection';
import Collection from '../components/Home/Collection/Collection';
import {
  newArrivalsCollection,
  seatingCollection,
} from '../components/Home/Collection/CollectionData';
import { useRef } from 'react';

export default function HomePage() {
  const collectionRef = useRef<HTMLInputElement>(null);
  const customRef = useRef<HTMLInputElement>(null);
  const scrollIntoCollection = () => {
    if (collectionRef.current) {
      collectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  const scrollIntoCustom = () => {
    if (customRef.current)
      customRef.current.scrollIntoView({
        behavior: 'smooth',
      });
  };
  return (
    <>
      <BannerSection />
      <CustomJourneySection
        scrollIntoCollection={scrollIntoCollection}
        scrollIntoCustom={scrollIntoCustom}
      />
      <CategoryList />
      <div ref={customRef}>
        <DifferenceSection />
      </div>
      <div ref={collectionRef}>
        <Collection data={seatingCollection} />
      </div>
      <Collection data={newArrivalsCollection} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {

    }
  }
}