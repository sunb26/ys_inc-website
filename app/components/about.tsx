export const About = () => {
  return (
    <section id="about" className="bg-dark-blue h-[75vh]">
      <div className="flex flex-row w-full h-full">
        <img src="/about.png" className="w-1/2" />
        <div className="w-1/2 pr-10">
          <h2 className="text-4xl text-white font-bold pl-10 pt-10 underline">About</h2>
          <p className="text-white pl-10 pt-10 text-lg">
            Duis a est non diam porttitor lobortis. Integer ullamcorper justo lorem, sed vehicula
            sem venenatis eu. Donec neque quam, fringilla vel facilisis eget, rhoncus ut augue.
          </p>
        </div>
      </div>
    </section>
  );
}