import Image from 'next/image';
import { FiInfo, FiPlus } from 'react-icons/fi';
import type { Movie } from '@/lib/movies';

type MovieCardProps = {
  movie: Movie;
  index?: number;
};

export function MovieCard({ movie, index }: MovieCardProps) {
  return (
    <article className="group relative h-48 min-w-[175px] cursor-pointer overflow-hidden rounded-lg bg-neutral-800 transition hover:scale-105 hover:shadow-lg md:h-52 md:min-w-[200px]">
      <Image
        src={movie.cover}
        alt={movie.title}
        fill
        sizes="200px"
        className="object-cover transition duration-300 group-hover:opacity-20"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-0 transition duration-300 group-hover:opacity-100">
        <header className="flex items-start justify-between">
          <span className="rounded bg-netflix-red px-1.5 py-0.5 text-xs font-semibold">
            {movie.matchScore}% Match
          </span>
          <button className="rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80">
            <FiPlus aria-hidden />
            <span className="sr-only">Add to My List</span>
          </button>
        </header>
        <div>
          {typeof index === 'number' && (
            <span className="mb-1 block text-sm font-bold text-neutral-300">
              #{index + 1} in {movie.genre[0]}
            </span>
          )}
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-neutral-200">
            <span>{movie.year}</span>
            <span className="rounded border border-neutral-400 px-1 py-0.5">
              {movie.rating}
            </span>
            <span>{movie.duration}</span>
          </div>
          <p className="mt-2 line-clamp-3 text-sm text-neutral-300">
            {movie.description}
          </p>
        </div>
        <footer className="flex items-center justify-between text-sm text-neutral-300">
          <span>{movie.genre.join(' • ')}</span>
          <FiInfo aria-hidden />
        </footer>
      </div>
    </article>
  );
}
