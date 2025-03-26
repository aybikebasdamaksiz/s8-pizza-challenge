import styled from "styled-components";

const Container = styled.div`
  margin-left: 7rem;
`;

const Button = styled.button`
  background: #fdc913;
  padding: 0.25em 1em;
  border: 2px solid #fdc913;
  border-radius: 3px;
  margin: 1rem;
`;

export default function OrderCounter({ orderCount, setOrderCount }) {
  const increaseCount = () => setOrderCount(orderCount + 1);
  const decreaseCount = () => {
    if (orderCount > 1) {
      setOrderCount(orderCount - 1);
    }
  };
  return (
    <Container>
      <Button className="barlow-regular" onClick={decreaseCount}>
        −
      </Button>
      <span className="barlow-regular">{orderCount}</span>
      <Button className="barlow-regular" onClick={increaseCount}>
        +
      </Button>
    </Container>
  );
}
