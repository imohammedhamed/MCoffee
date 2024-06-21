import { Button } from "@/components/ui/button";
import {  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
 } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import {NavLinks} from "@/lib/data"
import { FaAlignRight } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="bg-white px-0 py-1 border lg:px-32">
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
                <Link key={link.path} href={link.path} className=" text-base text-DarkBlue font-semibold hover:text-Blue600" >{link.Name}</Link>
            )
          })}
        </ul>
      </div>
      <div>
        <span className="lg:hidden md:hidden">
          <Sheet>
          <SheetTrigger><FaAlignRight className=" text-Blue600 text-4xl mt-2 mr-5"/></SheetTrigger>
            <SheetContent>
              <SheetHeader className="border-b border-Blue600 py-2">
                <SheetTitle className="text-Blue600">NavBar Menu</SheetTitle>
              </SheetHeader>
            <ul className="flex flex-col *:py-2 justify-center items-start *:text-DarkBlue">
                {NavLinks.map(link=>{
                  return(
                      <Link key={link.path} href={link.path} className=" text-base font-semibold hover:text-Blue600" >{link.Name}</Link>
                  )
                })}
            <Button variant="outline" className="border border-Blue600 w-full">
              <Image
                src="/signinIcon.svg"
                height={25}
                width={25}
                alt="Logo"
                className="pr-2"
              />
              <Link href="/login" className="text-Blue600 text-sm font-extrabold">
              Log In
              </Link>
            </Button>
            </ul>
            </SheetContent>
          </Sheet>
        </span>
        <Button variant="outline" className="border border-Blue600 sm:hidden">
          <Image
            src="/signinIcon.svg"
            height={25}
            width={25}
            alt="Logo"
            className="pr-2"
          />
          <Link href="/login" className="text-Blue600 text-sm font-extrabold">
            Log In
          </Link>
        </Button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
