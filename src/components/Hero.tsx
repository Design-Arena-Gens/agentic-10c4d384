import Image from 'next/image';
import Link from 'next/link';
import { FiInfo } from 'react-icons/fi';
import { MdPlayArrow } from 'react-icons/md';
import type { Movie } from '@/lib/movies';

type HeroProps = {
  movie: Movie;
};

export function Hero({ movie }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex h-[75vh] w-full items-end overflow-hidden rounded-b-3xl bg-black md:h-[80vh]"
    >
      {movie.backdrop && (
        <Image
          src={movie.backdrop}
          alt={movie.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-netflix-gradient" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-20">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase text-neutral-300">
          <span className="rounded bg-netflix-red px-1.5 py-0.5 text-xs text-white">
            {movie.matchScore}% Match
          </span>
          <span>{movie.year}</span>
          <span className="rounded border border-neutral-400 px-1 text-xs">
            {movie.rating}
          </span>
          <span>{movie.duration}</span>
        </div>
        <h1 className="max-w-3xl text-4xl font-black drop-shadow-lg md:text-6xl">
          {movie.title}
        </h1>
        <p className="max-w-xl text-lg text-neutral-200 md:text-xl">
          {movie.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#trending"
            className="flex items-center gap-2 rounded bg-white px-6 py-3 text-base font-semibold text-black transition hover:opacity-90"
          >
            <MdPlayArrow className="text-2xl" aria-hidden />
            Watch Now
          </Link>
          <button className="flex items-center gap-2 rounded bg-neutral-600/80 px-6 py-3 text-base font-semibold transition hover:bg-neutral-500/80">
            <FiInfo className="text-xl" aria-hidden />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
