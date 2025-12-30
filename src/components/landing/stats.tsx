
export function Stats() {
  const stats = [
    { value: "1200+", label: "Apps tested" },
    { value: "6500+", label: "Verified testers" },
    { value: "15,000+", label: "Test sessions completed" },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-[#0A0627] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
              <p className="text-sm text-primary-foreground/70 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
