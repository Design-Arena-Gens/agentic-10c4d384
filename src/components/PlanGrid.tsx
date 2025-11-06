import { plans } from '@/lib/movies';

export function PlanGrid() {
  return (
    <section
      id="plans"
      className="space-y-8 rounded-3xl bg-black/60 px-6 py-10 backdrop-blur md:px-10"
    >
      <header className="space-y-2">
        <h2 className="text-2xl font-bold md:text-3xl">
          Choose your plan, cancel anytime
        </h2>
        <p className="text-neutral-300">
          Stream on any device with unlimited movies, series, and documentaries.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className="space-y-6 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 transition hover:border-netflix-red hover:shadow-[0_0_25px_rgba(229,9,20,0.25)]"
          >
            <header className="space-y-2">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-3xl font-bold text-netflix-red">{plan.price}</p>
              <p className="text-sm text-neutral-400">{plan.quality}</p>
            </header>
            <ul className="space-y-3 text-sm text-neutral-200">
              {plan.devices.map((device) => (
                <li key={device} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-netflix-red" />
                  {device}
                </li>
              ))}
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-netflix-red" />
                Cancel anytime
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-netflix-red" />
                No ads, ever
              </li>
            </ul>
            <button className="w-full rounded bg-netflix-red py-2 text-sm font-semibold uppercase tracking-wide transition hover:bg-red-700">
              Select
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
