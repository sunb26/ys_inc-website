interface HighlightsProps {
  highlights: string[];
}

export function Highlights({ highlights = [] } : HighlightsProps) {
  return (
    <section className={`bg-dark-blue`}>
      <h2 className="text-white p-8 pl-10 md:pl-28 text-left text-5xl font-bold underline">Highlights</h2>
      <ul className="px-32 text-white list-disc text-xl">
        {highlights.map(( highlight, index) => (
          <li key={index} className="py-4">{highlight}</li>
        ))}
      </ul>
    </section>
  );
};