import type { Category } from '@/lib/movies';
import { MovieCard } from './MovieCard';

type MovieRowProps = {
  category: Category;
};

export function MovieRow({ category }: MovieRowProps) {
  return (
    <section
      id={category.id}
      className="space-y-4 scroll-mt-24"
    >
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-semibold md:text-2xl">{category.title}</h2>
        <a
          href={`#${category.id}`}
          className="text-sm font-semibold text-neutral-300 transition hover:text-neutral-100"
        >
          Explore All
        </a>
      </header>
      <div className="scrollbar-hide -mx-6 flex gap-3 overflow-x-auto px-6 pb-2">
        {category.movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </div>
    </section>
  );
}
