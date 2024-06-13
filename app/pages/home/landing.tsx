import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Landing = () => {
  return (
    <div>
      {/* landing */}
      {/* news letter */}
      <section className="px-4 py-40 text-center">
        <div className="flex flex-col justify-center items-center pb-12">
          <h1 className="text-4xl font-normal">NewsLetter</h1>
          <div className="w-20 border-tetiary border mb-2"></div>
          <div className="w-10 border-tetiary border"></div>
        </div>
        {/* smmerdrinks 01 */}
        <div className=" container mx-auto">
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
            <p className=" container mx-auto">
            {`We've 10 year's`} experience of crafting the finest quality coffee. From
            revolutionary methods and commitment to quality to unforgettable
            successes that have made Costa Coffee the {`Nation's`} Favourite coffee
            shop, our story is as unique as our coffee
            </p>
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
