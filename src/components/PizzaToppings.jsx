import styled from "styled-components";

const toppingsList = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Salam",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Kabak",
  "Soğan",
  "Sarımsak",
];

const ToppingsContainer = styled.div`
  max-width: 40rem;
  padding: 1rem;
`;

const ToppingsTitle = styled.h2`
  font-family: "Barlow SemiBold", sans-serif;
  color: #292929;
  font-size: 1rem;
  max-width: 40rem;
`;

const ToppingsSubtitle = styled.p`
  color: #5f5f5f;
  font-size: 0.8rem;
  max-width: 40rem;
`;

const ToppingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const ToppingItem = styled.div`
  display: flex;
  align-items: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const CustomCheckbox = styled.span`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  background-color: #faf7f2;
  border: 2px solid #faf7f2;
  border-radius: 4px;
  transition: all 0.2s;

  ${({ $checked }) =>
    $checked &&
    `
    background-color: #fdc913;
    border-color: #fdc913;
  `}

  ${HiddenCheckbox}:checked + &::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 12px;
  }
`;

const ToppingLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "Barlow", sans-serif;
  color: #292929;
  font-size: 0.8rem;

  &:hover ${CustomCheckbox} {
    border-color: #fdc913;
  }

  /* Seçim limiti aşıldığında stil değişimi */
  ${(props) =>
    props.disabled &&
    `
    color: #a9a9a9;
    cursor: not-allowed;
    &:hover ${CustomCheckbox} {
      border-color: #d3d3d3;
    }
  `}
`;
PizzaToppings.defaultProps = {
  selectedToppings: [],
  setSelectedToppings: () => {},
};

export default function PizzaToppings({
  selectedToppings = [],
  setSelectedToppings = () => {},
}) {
  const toggleTopping = (topping) => {
    setSelectedToppings((prevToppings) => {
      if (prevToppings.includes(topping)) {
        return prevToppings.filter((t) => t !== topping);
      } else if (prevToppings.length < 10) {
        return [...prevToppings, topping];
      }
      return prevToppings;
    });
  };

  return (
    <ToppingsContainer>
      <ToppingsTitle>Ek Malzemeler</ToppingsTitle>
      <ToppingsSubtitle>
        En fazla 10 malzeme seçebilirsiniz. 5₺
      </ToppingsSubtitle>
      <ToppingsGrid>
        {toppingsList.map((topping) => (
          <ToppingItem key={topping}>
            <ToppingLabel
              disabled={
                !selectedToppings.includes(topping) &&
                selectedToppings.length >= 10
              }
            >
              <HiddenCheckbox
                type="checkbox"
                checked={selectedToppings.includes(topping)}
                onChange={() => toggleTopping(topping)}
                disabled={
                  !selectedToppings.includes(topping) &&
                  selectedToppings.length >= 10
                }
              />
              <CustomCheckbox $checked={selectedToppings.includes(topping)} />
              <span>{topping}</span>
            </ToppingLabel>
          </ToppingItem>
        ))}
      </ToppingsGrid>
    </ToppingsContainer>
  );
}
