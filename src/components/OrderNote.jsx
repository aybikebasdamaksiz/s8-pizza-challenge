import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7rem;
  margin-top: 2rem;
`;

const Label = styled.label`
  color: #292929;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  color: #292929;
  font-size: 0.8rem;
  width: 100%;
  max-width: 35rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default function OrderNote() {
  return (
    <Container>
      <form className="barlow-semibold">
        <Label htmlFor="ordernote">Sipariş Notu</Label>
        <TextArea
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          id="ordernote"
        ></TextArea>
      </form>
    </Container>
  );
}
