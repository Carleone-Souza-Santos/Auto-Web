import {
  CarName,
  CarPrice,
  Card,
  Grid,
  CarImage,
  Div,
} from '../styles/CarGrid';

const carData = [
  {
    name: 'Ferrari',
    price: 'R$3.950.00,00',
    image:
      'https://th.bing.com/th/id/R.13c65160b7775cf6b22195769e1114c9?rik=s3TPShDSEXOiJA&pid=ImgRaw&r=0',
  },
  {
    name: 'Lamborgin',
    price: 'R$4.132.300,00',
    image:
      'https://st4.depositphotos.com/3317865/40969/i/450/depositphotos_409696342-stock-photo-lamborghini-aventador-cornering-aventador-powerful.jpg',
  },
  {
    name: 'Porsche ',
    price: 'R$ 1.896.590',
    image:
      'https://quatrorodas.abril.com.br/wp-content/uploads/2020/05/QR_734_CARRO_PORSCHE_911.jpg?quality=70&strip=info&w=720&crop=1',
  },
  {
    name: 'Ferrari',
    price: 'R$3.950.00,00',
    image:
      'https://th.bing.com/th/id/R.13c65160b7775cf6b22195769e1114c9?rik=s3TPShDSEXOiJA&pid=ImgRaw&r=0',
  },
  {
    name: 'Lamborgin',
    price: 'R$4.132.300,00',
    image:
      'https://st4.depositphotos.com/3317865/40969/i/450/depositphotos_409696342-stock-photo-lamborghini-aventador-cornering-aventador-powerful.jpg',
  },
  {
    name: 'Porsche ',
    price: 'R$ 1.896.590',
    image:
      'https://quatrorodas.abril.com.br/wp-content/uploads/2020/05/QR_734_CARRO_PORSCHE_911.jpg?quality=70&strip=info&w=720&crop=1',
  },
  {
    name: 'Ferrari',
    price: 'R$3.950.00,00',
    image:
      'https://th.bing.com/th/id/R.13c65160b7775cf6b22195769e1114c9?rik=s3TPShDSEXOiJA&pid=ImgRaw&r=0',
  },
  {
    name: 'Lamborgin',
    price: 'R$4.132.300,00',
    image:
      'https://st4.depositphotos.com/3317865/40969/i/450/depositphotos_409696342-stock-photo-lamborghini-aventador-cornering-aventador-powerful.jpg',
  },
  {
    name: 'Porsche ',
    price: 'R$ 1.896.590',
    image:
      'https://quatrorodas.abril.com.br/wp-content/uploads/2020/05/QR_734_CARRO_PORSCHE_911.jpg?quality=70&strip=info&w=720&crop=1',
  },
  {
    name: 'Ferrari',
    price: 'R$3.950.00,00',
    image:
      'https://th.bing.com/th/id/R.13c65160b7775cf6b22195769e1114c9?rik=s3TPShDSEXOiJA&pid=ImgRaw&r=0',
  },
];

const CarCard = ({ name, price, image }) => {
  return (
    <Card>
      <CarImage src={image} alt={name} />
      <CarName>{name}</CarName>
      <CarPrice>{price}</CarPrice>
    </Card>
  );
};
const CarGrid = () => {
  return (
    <Grid>
      <Div>
        {carData.map((car, index) => (
          <CarCard
            key={index}
            name={car.name}
            price={car.price}
            image={car.image}
          />
        ))}
      </Div>
    </Grid>
  );
};

export default CarGrid;
