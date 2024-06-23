import { Routes, Route } from 'react-router-dom';

import App from '../../App';
import Carros from '../Carros';
import FaleConosco from '../FaleConosco';
import LayoutHead from '../LayoutHeader';

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route element={<LayoutHead />}>
          <Route path="/" element={<App />} />
          <Route path="/Carros" element={<Carros />} />
          <Route path="/faleconosco" element={<FaleConosco />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
