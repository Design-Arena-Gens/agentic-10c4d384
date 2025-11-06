const featureItems = [
  {
    title: 'Watch on any screen',
    description:
      'Stream on your phone, tablet, laptop, and TV with crystal-clear quality.',
    illustration:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Download and go',
    description:
      'Save your favorites for offline viewing and enjoy them without Wi-Fi.',
    illustration:
      'https://images.unsplash.com/photo-1510552776732-01acc9a4c174?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Profiles for everyone',
    description:
      'Create separate profiles and personalized recommendations for every member of the family.',
    illustration:
      'https://images.unsplash.com/photo-1524263470021-51792f9e997b?auto=format&fit=crop&w=900&q=80'
  }
];

export function FeatureSpotlight() {
  return (
    <section className="space-y-8">
      <header>
        <h2 className="text-2xl font-bold md:text-3xl">More to love</h2>
        <p className="text-neutral-300">
          Streamify delivers the complete cinematic experience, tailored for every moment.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {featureItems.map((feature) => (
          <article
            key={feature.title}
            className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80"
          >
            <div
              className="h-48 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${feature.illustration})` }}
            />
            <div className="space-y-3 p-6">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-neutral-300">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
