import styled from 'styled-components';
import Background from '../assets/img/background.jpg';
import Backgroundform from '../assets/img/backgroundForm.jpg';

export const Grid = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 4%;
`;

export const FormContainer = styled.div`
  background-image: url(${Backgroundform});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 1px 1px #f9dc78;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px black;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #f9dc78;
    outline: none;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 1px 1px black;
  font-weight: bold;

  input {
    margin-right: 0.5rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #f9dc78;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  transition: 1s ease;

  &:hover {
    background-color: #dbb127;
    transition: 1s ease;
  }
`;
