import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/routers/router';
import GlobalStyle from './styles/Globalstyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <>
      <AppRouter />
      <GlobalStyle />
    </>
  </BrowserRouter>,
);
