import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const classNameLink =
  "inline-block hover:underline underline-offset-8 decoration-2 decoration-[#1DCF9D]";
function MenuOverlay() {
  return (
    <div className="absolute top-20 left-0 bg-white rounded-md shadow-md font-montserrat text-base ml-10 z-20 w-36 h-40 p-4">
      <ul>
        <li>
          <Link href={"/"} className={classNameLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"#products"} className={classNameLink}>
            Products
          </Link>
        </li>
        <li>
          <Link href={"#friends"} className={classNameLink}>
            Clients
          </Link>
        </li>
        <li>
          <Link href={"#adress"} className={classNameLink}>
            Adress
          </Link>
        </li>
        <li>
          <Link href={"#contact"} className={classNameLink}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div className="flex lg:justify-between justify-center items-center w-screen h-20 text-black py-16 lg:py-11 px-4 lg:px-16 bg-white">
        <div className="mobile-menu block lg:hidden">
          {!openMenu ? (
            <button
              onClick={() => setOpenMenu(true)}
              className="absolute top-10 left-0 px-3 py-2 text-slate-800"
            >
              <Bars3Icon className="h-8 w-8"></Bars3Icon>
            </button>
          ) : (
            <button
              onClick={() => setOpenMenu(false)}
              className="absolute top-10 left-0 px-3 py-2 text-slate-800"
            >
              <XMarkIcon className="h-8 w-8"></XMarkIcon>
            </button>
          )}
        </div>
        <div className="flex">
          <Link href={"/"}>
            <Image
              src="/nice.png"
              alt="Logo do estudio"
              width={60}
              height={60}
              className="hidden lg:block"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/logo-color 1.png"
              alt="Logo do estudio"
              width={150}
              height={150}
              className="block lg:hidden"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-row gap-5">
            <Link href={"/"} className={classNameLink}>
              Início
            </Link>
            <Link href={"#products"} className={classNameLink}>
              Serviços
            </Link>
            <Link href={"#friends"} className={classNameLink}>
              Clientes
            </Link>
            <Link href={"#adress"} className={classNameLink}>
              Endereço
            </Link>
            <Link href={"#contact"} className={classNameLink}>
              Contate-nos
            </Link>
          </div>
        </div>
      </div>
        {openMenu && <>
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity lg:hidden z-10" onClick={() => setOpenMenu(false)}></div>
          <MenuOverlay />
        </>}
    </nav>
  );
}
