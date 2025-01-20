import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 md:flex-row flex-wrap md:space-x-44 bg-slate-300 text-dark-blue p-4">
      <div className="size-fit md:pl-24">
        <Image
          src="/logo.png"
          alt="Yachting Solutions Inc. Logo"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col items-left">
        <h2 className="text-lg font-bold underline">Contact</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:sales@yachtingsolutionsinc.com"
            className="hover:underline"
          >
            sales@yachtingsolutionsinc.com
          </a>
        </p>
        <p>Phone: 289-241-8164</p>
      </div>
      <div className="flex flex-col items-left">
        <h2 className="text-lg font-bold underline">Location</h2>
        <p>
          St Catharines, Ontario,
          <br />
          Canada
        </p>
      </div>
      <div className="flex flex-col items-left">
      </div>
    </footer>
  );
}
