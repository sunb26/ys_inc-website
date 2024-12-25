import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="bg-dark-blue h-fit p-4 md:h-[75vh]">
      <div className="flex flex-col md:flex-row w-full h-full pt-8">
        <Image src="/about.png" alt="About section image" className="container mx-auto md:flex-row md:w-4/12 h-5/6 rounded-xl" width={500} height={500}/>
        <div className="w-full md:w-1/2 pr-10">
          <h2 className="text-5xl text-white font-bold pl-10 pt-10 underline">About</h2>
          <p className="text-white pl-10 pt-10 text-lg">
            Duis a est non diam porttitor lobortis. Integer ullamcorper justo lorem, sed vehicula
            sem venenatis eu. Donec neque quam, fringilla vel facilisis eget, rhoncus ut augue.
          </p>
        </div>
      </div>
    </section>
  );
}