import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Div = styled.div`
  padding: 0em 5em;
  border: 2px solid #5f5f5f;
  border-radius: 5px;
`;
const Button = styled.button`
  background: #fdc913;
  padding: 1em 5em;
  border: 2px solid #fdc913;
  border-radius: 5px;
`;

export default function OrderSummary({
  selectedToppings,
  orderCount,
  toppingPrice,
  pizzaBasePrice,
}) {
  const toppingsTotal = selectedToppings.length * toppingPrice;
  const totalPrice = (pizzaBasePrice + toppingsTotal) * orderCount;
  const history = useHistory();

  const handleClick = () => {
    history.push("/success");
  };

  return (
    <Div>
      <h2 className="barlow-semibold">Sipariş Toplamı</h2>
      <p className="barlow-medium">Seçimler: {toppingsTotal}₺</p>
      <p className="barlow-medium">Toplam: {totalPrice}₺</p>
      <Button onClick={handleClick}>Sipariş Ver</Button>
    </Div>
  );
}
