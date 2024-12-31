import Image from 'next/image';

export function About({ name="Unknown" }) {
  return (
    <section id="about" className="bg-slate-100 h-fit px-8 pt-16 md:h-[75vh]">
      <div className="flex flex-col md:flex-row w-full h-full pt-8">
        <Image src="/about.png" alt="Boat Model Image" className="container mx-auto md:flex-row size-1/2 md:w-4/12 md:h-5/6 rounded-xl" width={500} height={500}/>
        <div className="w-full md:w-1/2 pr-10">
          <h2 className="text-5xl text-dark-blue font-bold pl-10 pt-10 underline">{ name }</h2>
          <p className="text-dark-blue pl-10 pt-10 text-lg">
            Duis a est non diam porttitor lobortis. Integer ullamcorper justo lorem, sed vehicula
            sem venenatis eu. Donec neque quam, fringilla vel facilisis eget, rhoncus ut augue.
          </p>
        </div>
      </div>
    </section>
  );
}