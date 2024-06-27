import { Button } from "@/components/ui/button";

const OrderSummary = () => {
  return (
    <div className="flex flex-col justify-center items-start p-4 w-full bg-white border border-solid border-lightBlue rounded-lg gap-8">
      <div className="w-full flex justify-center flex-col items-start font-normal gap-3 border-b-2 border-primary py-3">
        <h1 className="text-4xl">Order Summary</h1>
        <h3 className="text-primary text-xl">You have in your cart</h3>
      </div>
      <div className="flex flex-col italic font-bold text-xs gap-2">
        <div>
          <span>iceAmericano</span>
          <span className="text-primary">x</span>
          <span>3</span>
        </div>
        <div>
          <span>iceAmericano</span>
          <span className="text-primary">x</span>
          <span>3</span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center *:flex *:flex-col italic font-bold text-xs *:gap-2">
        <div>
          <span>Total</span>
          <span>Delivery fee</span>
          <span>Service fee</span>
        </div>
        <div>
          <span>$3.99</span>
          <span>$1.2</span>
          <span>$0.99</span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 border-t-2 border-lightGrey py-2">
        <div className="flex justify-between items-center text-lg font-normal">
          <span>Total Amount</span>
          <span>$0.99</span>
        </div>
        <div className="w-full">
          <Button className="w-full text-xs font-extrabold">CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
