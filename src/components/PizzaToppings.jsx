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
  margin: 0 auto;
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
  border: 2px solid #5f5f5f;
  border-radius: 4px;
  transition: all 0.2s;

  ${HiddenCheckbox}:checked + & {
    background-color: #ce2829;
    border-color: #ce2829;
  }

  ${HiddenCheckbox}:checked + &::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
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
    border-color: #ce2829;
  }
`;

export default function PizzaToppings({
  selectedToppings,
  setSelectedToppings,
}) {
  const toggleTopping = (topping) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter((t) => t !== topping));
    } else if (selectedToppings.length < 10) {
      setSelectedToppings([...selectedToppings, topping]);
    }
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
            <ToppingLabel>
              <HiddenCheckbox
                type="checkbox"
                checked={selectedToppings.includes(topping)}
                onChange={() => toggleTopping(topping)}
                disabled={
                  !selectedToppings.includes(topping) &&
                  selectedToppings.length >= 10
                }
              />
              <CustomCheckbox />
              <span>{topping}</span>
            </ToppingLabel>
          </ToppingItem>
        ))}
      </ToppingsGrid>
    </ToppingsContainer>
  );
}
