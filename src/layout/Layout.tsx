import { Outlet } from "react-router-dom";

import Header from './header/Header';

const Layout: React.FC = () => {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout