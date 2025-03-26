import styled from "styled-components";
import logo from "/images/iteration-1-images/logo.svg";
import homeBanner from "/images/iteration-1-images/home-banner.png";

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${homeBanner}) no-repeat center center/cover;
  position: relative;
  width: 100%;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -100px; /* Logo ile metin arasındaki boşluğu ayarlar */
`;

const Logo = styled.img`
  width: 20rem;
  height: auto;
  margin-bottom: 10rem;
`;

const Congratulations = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 10px;
`;

const Subtext = styled.p`
  font-size: 3rem;
  color: white;
`;

export default function Success() {
  return (
    <SuccessContainer>
      <Logo src={logo} alt="Teknolojik Yemekler" />
      <ContentWrapper>
        <Congratulations className="barlow-light">TEBRİKLER!</Congratulations>
        <Subtext className="barlow-light">SİPARİŞİNİZ ALINDI!</Subtext>
      </ContentWrapper>
    </SuccessContainer>
  );
}
