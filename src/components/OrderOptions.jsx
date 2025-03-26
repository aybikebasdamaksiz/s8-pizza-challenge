import styled from "styled-components";
import OrderDough from "./OrderDough";
import OrderSize from "./OrderSize";

const Container = styled.div`
  max-width: 40rem;
  margin-left: 7rem;
`;

const OrderOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15rem;
`;

const OptionColumn = styled.div`
  flex: 1;
`;

export default function OrderOptions({
  selectedSize,
  setSelectedSize,
  selectedDough,
  setSelectedDough,
}) {
  return (
    <Container>
      <OrderOptionsContainer>
        <OptionColumn>
          <OrderSize
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </OptionColumn>
        <OptionColumn>
          <OrderDough
            selectedDough={selectedDough}
            setSelectedDough={setSelectedDough}
          />
        </OptionColumn>
      </OrderOptionsContainer>
    </Container>
  );
}
