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
  flex-direction: column;
  gap: 1rem;
`;

export default function OrderSize({ selectedSize, setSelectedSize }) {
  return (
    <div>
      <Baslik>Boyut Seç</Baslik>
      <Container>
        {["Küçük", "Orta", "Büyük"].map((size) => (
          <label key={size}>
            <input
              type="radio"
              value={size}
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
            />
            <span>{size}</span>
          </label>
        ))}
      </Container>
    </div>
  );
}
