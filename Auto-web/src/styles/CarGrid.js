import styled from 'styled-components';
import Background from '../assets/img/background.jpg';

export const Grid = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 100px 0px;
  display: flex;
`;

export const Div = styled.div`
  margin-top: 100px;
  height: 75vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CarPrice = styled.p`
  font-size: 1.2em;
  color: transparent;
`;

export const Card = styled.div`
  border-radius: 8px;
  margin: 20px;
  text-align: center;
  transition: 1s ease;
  filter: grayscale(100%);

  &:hover {
    cursor: pointer;
    background-color: black;
    transition: 1s ease;
    filter: grayscale(0%);

    & ${CarPrice} {
      color: white;
    }
  }
`;

export const CarImage = styled.img`
  width: 15vw;
  height: 20vh;
  border-radius: 8px;
  border: none;
`;

export const CarName = styled.h2`
  padding: 10px;
  font-size: 1.2em;
  color: white;
  text-shadow: 3px 3px black;
`;
