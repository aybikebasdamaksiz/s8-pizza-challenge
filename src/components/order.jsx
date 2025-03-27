import OrderHeader from "./orderheader.jsx";
import OrderMain from "./ordermain.jsx";
import Footer from "./footer";

export default function Order({
  selectedSize,
  setSelectedSize,
  selectedDough,
  setSelectedDough,
  selectedToppings,
  setSelectedToppings,
  orderNote,
  setOrderNote,
  orderCount,
  setOrderCount,
  pizzaBasePrice,
  toppingPrice,
}) {
  return (
    <>
      <OrderHeader />
      <OrderMain
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedDough={selectedDough}
        setSelectedDough={setSelectedDough}
        selectedToppings={selectedToppings}
        setSelectedToppings={setSelectedToppings}
        orderNote={orderNote}
        setOrderNote={setOrderNote}
        orderCount={orderCount}
        setOrderCount={setOrderCount}
        pizzaBasePrice={pizzaBasePrice}
        toppingPrice={toppingPrice}
      />
      <Footer />
    </>
  );
}
