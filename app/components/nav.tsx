import { Button } from "@/components/ui/button";
import {  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
 } from "@/components/ui/sheet";
 import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import Image from "next/image";
import {NavLinks} from "@/lib/data"
import { FaAlignRight ,FaRegCircleUser ,FaAngleDown ,FaCartShopping   } from "react-icons/fa6";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import UserAccountBtn from "./user-account-btn";
import { cn } from "@/lib/utils";
const Navbar = async () => {
  const session = await getServerSession(authOptions)
  var userHere:boolean;
  if(session){
    userHere=false
  }else{
    userHere=true
  }
  return (
    <nav className="bg-white px-0 py-1 border lg:px-32">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <div className=" flex justify-center items-center gap-2">
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
          <DropdownMenu>
              <DropdownMenuTrigger asChild className={cn(userHere?'sm:hidden':'sm:visible','lg:hidden md:hidden')}>
                <span className=" flex justify-center items-center">
                  <UserAccountBtn/>
                  <FaAngleDown className=" size-5 text-Blue600"/>
                  </span>
              </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-3 rounded-xl drop-shadow-2xl">
          <DropdownMenuItem className="py-3">
            <FaRegCircleUser className=" size-5 text-Blue600 mr-2"/>
            <Link href={`/${session?.user.id}`} className=" font-semibold">Account Info</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-3">
            <FaCartShopping  className=" size-5 text-Blue600 mr-2"/>
            <Link href="/Cart" className=" font-semibold">Cart</Link>
          </DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
        </div>
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
                {
                  userHere&&(<Button variant="outline" className="border border-Blue600 mt-10 w-full flex justify-center items-center gap-2"> 
                      <FaRegCircleUser  className=" text-Blue600 text-base"/>
                      <Link href="/login" className="text-Blue600 text-sm font-extrabold">
                      Log In
                      </Link>
                  </Button>)
                
                }
            </ul>
            </SheetContent>
          </Sheet>
        </span>
        { 
          userHere?(
          <Button variant="outline" className="border border-Blue600 sm:hidden">
          <Link href="/login" className="text-Blue600 text-sm font-extrabold flex justify-between items-center gap-2">
          <FaRegCircleUser  className=" text-Blue600 text-lg"/>
            Log In
          </Link>
          </Button>
          ):(<UserAccountBtn className=" sm:hidden"/>)
        
        }
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
