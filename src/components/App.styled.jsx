import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 0px auto;
`;

export const LabelStyle = styled.label`
  width: 400px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 4px 5px;
`;

export const InputStyle = styled.input`
  height: 25px;
  padding: 4px;
  width: 200px;
  border-radius: 5px;
`;

export const ButtonStyle = styled.button`
  height: 30px;
  width: 100px;
  padding: 4px;
  font-weight: 500;
  background-color: #b892ea;
  &:hover {
    background-color: #e8acf8;
  }
`;
