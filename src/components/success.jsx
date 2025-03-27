import styled from "styled-components";
import logo from "/images/iteration-1-images/logo.svg";

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ce2829;
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
`;

const Logo = styled.img`
  width: 15rem;
  height: auto;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 100;
`;

const SubHeading = styled.p`
  font-family: "Satisfy", cursive;
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffcc00;
`;

const OrderDetails = styled.div`
  background: transparent;
  padding: 1.5rem;
  border-radius: 10px;
  font-size: 1.2rem;
  text-align: left;
  max-width: 400px;
`;

const OrderInfo = styled.p`
  font-size: 1.2rem;
  margin: 5px 0;
`;

const PriceBox = styled.div`
  margin-top: 2rem;
  padding: 3rem;
  border: 1px solid white;
  border-radius: 10px;
  text-align: center;
  width: 250px;
`;

const PriceItem = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;
`;

export default function Success({
  selectedSize,
  selectedDough,
  selectedToppings,
  orderCount,
  pizzaBasePrice,
  toppingPrice,
}) {
  const toppingsPrice = selectedToppings.length * toppingPrice;
  const totalPrice = pizzaBasePrice + toppingsPrice;

  return (
    <SuccessContainer>
      <Logo src={logo} alt="Teknolojik Yemekler" />
      <SubHeading>lezzetin yolda</SubHeading>
      <Heading>SİPARİŞ ALINDI</Heading>
      <OrderDetails>
        <OrderInfo>
          <strong>Boyut:</strong> {selectedSize}
        </OrderInfo>
        <OrderInfo>
          <strong>Hamur:</strong> {selectedDough}
        </OrderInfo>
        <OrderInfo>
          <strong>Ek Malzemeler:</strong> {selectedToppings.join(", ")}
        </OrderInfo>
      </OrderDetails>
      <PriceBox>
        <PriceItem>
          <p>Sipariş Toplamı</p>
          <strong>Seçimler </strong> {toppingsPrice.toFixed(2)}₺
        </PriceItem>
        <PriceItem>
          <strong>Toplam </strong> {totalPrice.toFixed(2)}₺
        </PriceItem>
      </PriceBox>
    </SuccessContainer>
  );
}
