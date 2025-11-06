import { FeatureSpotlight } from '@/components/FeatureSpotlight';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MovieRow } from '@/components/MovieRow';
import { PlanGrid } from '@/components/PlanGrid';
import { categories, featuredMovie } from '@/lib/movies';

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <div className="relative flex flex-col gap-14 pb-20 pt-24 md:gap-20">
        <Hero movie={featuredMovie} />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 md:gap-20">
          {categories.map((category) => (
            <MovieRow key={category.id} category={category} />
          ))}
          <PlanGrid />
          <FeatureSpotlight />
        </div>
      </div>
      <Footer />
    </main>
  );
}
