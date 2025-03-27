import styled from "styled-components";
import OrderInfo from "./orderinfo";
import OrderOptions from "./OrderOptions";
import PizzaToppings from "./PizzaToppings";
import OrderNote from "./OrderNote";
import OrderCounter from "./ordercounter";
import OrderSummary from "./ordersummary";

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-family: "Roboto Condensed", sans-serif;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export default function OrderMain({
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
    <Container>
      <OrderInfo pizzaBasePrice={pizzaBasePrice} />
      <OrderOptions
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedDough={selectedDough}
        setSelectedDough={setSelectedDough}
      />
      <PizzaToppings
        selectedToppings={selectedToppings}
        setSelectedToppings={setSelectedToppings}
      />
      <OrderNote orderNote={orderNote} setOrderNote={setOrderNote} />

      <BottomSection>
        <OrderCounter orderCount={orderCount} setOrderCount={setOrderCount} />
        <OrderSummary
          selectedToppings={selectedToppings}
          orderCount={orderCount}
          toppingPrice={toppingPrice}
          pizzaBasePrice={pizzaBasePrice}
        />
      </BottomSection>
    </Container>
  );
}
