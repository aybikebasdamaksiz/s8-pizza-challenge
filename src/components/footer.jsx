import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #292929;
  color: #fff;
  text-align: left;
  font-family: "Roboto Condensed", sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 3rem;
`;

const Logo = styled.img`
  width: 200px;
  height: 100px;
`;

const ContactInfo = styled.p`
  display: flex;
  align-items: center;
  margin: 10px 0;
  gap: 10px;
`;

const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin: 8px 0;
`;

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

const InstaImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Copyright = styled.p`
  text-align: center;
  border-top: 1px solid #444;
  padding: 1rem 0;
  margin-top: 2rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Logo
            src="/images/iteration-2-images/footer/logo-footer.svg"
            alt="logo"
          />
          <ContactInfo>
            <IconImage
              src="/images/iteration-2-images/footer/icons/icon-1.png"
              alt="Adres"
            />
            341 Londonderry Road, İstanbul Türkiye
          </ContactInfo>
          <ContactInfo>
            <IconImage
              src="/images/iteration-2-images/footer/icons/icon-2.png"
              alt="E-posta"
            />
            aciktim@teknolojikyemekler.com
          </ContactInfo>
          <ContactInfo>
            <IconImage
              src="/images/iteration-2-images/footer/icons/icon-3.png"
              alt="Telefon"
            />
            +90 216 123 45 67
          </ContactInfo>
        </Column>

        <Column>
          <h3>Sıcacık Menüler</h3>
          <MenuList>
            <MenuItem>Terminal Pizza</MenuItem>
            <MenuItem>5 Kişilik Hackathon Pizza</MenuItem>
            <MenuItem>useEffect Tavuklu Pizza</MenuItem>
            <MenuItem>Beyaz Console Frosty</MenuItem>
            <MenuItem>Testler Geçti Mutlu Burger</MenuItem>
            <MenuItem>Position Absolute Acı Burger</MenuItem>
          </MenuList>
        </Column>

        <Column>
          <h3>Instagram</h3>
          <InstagramGrid>
            <InstaImage
              src="/images/iteration-2-images/footer/insta/li-0.png"
              alt="Food 1"
            />
            <InstaImage
              src="/images/iteration-2-images/footer/insta/li-1.png"
              alt="Food 2"
            />
            <InstaImage
              src="/images/iteration-2-images/footer/insta/li-2.png"
              alt="Food 3"
            />
            <InstaImage
              src="/images/iteration-2-images/footer/insta/li-3.png"
              alt="Food 4"
            />
            <InstaImage
              src="/images/iteration-2-images/footer/insta/li-4.png"
              alt="Food 5"
            />
            <InstaImage
              src="/images/iteration-2-images/footer/insta/li-5.png"
              alt="Food 6"
            />
          </InstagramGrid>
        </Column>
      </FooterContent>
      <Copyright>© 2023 Teknolojik Yemekler.</Copyright>
    </FooterContainer>
  );
}
