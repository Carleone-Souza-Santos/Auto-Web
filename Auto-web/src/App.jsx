import Header from './components/Header';
import Slider from './components/Slider';
import { MainContainer } from './styles/Main.js';
const App = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Slider />
      </MainContainer>
    </>
  );
};

export default App;
