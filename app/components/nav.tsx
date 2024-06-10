import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-1 border lg:px-32">
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
        <ul className="flex *:px-4 justify-center items-center sm:hidden *:text-tetiary">
          <Button variant='link'><Link href="/">Home</Link></Button>
          <Button variant='link'><Link href="">Menu</Link></Button>
          <Button variant='link'><Link href="">About Us</Link></Button>
          <Button variant='link'><Link href="">New Stuff</Link></Button>
          <Button variant='link'><Link href="">Contact</Link></Button>
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
    </nav>
  );
};

export default Navbar;
