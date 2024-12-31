export function Footer() {
  return (
    <footer className="flex flex-wrap space-x-44 bg-dark-blue text-white p-4">
      <div className="text-xl font-bold pl-56">LOGO</div>
      <div className="flex flex-col items-left">
        <h2 className="text-lg font-bold underline">Contact</h2>
        <p>Email: <a href="mailto:sales@yachtingsolutionsinc.com" className="hover:underline">sales@yachtingsolutionsinc.com</a></p>
        <p>Phone: 289-241-8164</p>
      </div>
      <div className="flex flex-col items-left">
        <h2 className="text-lg font-bold underline">Location</h2>
        <p >St Catharines, Ontario,<br />Canada</p>
        </div>
      <div className="flex flex-col items-left">
        <h2 className="text-lg font-bold underline">Socials</h2>
        <p>Facebook Icon</p>
      </div>
    </footer>
  );
}