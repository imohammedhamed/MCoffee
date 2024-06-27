import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {NavLinks,SocialLinks} from  "@/lib/data"

const Footer = () => {
  return (
<<<<<<< HEAD
    <div className=" italic text-darkBlue font-bold text-xs pt-32">
      <div className=" bg-white">
      <div className=" border-t border-b border-darkBlue">
        <div className=" container mx-auto flex justify-between p-4 items-center lg:px-8">
=======
    <footer className=" italic text-DarkBlue font-bold text-xs pt-32">
      <div className=" bg-white">
      <div className=" border-t border-b border-lightBlue">
        <div className=" container mx-auto flex justify-between p-1 items-center ">
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/MohammedCoffeeLogo.svg"
              height={75}
              width={75}
              alt="Logo"
            />
          </Link>
<<<<<<< HEAD
          <p className=" text-darkGrey text-sm lg:text-base">{`We're Always Here To Help`} <br />
=======
          <p className=" text-DarkBlue font-semibold text-sm lg:text-base">{`We're Always Here To Help`} <br />
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
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

      <div className="container mx-auto flex justify-between flex-wrap p-4">
        <div>
<<<<<<< HEAD
          <ul className="flex justify-center items-center *:text-darkBlue *:p-1">
=======
          <ul className="flex justify-center items-center *:text-DarkBlue *:p-1">
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
            {NavLinks.map(link => {
              return(
                <Button key={link.path} variant='link'><Link href={link.path} className="text-base font-medium">{link.Name}</Link></Button>
              )
            })}
          </ul>
        </div>
        <div>
<<<<<<< HEAD
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
=======
          <ul className="flex items-center *:text-DarkBlue *:p-1">
          <Button variant='link'><Link href="" className="text-base font-medium">Privacy Policy</Link></Button>
          <Button variant='link'><Link href="" className="text-base font-medium"> Refund Policy</Link></Button>
          <Button variant='link'><Link href="" className="text-base font-medium">Terms of Use</Link></Button>
          </ul>
        </div>
      </div>
      <div className="container mx-auto w-full  m-auto border-DarkBlue border-t"></div>
      <div className="container mx-auto flex justify-between items-center flex-wrap px-4 pt-4 pb-5">
        <p className="text-DarkBlue">Copyright© 2023-2024 @ MCoffee</p>
        <div className="flex">
          {SocialLinks.map(link=>{
            return(
            <Link key={link.hrefUrl}  href={link.hrefUrl} className=" text-2xl lg:text-3xl pl-1 pr-1 hover:text-DarkBlue"> <link.icon/> </Link>
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
            )
          })}
        </div>
      
      </div>
    </div>
    </footer>
  );
};

export default Footer;
