import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import RecommendationForm from '../components/RecommendationForm';
import RecommendationList from '../components/RecommendationList';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:flex-[1] md:max-w-[30%]">
            <ProfileCard />
          </div>
          <div className="md:flex-[2] md:max-w-[68%] space-y-6">
            <RecommendationForm />
            <RecommendationList />
          </div>
        </div>
      </main>
    </>
  );
}
