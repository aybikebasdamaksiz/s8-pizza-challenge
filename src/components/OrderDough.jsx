import styled from "styled-components";

const Baslik = styled.h2`
  color: #292929;
  font-size: 1rem;
  margin: 1rem;
  
  `

const Select = styled.select`
  color: #292929;
  font-size: 0.8rem;
  margin-left: 2rem;
  margin-top: 0rem;
  `

export default function OrderDough({ selectedDough, setSelectedDough }) {
    return (
      <div>
        <Baslik>Hamur Seç</Baslik>
        <Select
          value={selectedDough}
          onChange={(e) => setSelectedDough(e.target.value)}
        >
          <option>Standart</option>
          <option>İnce</option>
          <option>Kalın</option>
        </Select>
      </div>
    );
  }
  