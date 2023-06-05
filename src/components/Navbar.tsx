import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import AddButton from "./UI/AddButton";

const Navbar = async () => {
  return (
    <div className="fixed backdrop-blur-sm bg-slate-100 z-50 top-0 left-0 right-0 h-28 flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="">
          <Image
            className="image-light "
            src="/assets/logo.svg"
            alt="iswanjumat.com"
            width={50}
            height={50}
          />
        </Link>

        <div className="hidden md:flex gap-4">
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
