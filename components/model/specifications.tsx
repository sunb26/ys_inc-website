interface SpecificationsProps {
  specs: string[];
}

export function Specifications({ specs = [] } : SpecificationsProps) {
    // Calculate the middle index to split the array
    const middleIndex = Math.ceil(specs.length / 2);
  
    const leftColumnSpecs = specs.slice(0, middleIndex);
    const rightColumnSpecs = specs.slice(middleIndex);

  return (
    <section className={`bg-slate-100`}>
      <h2 className="text-dark-blue p-8 pl-10 md:pl-28 text-left text-5xl font-bold underline">Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-28 pb-8">
        {/* Left Column */}
        <ul className="text-dark-blue list-disc text-xl ml-4 font-bold">
          {leftColumnSpecs.map((specification, index) => (
            <li key={`left-${index}`} className="py-4">
              {specification}
            </li>
          ))}
        </ul>
        
        {/* Right Column */}
        <ul className="text-dark-blue list-disc text-xl ml-4 font-bold">
          {rightColumnSpecs.map((specification, index) => (
            <li key={`right-${index}`} className="py-4">
              {specification}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};