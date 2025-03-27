import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Div = styled.div`
  background-color: #faf7f2;
  border: 2px solid #faf7f2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Button = styled.button`
  background: #fdc913;
  padding: 1em 10em;
  border: 2px solid #fdc913;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #f1b800;
  }

  &:disabled {
    background: #d3d3d3;
    border: 2px solid #d3d3d3;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export default function OrderSummary({
  selectedToppings = [],
  orderCount = 1,
  toppingPrice = 0,
  pizzaBasePrice = 0,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const toppingsTotal = selectedToppings.length * toppingPrice;
  const totalPrice = (pizzaBasePrice + toppingsTotal) * orderCount;

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    const orderData = {
      toppings: selectedToppings,
      quantity: orderCount,
      total_price: totalPrice,
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        orderData
      );
      console.log("Sipariş Başarılı:", response.data);
      history.push("/success");
    } catch (err) {
      console.error("Sipariş başarısız:", err);
      setError("Sipariş verilirken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Div>
      <h2>Sipariş Toplamı</h2>
      <p>Seçimler: {toppingsTotal}₺</p>
      <p>Toplam: {totalPrice}₺</p>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button onClick={handleClick} disabled={loading}>
        {loading ? "Sipariş Veriliyor..." : "Sipariş Ver"}
      </Button>
    </Div>
  );
}
