import styled from "styled-components";
import { useHistory } from "react-router-dom";
import homeBanner from "/images/iteration-1-images/home-banner.png";
import logo from "/images/iteration-1-images/logo.svg";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${homeBanner}) no-repeat center center/cover;
  position: relative;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
  background-color: #FDC913;
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

export default function Home() {
  const history = useHistory();

  const goToOrderPage = () => {
    history.push('/order');  // '/order' sayfasına yönlendir
  };

  return (
    <HomeContainer>
      <Content>
        <Logo src={logo} alt="Logo" />
        <Text className="barlow-light" >KOD ACIKTIRIR </Text>
        <Text className="barlow-light" >PİZZA DOYURUR</Text>
        <Button onClick={goToOrderPage}>Acıktım</Button>
      </Content>
    </HomeContainer>
  );
}
