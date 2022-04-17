import BannerSection from '../components/Home/Banner/BannerSection';
import CategoryList from '../components/Home/Category/CategoryList';
import CustomJourneySection from '../components/Home/CustomJourney/CustomJourneySection';
import DifferenceSection from '../components/Home/Difference/DifferenceSection';
import Collection from '../components/Home/Collection/Collection';
import {
  newArrivalsCollection,
  seatingCollection,
} from '../components/Home/Collection/CollectionData';

export default function HomePage() {
  return (
    <>
      <BannerSection />
      <CustomJourneySection />
      <CategoryList />
      <DifferenceSection />
      <Collection data={seatingCollection} />
      <Collection data={newArrivalsCollection} />
    </>
  );
}
