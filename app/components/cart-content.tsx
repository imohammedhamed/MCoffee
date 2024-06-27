import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaDeleteLeft, FaRecycle, FaTrash, FaTrashCan } from "react-icons/fa6";

const CartContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center p-3 w-full bg-white border border-solid border-lightBlue rounded-lg">
        <div className="basis-1/4 flex items-center justify-center">
          <Image
            src="/iceAmericano-it.png"
            alt="product img"
            title="Project img"
            width={90}
            height={90}
          />
        </div>
        <div className="basis-3/4 flex flex-col w-full">
          <div className="flex items-start justify-between pb-8 font-normal text-xl">
            <div>
              <h2>ice Americano</h2>
              <div className="font-bold italic text-xs text-lightGrey *:pr-1">
                <span>Regular</span>
                <span>Sigmature Blend</span>
                <span>No Milk</span>
              </div>
            </div>
            <div className="text-primary">$3.99</div>
          </div>
          <div className="flex justify-between items-center">
            <Button className="flex gap-2" variant="destructive">
              <FaTrashCan className="text-destructive text-xl" />
              <span className="hidden text-xs font-extrabold lg:flex text-destructive">
                Remove
              </span>
            </Button>
            <div className="bg-lightBlue rounded-lg font-extrabold">
              <Button
                className="bg-transparent text-primary font-extrabold text-base"
                variant="outline"
              >
                -
              </Button>
              <span>0</span>
              <Button
                className="bg-transparent text-primary font-extrabold text-base"
                variant="outline"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* second item to show ui */}
      <div className="flex justify-center items-center p-3 w-full bg-white border border-solid border-lightBlue rounded-lg">
        <div className="basis-1/4 flex items-center justify-center">
          <Image
            src="/iceAmericano-it.png"
            alt="product img"
            title="Project img"
            width={90}
            height={90}
          />
        </div>
        <div className="basis-3/4 flex flex-col w-full">
          <div className="flex items-start justify-between pb-8 font-normal text-xl">
            <div>
              <h2>ice Americano</h2>
              <div className="font-bold italic text-xs text-lightGrey *:pr-1">
                <span>Regular</span>
                <span>Sigmature Blend</span>
                <span>No Milk</span>
              </div>
            </div>
            <div className="text-primary">$3.99</div>
          </div>
          <div className="flex justify-between items-center">
            <Button className="flex gap-2" variant="destructive">
              <FaTrashCan className="text-destructive text-xl" />
              <span className="hidden text-xs font-extrabold lg:flex text-destructive">
                Remove
              </span>
            </Button>
            <div className="bg-lightBlue rounded-lg font-extrabold">
              <Button
                className="bg-transparent text-primary font-extrabold text-base"
                variant="outline"
              >
                -
              </Button>
              <span>0</span>
              <Button
                className="bg-transparent text-primary font-extrabold text-base"
                variant="outline"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
