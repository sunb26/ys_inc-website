export function Footer() {
  return (
    <footer className="flex flex-wrap gap-x-52 bg-dark-blue text-white p-4">
    <div className="text-xl font-bold pl-64">LOGO</div>
    <div className="flex flex-col items-left">
      <h2 className="text-lg font-bold underline">Contact</h2>
      <p>Email: <a href="mailto:email@domain.com" className="hover:underline">email@domain.com</a></p>
      <p>Phone: 999-999-9999</p>
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