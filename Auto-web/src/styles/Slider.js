import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 70vw;
  height: 100%;
  margin: auto;
  position: relative;
`;

export const Slide = styled.div`
  position: absolute;
  inset: 0;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`;

export const CarImage = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60%;

  img {
    width: 100%;
    transform: rotate(-20deg);
  }

  &::before {
    content: '';
    position: absolute;
    background-color: #000000;
    width: 100%;
    height: 100px;
    top: 120%;
    left: 50px;
    border-radius: 50%;
    filter: blur(50px);
  }
`;

export const Content = styled.div`
  position: absolute;
  right: 100px;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 2%;

  .car-info {
    font-weight: bold;
  }

  h2 {
    font-size: 6em;
    line-height: 1em;
    font-family: 'League Gothic', sans-serif;
    text-shadow: 1px 10px black;
  }

  .car-descrip {
    color: #d9d9d9;
    font-size: 12px;
    text-align: right;
    max-width: 400px;
  }

  .infor {
    border-radius: 30px;
    height: 35px;
    width: 120px;
    text-transform: uppercase;
    border: none;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    cursor: pointer;
    font-family: 'League Gothic', sans-serif;
    transition: 1s ease;
    text-shadow: 1px 3px black;

    &:hover {
      background-color: #eebb2b;
      transition: 1s ease;
      color: black;
      text-shadow: none;
      border: none;
    }
  }
`;

export const Arrows = styled.div`
  width: 80vw;
  position: absolute;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;

  button {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      border: 1px solid silver;
    }
  }
`;

export const Indicators = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  height: 200px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 50%;

  .number {
    padding: 10px;
    margin-left: 100px;
    font-size: 4em;
    width: 4.5%;
    text-shadow: 1px 10px black;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 0.6%;

    li {
      width: 3px;
      height: 40px;
      border-radius: 5px;
      transition: 0.5s;
      transform: rotate(30deg);
      background-color: silver;
      background: linear-gradient(to bottom, silver 100%);

      &.active {
        margin-top: 5px;
        border-radius: 15px;
        height: 15px;
        width: 15px;
        background: linear-gradient(to right, black 50%, white 50%);
      }
    }
  }
`;
