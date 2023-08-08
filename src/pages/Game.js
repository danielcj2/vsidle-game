import ModalPopUp from "../components/ModalPopUp";
import Sidebar from "../components/Sidebar";
import Overlay from "../components/Overlay";
import Header from "../components/Header";
import Alert from "../components/Alert";
import { useState , useEffect, useRef } from 'react';
import { gamesList } from "../components/GamesList";
import Attempts from "../components/Attempts";
import GameText from "../components/GameText";

function Game() {
  var arrayClone;
  var gamePick = window.location.pathname;

  //modal
  const [modalState, setModalState] = useState(false);
  const [outcome, setOutcome] = useState(false);

  //sidebar
  const [sidebarOverlayShow, setSidebar] = useState(false);
  const menuClick = () => {
    setSidebar(!sidebarOverlayShow);
  }

  //user answer
  const userAnswer = useRef();
  const [hintsUnlocked, setHintsUnlocked] = useState(1);
  const [currentAttemptField, setCurrentAttemptField] = useState(1);

  //alert
  const [alertError, setAlertError] = useState([]);

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


  //get game info
  gamesList.map((gameItem) => (gameItem.path === gamePick ? arrayClone=gameItem : null));

  const handleSubmit = (event) => {
    event.preventDefault();
    if(userAnswer.current.value !== ""){

      for (let i = 0; i < arrayClone.games[gameNumber].answer.length; i++){
        if(userAnswer.current.value.toLowerCase() === arrayClone.games[gameNumber].answer[i].toLowerCase()){
          setOutcome(true);
          return;
        }
      }

      if(outcome !== true){
        if(hintsUnlocked < arrayClone.games[gameNumber].hints.length){
          setHintsUnlocked(prev => {
            return prev + 1
          });
          setCurrentAttemptField(hintsUnlocked + 1);

          addAlertError("!!! You can do better than that...");
        } else {
          setModalState(true);
        }
      }
    }
    else {
      addAlertError("!! Write Something Bozo")
    }
  } 

  const addAlertError = (message) => {
    const newError = {
      id: Math.random().toString(36).substring(2, 9),
      message: message,
    };

    setAlertError((prevErrors) => [...prevErrors, newError]);
  };

  const removeError = (id) => {
    setAlertError((prevErrors) => prevErrors.filter((error) => error.id !== id));
  }

  const changeHint = (x) => {
    setCurrentAttemptField(x);
  }

  return (
    <>
      <ModalPopUp state={modalState} outcome={outcome} hints={hintsUnlocked} answer={arrayClone.games[gameNumber].answer[0]} index={gameNumber} interval={interval} setNumber={setGameNumber}/>
      <Overlay overlay = {sidebarOverlayShow} menu = {menuClick}/>
      <Sidebar sidebar = {sidebarOverlayShow} menu = {menuClick}/>
      <Header title={arrayClone.text} menuShow = {menuClick} interval={interval} setNumber={setGameNumber}/>
      <div className="game-container d-flex flex-column align-items-center">
        <div className="game-tries-counter d-flex"><Attempts current={currentAttemptField} hintsUnlocked={hintsUnlocked} total={arrayClone.games[gameNumber].hints.length} changeHint={changeHint}/></div>
        <div className="game-display d-flex align-items-center justify-content-center"><GameText stage={currentAttemptField} hints={arrayClone.games[gameNumber].hints} index={gameNumber}/></div>
        <div className="game-answer-box">
          <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            <input type="text" className="input-field" maxLength="30" placeholder="Type your answer here ..." ref={userAnswer} />
            <input type="submit" className="btn submit-btn" style={{fontSize: "larger"}} value="Submit" />  
          </form>
        </div>
      <Alert errors={alertError} removeError={removeError}/>
      </div>
    </>
    
  );
}

export default Game;
