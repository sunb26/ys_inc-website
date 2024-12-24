export const Showroom = () => {
  const models = [
    { id: 1, name: 'Model 1', image: '/next.svg' },
    { id: 2, name: 'Model 2', image: '/next.svg' },
    { id: 3, name: 'Model 3', image: '/next.svg' },
  ];

  return (
    <section id="showroom" className="py-16 bg-slate-100 pt-3">
      <h2 className="text-4xl font-bold underline text-black text-center pb-8">Showroom</h2>
      <div className="text-center bg-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-8 pr-8">
          {models.map((model) => (
            <div key={model.id} className="bg-white shadow-md rounded-lg p-4">
              <img src={model.image} alt={model.name} className="rounded-lg mb-4 transition-transform transform hover:scale-105" />
              <h3 className="text-lg font-semibold text-black">{model.name}</h3>
              <p className="text-gray-600 text-left">Description</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};