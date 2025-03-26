import styled from "styled-components";
import { useState } from "react";
import OrderInfo from "./orderinfo"; /*css ok*/
import OrderOptions from "./OrderOptions"; /*css ok*/
import PizzaToppings from "./PizzaToppings"; /*css ok*/
import OrderNote from "./OrderNote"; /**/
import OrderCounter from "./ordercounter"; /**/
import OrderSummary from "./ordersummary"; /**/

const pizzaBasePrice = 85.5;

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export default function OrderMain() {
  const [selectedSize, setSelectedSize] = useState("Orta");
  const [selectedDough, setSelectedDough] = useState("Standart");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [orderNote, setOrderNote] = useState("");
  const [orderCount, setOrderCount] = useState(1);

  const toppingPrice = 5;

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
