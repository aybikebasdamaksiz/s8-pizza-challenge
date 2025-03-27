import styled from "styled-components";

const Baslik = styled.h2`
  color: #292929;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem;
`;

const Container = styled.div`
  color: #5f5f5f;
  font-size: 0.6rem;
  margin: 1rem;
  padding: 0.25rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  color: #292929;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #faf7f2;
  background-color: #faf7f2;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:checked {
    background-color: #faf7f2;
    border-color: #292929;

    &::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: white;
    }
  }

  &:hover {
    border-color: #292929;
  }
`;

export default function OrderSize({ selectedSize, setSelectedSize }) {
  return (
    <div>
      <Baslik>Boyut Seç</Baslik>
      <Container>
        {["S", "M", "L"].map((size) => (
          <RadioLabel key={size}>
            <RadioInput
              type="radio"
              value={size}
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
            />
            <span>{size}</span>
          </RadioLabel>
        ))}
      </Container>
    </div>
  );
}
