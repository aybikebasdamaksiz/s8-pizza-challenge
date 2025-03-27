import styled from "styled-components";

const Container = styled.div`
  margin-left: 0rem;
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
      <Button onClick={decreaseCount}>−</Button>
      <span>{orderCount}</span>
      <Button onClick={increaseCount}>+</Button>
    </Container>
  );
}
