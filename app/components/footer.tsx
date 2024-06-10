import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="italic text-tetiary font-bold text-xs pt-32 pb-4">
      <div className="flex justify-between p-4 border-t border-b border-tetiary items-center lg:px-8">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/MohammedCoffeeLogo.svg"
              height={75}
              width={75}
              alt="Logo"
            />
          </Link>
          <p>We're Always Here To Help <br />
          Reach out to us through any of these support channels </p>
        </div>
        <div className="flex">
          <Link href="/">
            <Image src="/info.svg" height={70} width={70} alt="Logo" />
          </Link>
          <Link href="/">
            <Image src="/mail.svg" height={70} width={70} alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="flex justify-between flex-wrap p-4 lg:px-32">
        <div>
          <ul className="flex justify-center items-center *:text-tetiary *:p-1">
          <Button variant='link'><Link href="/">Home</Link></Button>
          <Button variant='link'><Link href="">Menu</Link></Button>
          <Button variant='link'><Link href="">About Us</Link></Button>
          <Button variant='link'><Link href="">New Stuff</Link></Button>
          <Button variant='link'><Link href="">Contact</Link></Button>
          </ul>
        </div>
        <div className="pt-2">
          <ul className="flex items-center *:text-tetiary *:p-1">
          <Button variant='link'><Link href="">Privacy Policy |</Link></Button>
          <Button variant='link'><Link href="">Refund Policy |</Link></Button>
          <Button variant='link'><Link href="">Terms of Use |</Link></Button>
          <Button variant='link'><Link href="">Disclaimer</Link></Button>
          </ul>
        </div>
      </div>

      <div className="w-4/5 m-auto border-tetiary border-t"></div>

      <div className="flex justify-between flex-wrap px-4 pt-4 lg:px-32">
        <p className="text-primaryDark">Copyright© 2023-2024 @ MCoffee</p>
        <div className="flex">
          <Link href="">
            <Image src="/linkedIn.svg" height={30} width={30} alt="Logo" />
          </Link>
          <Link href="" className="px-2">
            <Image src="/insta.svg" height={30} width={30} alt="Logo" />
          </Link>
          <Link href="">
            <Image src="/facebook.svg" height={30} width={30} alt="Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
