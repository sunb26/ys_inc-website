/**
 * TODO: Fill in Header text when finalized.
 * 
 * Gets hero section of homepage
 * @returns Hero image component
 */

export function Hero() {
  return (
    <section id="home" className="relative grid grid-rows-3 grid-cols-3 h-[85vh] w-full bg-cover bg-center bg-hero-pattern rounded-md md:bg-cover bg-[length:100%_100%]">
      <div className="flex justify-center items-center col-start-1 col-end-2 row-start-2 row-end-3 pl-16">
        <h1 className="text-white text-4xl md:text-6xl font-bold"> 
        </h1>
      </div>
      {/* SVG Wave Divider */}
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-[10vh]"
          preserveAspectRatio="none"
        >
          <path 
            fill="#2c3b57"
            d="M0,288L24,250.7C48,213,96,139,144,122.7C192,107,240,149,288,165.3C336,181,384,171,432,138.7C480,107,528,53,576,32C624,11,672,21,720,69.3C768,117,816,203,864,202.7C912,203,960,117,1008,112C1056,107,1104,181,1152,186.7C1200,192,1248,128,1296,117.3C1344,107,1392,149,1416,170.7L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
};
