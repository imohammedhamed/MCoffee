import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Landing = () => {
  return (
    <div>
      {/* landing */}
      <div className="bg-gradient-to-t from-primary/25 to-secondary pt-16 pb-8 lg:pt-14 lg:pb-16">
        <div className="flex flex-wrap justify-center items-center border-b-2 border-tetiary rounded-3xl lg:flex-row-reverse lg:px-32 lg:gap-16">
          <div className="relative">
            {/* home images */}
            <div className="absolute -left-5 *:absolute w-72 h-60 lg:w-96 ">
              <div className="w-10 h-10 top-20 left-0 -rotate-45 lg:w-14 lg:h-14 lg:top-24">
                <Image src="/brewing2.png" fill alt="brewing" />
              </div>
              <div className="w-10 h-10 left-32 -top-8 lg:w-14 lg:h-14">
                <Image src="/CoffeeBeans.png" fill alt="coffeebeans" />
              </div>
              <div className="w-10 h-10 -right-4 top-24 rotate-45 lg:w-14 lg:h-14 lg:-right-12">
                <Image src="/iceAmericano-it.png" fill alt="americano" />
              </div>
            </div>

            <div className="p-8 w-72 h-60 lg:p-0 lg:w-96 lg:h-[30rem]">
              <Image src="/illustration3.svg" fill alt="Logo" />
            </div>
          </div>

          {/* landing text */}
          <div className="flex flex-col justify-center items-center text-center pb-8 lg:text-start lg:items-start lg:pb-4">
            <div>
              <p className="italic font-bold text-xs text-tetiary lg:text-lg lg:font-normal lg:not-italic">
                MCoffee: Your Online Destination for Premium Coffee
              </p>
              <h1 className="text-2xl font-normal text-tetiary py-2 lg:font-bold lg:text-5xl">
                Where Every Cup <br />
                Holds a Moment of Magic
              </h1>
              <p className="italic text-xs text-primaryDark lg:not-italic lg:font-normal lg:text-lg">
                Find the perfect brew to enhance your workday, and <br />
                enjoy the finest coffee delivered right to your door.
              </p>
            </div>

            <div className="flex justify-center items-center gap-4 py-4">
              <div className="flex *:-mx-2">
                <Avatar>
                  <AvatarImage src="/" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="text-tetiary italic text-xs font-bold">
                  <span className="text-primary">+200 Users </span>join us Now
                </p>
                <p className="italic text-xs text-primaryDark">
                  Membership or SginUp
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button>
                <Link
                  href="/login"
                  className="text-secondary text-sm font-extrabold"
                >
                  Join Us
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="border border-tetiary text-sm font-extrabold"
              >
                <Link href="/login" className="text-tetiary">
                  Browse Menu
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* news letter */}
      <section className="px-4 py-40 text-center">
        <div className="flex flex-col justify-center items-center pb-12">
          <h1 className="text-4xl font-normal">NewsLetter</h1>
          <div className="w-20 border-tetiary border mb-2"></div>
          <div className="w-10 border-tetiary border"></div>
        </div>

        {/* smmerdrinks 01 */}
        <div className="w-full flex flex-col justify-center items-center text-center text-secondaryLight mb-4 *:w-full *:h-80 lg:*:w-1/2 lg:flex-row lg:px-32">
          <div className="bg-tetiary px-4 py-8 flex flex-col justify-between items-center">
            <div>
              <h2 className="text-3xl text-primaryLight font-normal">
                Summer drinks
              </h2>
              <p className="italic">Buy one fall drink, get one free</p>
            </div>
            <p className="italic">
              Rewards members get one free handcrafted fall drink with <br />
              purchase of any fall beverage, every Thursday afternoon in
              September.
            </p>
            <Button variant="ghost" className="w-24 border border-primary">
              <Link href="/login" className="text-sm font-extrabold">
                Oder Now
              </Link>
            </Button>
          </div>
          <div className="bg-primaryLight px-4 py-8">
            <div className="w-full h-full bg-summerBg01 bg-contain relative">
              <Image
                src="/summerdrinks-sections1.png"
                // layout="fill"
                fill
                objectFit="contain"
                alt="summer drinks"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* summerdrinks 02 */}
        <div className="w-full flex flex-col justify-center items-center text-center text-secondaryLight *:w-full *:min-h-80 *:h-80 lg:*:w-1/2 lg:flex-row-reverse lg:px-32">
          <div className="bg-tetiary px-4 py-8 flex flex-col justify-between items-center">
            <div>
              <h2 className="text-3xl text-primaryLight font-normal">
                Member Ship
              </h2>
              <p className="italic">Buy 9 coffees and the 10th is on us!</p>
            </div>
            <p className="italic">
              Start your day with a cup of coffee. Choose your favorite coffee
              here <br />
              Get two coffee cups with a special discount
            </p>
            <Button variant="ghost" className="w-24 border border-primary">
              <Link href="/login" className="text-sm font-extrabold">
                Join Now
              </Link>
            </Button>
          </div>
          <div className="bg-primaryLight px-4 py-8">
            <div className="w-full h-full bg-summerBg02 bg-contain relative">
              <Image
                src="/illustration8.svg"
                // layout="fill"
                fill
                objectFit="contain"
                alt="summer drinks"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section>
        <div>
          <div className="flex flex-col justify-center items-center pb-12">
            <h1 className="text-4xl font-normal">About Us</h1>
            <div className="w-20 border-tetiary border mb-2"></div>
            <div className="w-10 border-tetiary border"></div>
          </div>
        </div>

        <div className="bg-tetiary w-full p-8 text-center text-secondaryLight relative lg:py-16 lg:px-32">
          <div className="absolute -top-3 left-4 lg:left-32">
            <Image src="/quotes.svg" width={35} height={35} alt="quotes" />
          </div>
          We've 10 years' experience of crafting the finest quality coffee. From
          revolutionary methods and commitment to quality to unforgettable
          successes that have made Costa Coffee the Nation's Favourite coffee
          shop, our story is as unique as our coffee
        </div>
      </section>

      {/* imgs */}
      {/* <div>
        <img src="/illustration1.svg" alt="" />
        <img src="/illustration2.svg" alt="" />
        <img src="/illustration4.svg" alt="" />
        <img src="/illustration5.svg" alt="" />
        <img src="/illustration6.svg" alt="" />
        <img src="/illustration7.svg" alt="" />
        <img src="/illustration8.svg" alt="" />
      </div> */}
    </div>
  );
};

export default Landing;
