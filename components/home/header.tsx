"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const router = useRouter();
  const pathName = usePathname();

  const handleNavigation = (sectionId: string) => {
    if (pathName === "/") {
      // Scroll to the section with the section ID
      document.location.href = `${sectionId}`;
    } else {
      // Navigate to the homepage with the section ID as a hash
      router.push(`/${sectionId}`);
    }
  };

  return (
    <header className="bg-slate-300 text-white p-4 text-center fixed top-0 left-0 right-0 z-50 border-b-2 border-white">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="font-bold cursor-pointer">
          <a onClick={() => handleNavigation("#home")}>
            <Image
              src="/logo.png"
              alt="Yachting Solutions Inc. Logo"
              width={100}
              height={100}
            />
          </a>
        </div>
        <ul className="flex gap-6">
          <li>
            <a
              className="hover:underline cursor-pointer text-dark-blue"
              onClick={() => handleNavigation("#about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:underline cursor-pointer text-dark-blue"
              onClick={() => handleNavigation("#showroom")}
            >
              Showroom
            </a>
          </li>
          <li>
            <a
              className="hover:underline cursor-pointer text-dark-blue"
              onClick={() => handleNavigation("#contact")}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
