import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="bg-dark-blue h-fit p-4 md:h-dvh-[75vh]">
      <div className="flex flex-col md:flex-row w-full h-full pt-8">
        <Image src="/about.avif" alt="About section image" className="container mx-auto md:flex-row size-1/2 md:w-min md:h-5/6 rounded-xl" width={500} height={100}/>
        <div className="w-full md:w-1/2 pr-10 h-fit">
          <h2 className="text-5xl text-white font-bold pl-10 underline">About</h2>
          <p className="text-white pl-10 pt-6 text-lg">
            Yachting Solutions Inc. primarily specializes in the purchasing and selling of late models Chris Craft sport boats and other high end sport boats in the 20 to 32 foot range.
            Our services include refurbishing of older Chris Craft sport boats, and we offer a wide range of services, including but not limited to fiberglass repairs, mechanical services, bright work,
             electrical troubleshooting, upholstery, canvas and structural repairs.
            <br />
            <br />
            We are located in the Niagara region of Ontario which has a long tradition of fiberglass boat manufacturing, starting in the mid 50s. The owner/principal of Yachting Solutions Inc has been involved
            in the yachting business for over 35 years and has manufactured over 200 yachts in the 55 to 75 foot range.
            <br />
            <br />
            Owner,
            <br />
            Jan Willem de Jong
          </p>
        </div>
      </div>
    </section>
  );
}