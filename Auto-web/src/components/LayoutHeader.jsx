import { Outlet } from 'react-router-dom';
import Header from './Header';

function LayoutHead() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default LayoutHead;
