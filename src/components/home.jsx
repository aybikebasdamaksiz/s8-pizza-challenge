import styled from "styled-components";
import { useHistory } from "react-router-dom";
import HomeMenu from "./HomeMenu";
import Footer from "./footer";
import homeBanner from "/images/iteration-1-images/home-banner.png";
import logo from "/images/iteration-1-images/logo.svg";
import bigbox from "/images/iteration-2-images/cta/kart-1.png";
import smallboxdark from "/images/iteration-2-images/cta/kart-2.png";
import smallboxlight from "/images/iteration-2-images/cta/kart-3.png";

const HomeContainer = styled.div`
  left: 0;
  top: 0;
  background: url(${homeBanner}) no-repeat center center/cover;
  width: 100vw;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Barlow", sans-serif;
`;

const Logo = styled.img`
  width: 15rem;
  margin-top: 1rem;
`;

const Text = styled.h1`
  font-size: 3rem;
  color: white;
  margin: 0.5rem;
`;

const Button = styled.button`
  background-color: #fdc913;
  color: #292929;
  font-size: 1rem;
  padding: 0.8rem 3rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #cc3a3a;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  padding: 20px;
  background: white;
  position: relative;
  z-index: 10;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
const NavbarText = styled.p`
  font-size: 1.2rem;
  color: #292929;
  margin: 0;
`;
const MainContainer = styled.div`
  background: #faf7f2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 70vh;
`;
/*ikincikısım*/
const BigBox = styled.div`
  background: url(${bigbox});
  color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 530px;
  height: 448.75px;
  position: relative;
`;

const SmallBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SmallBoxDark = styled.div`
  background: url(${smallboxdark});
  color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 531px;
  height: 220px;
`;

const SmallBoxLight = styled.div`
  background: url(${smallboxlight});
  color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 531px;
  height: 220px;
`;

const OrderButton = styled.button`
  background: white;
  color: #ce2829;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
`;

const ContainerButtonText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-left: 2rem;
`;
export default function Home() {
  const history = useHistory();

  const goToOrderPage = () => {
    history.push("/order"); // '/order' sayfasına yönlendir
  };
  const navItems = [
    {
      src: "/images/iteration-2-images/icons/1.svg",
      text: "Yeni! Kore",
      alt: "korean",
    },
    {
      src: "/images/iteration-2-images/icons/2.svg",
      text: "Pizza",
      alt: "Pizza",
    },
    {
      src: "/images/iteration-2-images/icons/3.svg",
      text: "Burger",
      alt: "Burger",
    },
    {
      src: "/images/iteration-2-images/icons/4.svg",
      text: "Kızartmalar",
      alt: "Kızartma",
    },
    {
      src: "/images/iteration-2-images/icons/5.svg",
      text: "Fast Food",
      alt: "FastFood",
    },
    {
      src: "/images/iteration-2-images/icons/6.svg",
      text: "Gazlı İçecek",
      alt: "GazliIcecek",
    },
  ];

  return (
    <>
      <HomeContainer>
        <Content>
          <Logo src={logo} alt="Logo" />
          <Text>KOD ACIKTIRIR</Text>
          <Text>PİZZA DOYURUR</Text>
          <Button onClick={goToOrderPage}>Acıktım</Button>
        </Content>
      </HomeContainer>

      <Navbar>
        {navItems.map(({ src, text, alt }) => (
          <NavItem key={alt}>
            <Icon src={src} alt={alt} />
            <NavbarText>{text}</NavbarText>
          </NavItem>
        ))}
      </Navbar>
      <MainContainer>
        <BigBox>
          <ContainerButtonText>
            <h2>Özel Lezzetus</h2>
            <p>Position: Absolute Acı Burger</p>
            <OrderButton onClick={goToOrderPage}>SİPARİŞ VER</OrderButton>
          </ContainerButtonText>
        </BigBox>
        <SmallBoxContainer>
          <SmallBoxDark>
            <ContainerButtonText>
              <h3>Hackatlon Burger Menü</h3>
              <OrderButton onClick={goToOrderPage}>SİPARİŞ VER</OrderButton>
            </ContainerButtonText>
          </SmallBoxDark>
          <SmallBoxLight>
            <ContainerButtonText>
              <h3>
                <span>Çooook</span> hızlı npm gibi kurye
              </h3>
              <OrderButton onClick={goToOrderPage}>SİPARİŞ VER</OrderButton>
            </ContainerButtonText>
          </SmallBoxLight>
        </SmallBoxContainer>
      </MainContainer>
      <HomeMenu />
      <Footer />
    </>
  );
}
