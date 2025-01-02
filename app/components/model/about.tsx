import Image from 'next/image';

export function About({ name="COMING SOON", imagePath="/about.png", desc="COMING SOON" }: { name: string, imagePath: string, desc: string }) {
  return (
    <section id="about" className="bg-slate-100 h-fit px-8 pt-16 md:h-[75vh]">
      <div className="flex flex-col md:flex-row w-full h-full pt-8">
        <Image src={imagePath} alt="Boat Model Image" className="container mx-auto md:flex-row size-1/2 md:w-4/12 md:h-5/6 rounded-xl" width={500} height={500}/>
        <div className="w-full md:w-1/2 pr-10">
          <h2 className="text-5xl text-dark-blue font-bold pl-10 pt-10 underline">{ name }</h2>
          <p className="text-dark-blue pl-10 pt-10 text-lg md:text-2xl">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
}