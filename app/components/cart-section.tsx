import CartContent from "./cart-content";
import OrderSummary from "./order-summary";
import SectionHeading from "./section-heading";

const CartSection = () => {
  return (
    <div className="w-full px-5 lg:px-16">
      <SectionHeading>Shopping Cart</SectionHeading>
      <div className="py-2 text-DarkBlue font-normal text-xl">
        Your Products
      </div>
      <div className="w-full flex flex-col text-DarkBlue gap-4 lg:flex-row">
        <div className="lg:basis-3/5">
          <CartContent />
        </div>
        <div className="lg:basis-2/5">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartSection;
