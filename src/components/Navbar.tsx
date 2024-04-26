"use client";
import Link from "next/link";
import { toKebabCase } from "@/utils/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
   const navMenus = ["Home", "About", "Contact Us"];
   const pathName = usePathname();
   return (
      <header className="flex bg-black p-2">
         {navMenus.map((e) => (
            <div key={e} className="p-4">
               <Link
                  className={`hover:text-gray-400 cursor-pointer ${
                     pathName === (e === "Home" ? "/" : `/${toKebabCase(e)}`)
                        ? "text-red-400"
                        : "text-white"
                  }`}
                  href={e === "Home" ? "/" : `/${toKebabCase(e)}`}>
                  {e}
               </Link>
            </div>
         ))}
      </header>
   );
}