import styled from "styled-components";

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  padding-left: 8rem;
`;

const Baslik = styled.h1`
  color: #292929;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PizzaInfo = styled.div`
  color: #5f5f5f;
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const PizzaText = styled.p`
  color: #5f5f5f;
  font-size: 1em;
  line-height: 1.4;
`;

export default function OrderInfo({ pizzaBasePrice }) {
  return (
    <Container>
      <Baslik>Position Absolute Acı Pizza</Baslik>
      <PizzaInfo>
        <p className="barlow-extrabold">{pizzaBasePrice}₺</p>
        <p>4.9 (200)</p>
      </PizzaInfo>
      <PizzaText className="barlow-light">
        Frontend Dev olarak hala position: absolute kullanıyorsan, bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </PizzaText>
    </Container>
  );
}
