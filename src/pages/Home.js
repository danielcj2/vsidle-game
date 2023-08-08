import Games from "../components/GamesList";
import Sidebar from "../components/Sidebar";
import Overlay from "../components/Overlay";
import Header from "../components/Header";
import HowToModal from "../components/HowToModal";
import {useState, useEffect} from 'react';
// import {interval, setGameNumber} from "./Game"

function Home() {
  const [sidebarOverlayShow, setSidebar] = useState(false);
  const menuClick = () => {
    setSidebar(!sidebarOverlayShow);
  }

  //modal
  const [howToModalState, setHowToModalState] = useState(false);
  const helpClick = () => {
    setHowToModalState(!howToModalState);
  }


  //settings, game #, interval
  const [gameNumber, setGameNumber] = useState(null);
  const [interval, setInterval] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Simulate an artificial delay of 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));

      const response = await fetch('http://localhost:5000/settings');
      const data = await response.json();
      setGameNumber(data.number);
      setInterval(data.interval);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="loading">Error: {error.message}</div>;
  }

  return (
    <>
      <Overlay overlay = {sidebarOverlayShow} menu = {menuClick}/>
      <Sidebar sidebar = {sidebarOverlayShow} menu = {menuClick}/>
      <HowToModal show={howToModalState}/>
      <Header addLogo="yes" menuShow = {menuClick} interval={interval} setNumber={setGameNumber} setHelpModal={helpClick}/>
      <div className="games-section d-flex flex-wrap justify-content-start">
        <Games />
      </div>
    </>
  );
}

export default Home;