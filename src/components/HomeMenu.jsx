import styled from "styled-components";
import { useState } from "react";

const categories = ["Ramen", "Pizza", "Burger", "French fries", "Fast food"];

const menuItems = [
  {
    category: "Ramen",
    img: "/images/iteration-2-images/icons/1.svg",
  },
  {
    category: "Pizza",
    img: "/images/iteration-2-images/icons/2.svg",
  },
  {
    category: "Burger",
    img: "/images/iteration-2-images/icons/3.svg",
  },
  {
    category: "French fries",
    img: "/images/iteration-2-images/icons/4.svg",
  },
  {
    category: "Fast food",
    img: "/images/iteration-2-images/icons/5.svg",
  },
];

const MiddleText = styled.p`
  font-family: "Satisfy", cursive;
  font-size: 1.5rem;
  color: #ce2829;
`;

//buton kategori bölümü
const FoodMenuContainer = styled.div`
  background: #faf7f2;
  padding: 2rem;
  text-align: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  background-color: ${({ $active }) => ($active ? "#292929" : "white")};
  color: ${({ $active }) => ($active ? "white" : "#292929")};
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #292929;
    color: white;
  }
`;

const CategoryIcon = styled.img`
  width: 20px;
  height: 20px;
`;

//kart bölümü
const FoodCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const FoodCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 250px;
`;

const FoodImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const FoodName = styled.h3`
  font-size: 1.1rem;
  margin: 10px 0;
`;

const FoodInfo = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 5px 0;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

export default function HomeMenu() {
  const [activeCategory, setActiveCategory] = useState("Pizza");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <FoodMenuContainer>
      <MiddleText>en çok paketlenen menüler</MiddleText>
      <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
      <CategoryContainer>
        {categories.map((cat) => {
          const categoryItem = menuItems.find((item) => item.category === cat);
          return (
            <CategoryButton
              key={cat}
              $active={cat === activeCategory}
              onClick={() => setActiveCategory(cat)}
            >
              {categoryItem && (
                <CategoryIcon src={categoryItem.img} alt={cat} />
              )}
              {cat}
            </CategoryButton>
          );
        })}
      </CategoryContainer>
      <FoodCardContainer>
        <FoodCard>
          <FoodImage
            src="/images/iteration-2-images/pictures/food-1.png"
            alt="Terminal Pizza"
          />
          <FoodName>Terminal Pizza</FoodName>
          <FoodInfo>4.9 (200)</FoodInfo>
          <Price>60₺</Price>
        </FoodCard>

        <FoodCard>
          <FoodImage
            src="/images/iteration-2-images/pictures/food-2.png"
            alt="Position Absolute Aci Pizza"
          />
          <FoodName>Position Absolute Aci Pizza</FoodName>
          <FoodInfo> 4.9 (928)</FoodInfo>
          <Price>85₺</Price>
        </FoodCard>

        <FoodCard>
          <FoodImage
            src="/images/iteration-2-images/pictures/food-3.png"
            alt="useEffect Tavuklu Burger"
          />
          <FoodName>useEffect Tavuklu Burger</FoodName>
          <FoodInfo> 4.9 (462)</FoodInfo>
          <Price>75₺</Price>
        </FoodCard>
      </FoodCardContainer>
    </FoodMenuContainer>
  );
}
