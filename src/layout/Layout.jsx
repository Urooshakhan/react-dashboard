import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </div>
  );
};

export default Layout;