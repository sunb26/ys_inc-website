
export function Specifications({ specs = [] }) {
  return (
    <section className={`bg-slate-100`}>
      <h2 className="text-dark-blue p-8 text-left text-5xl font-bold underline">Specifications</h2>
      <p>{specs}</p>
    </section>
  );
};