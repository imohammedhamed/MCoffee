import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {NavLinks,SocialLinks} from  "@/lib/data"

const Footer = () => {
  return (
    <div className=" italic text-darkBlue font-bold text-xs pt-32">
      <div className=" bg-white">
      <div className=" border-t border-b border-darkBlue">
        <div className=" container mx-auto flex justify-between p-4 items-center lg:px-8">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/MohammedCoffeeLogo.svg"
              height={75}
              width={75}
              alt="Logo"
            />
          </Link>
          <p className=" text-darkGrey text-sm lg:text-base">{`We're Always Here To Help`} <br />
          {`Reach out to us through any of these support channels`} </p>
        </div>
        <div className="flex">
          <Link href="/">
            <Image src="/info.svg" height={50} width={50} alt="Logo" />
          </Link>
          <Link href="/">
            <Image src="/mail.svg" height={50} width={50} alt="Logo" />
          </Link>
        </div>
        </div>
        </div>

      <div className="container mx-auto flex justify-between flex-wrap p-4 lg:px-32">
        <div>
          <ul className="flex justify-center items-center *:text-darkBlue *:p-1">
            {NavLinks.map(link => {
              return(
                <Button key={link.path} variant='link'><Link href={link.path} className="text-base font-bold">{link.Name}</Link></Button>
              )
            })}
          </ul>
        </div>
        <div>
          <ul className="flex items-center *:text-darkBlue *:p-1">
          <Button variant='link'><Link href="" className="text-base font-bold">Privacy Policy</Link></Button>
          <Button variant='link'><Link href="" className="text-base font-bold"> Refund Policy</Link></Button>
          <Button variant='link'><Link href="" className="text-base font-bold">Terms of Use</Link></Button>
          </ul>
        </div>
      </div>
      <div className="container mx-auto w-3/5 m-auto border-darkBlue border-t"></div>
      <div className="container mx-auto flex justify-between items-center flex-wrap px-4 pt-4 pb-10 lg:px-32">
        <p className="text-darkGrey">Copyright© 2023-2024 @ MCoffee</p>
        <div className="flex">
          {SocialLinks.map(link=>{
            return(
            <Link key={link.hrefUrl}  href={link.hrefUrl} className=" text-2xl lg:text-3xl pl-1 pr-1 hover:text-darkGrey"> <link.icon/> </Link>
            )
          })}
        </div>
      
      </div>
    </div>
      </div>
  );
};

export default Footer;
