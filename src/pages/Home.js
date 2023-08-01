import Games from "../components/GamesList";
import Sidebar from "../components/Sidebar";
import Overlay from "../components/Overlay";
import Header from "../components/Header";
import {useState} from 'react';

function Home() {
  const [sidebarOverlayShow, setSidebar] = useState(false);
  const menuClick = () => {
    setSidebar(!sidebarOverlayShow);
  }

  return (
    <>
      <Overlay overlay = {sidebarOverlayShow} menu = {menuClick}/>
      <Sidebar sidebar = {sidebarOverlayShow} menu = {menuClick}/>
      <Header addLogo="yes" menuShow = {menuClick} />
      <div className="games-section d-flex flex-wrap justify-content-start">
        <Games />
      </div>
    </>
  );
}

export default Home;