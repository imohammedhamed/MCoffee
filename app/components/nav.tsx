import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {NavLinks} from "@/lib/data"
const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-1 border lg:px-32">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <span>
          <Link href="/">
            <Image
              src="/MohammedCoffeeLogo.svg"
              height={75}
              width={75}
              alt="Logo"
            />
          </Link>
        </span>
        <ul className="flex *:px-2 justify-center items-center sm:hidden *:text-tetiary">
          {NavLinks.map(link=>{
            return(
                <Link key={link.path} href={link.path} className=" text-base text-tetiary font-medium hover:text-primary" >{link.Name}</Link>
            )
          })}
        </ul>
      </div>
      <div>
        <span className="lg:hidden md:hidden">
          <Image
            src="/menuIcon.svg"
            height={35}
            width={40}
            alt="Logo"
          />
        </span>
        <Button variant="outline" className="border border-primary sm:hidden">
          <Image
            src="/signinIcon.svg"
            height={25}
            width={25}
            alt="Logo"
            className="pr-2"
          />
          <Link href="/login" className="text-primary text-sm font-extrabold">
            Sign Up
          </Link>
        </Button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
