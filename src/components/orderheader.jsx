import Logo from "/images/iteration-1-images/logo.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header = styled.header`
  background-color: #CE2829;
  padding: 20px 50px;
  display: flex;
  align-items: center; 
  position: relative;
  height: 100px; 
`;

const Image = styled.img`
  height: 40px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Nav = styled.nav`
  display: flex;
  position: absolute;
  right: 57%; 
  bottom: 15px; 
`;

const StyledNavLink = styled.span`
  color: white;
  text-decoration: none;
  margin: 0px
  font-size: 15px;
  font-weight: lighter;
  `;

  
export default function OrderHeader () {

    const history = useHistory(); //useHistory hooku ile sayfalar arasında yönlendirme yapılacak


  const handleAnasayfa = () => {
    history.push('/home');  // Anasayfaya yönlendirme yapılıyor
  };

  const handleOrder = () => {
    history.push('/order'); // order.jsx sayfasına yönlendirme yapılıyor
  };


    return (
        <Header>
            <Image src={Logo} alt="Teknolojik Yemekler Logo"/> 
            <Nav>
                <StyledNavLink  onClick={handleAnasayfa}>Anasayfa - </StyledNavLink>
                <StyledNavLink  onClick={handleOrder}> Sipariş Oluştur </StyledNavLink>
            </Nav>
        </Header>
    )
}