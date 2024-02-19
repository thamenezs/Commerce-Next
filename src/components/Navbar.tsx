import Image from "next/image";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {

  const [ openMenu, setOpenMenu ] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center w-full h-20 text-black py-11 px-16 bg-white">
        <div className="flex">
          <Link href={"/"}>
            <Image
              src="/nice.png"
              alt="Logo do estudio"
              width={60}
              height={60}
            />
          </Link>
          <div className="flex px-11 items-center">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <Link
            href={"/"}
            className="inline-block hover:underline underline-offset-8 decoration-2 decoration-sky-500 scroll-smooth"
          >
            Home
          </Link>
          <Link
            href={"#products"}
            className="inline-block hover:underline underline-offset-8 decoration-2 decoration-sky-500"
          >
            Products
          </Link>
          <Link
            href={"#friends"}
            className="inline-block hover:underline underline-offset-8 decoration-2 decoration-sky-500"
          >
            Clientes
          </Link>
          <Link
            href={"#contact"}
            className="inline-block hover:underline underline-offset-8 decoration-2 decoration-sky-500"
          >
            Contate-nos
          </Link>
        </div>
      </div>
    </nav>
  );
}
