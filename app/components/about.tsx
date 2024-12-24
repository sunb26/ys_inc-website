export const About = () => {
  return (
    <section id="about" className="bg-dark-blue">
      <div className="flex flex-row w-full">
        <img src="/hero.png" className="w-1/2" />
        <div className="w-1/2">
          <h2 className="text-4xl text-white font-bold pl-10 pt-7 underline">About</h2>
          <p className="text-white pl-10 pt-4 text-lg">
            Duis a est non diam porttitor lobortis. Integer ullamcorper justo lorem, sed vehicula
            sem venenatis eu. Donec neque quam, fringilla vel facilisis eget, rhoncus ut augue.
          </p>
        </div>
      </div>
    </section>
  );
}