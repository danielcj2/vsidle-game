import Modal from 'react-bootstrap/Modal';
import {CgClose} from 'react-icons/cg';

const HowToModal = ({state}) => {
  const handleClose = () => false;
  
  return (
    <Modal show={true} onHide={handleClose}>
        <Modal.Header>
            <Modal.Title><h1>How To Play</h1><button className="btn"><CgClose></CgClose></button></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rules">
            <h2>Guess the correct answer for 4 different game categories:</h2>
            <ul>
              <li>The player will be given 5 attempts (hints) total.</li>
              <li>The player may revisit previous hints, simply by clicking on the ? circle above the hint-box.</li>
              <li>The answer must be typed in its full form.</li>
            </ul>
          </div>
          <div className="example">
            <h2 className="example-h2">E X A M P L E</h2>
            <h3 className="example-q">This person plays the comical Deadpool character in the Marvel Film Series.</h3>
            <h2>The correct answer would be: <span className="bold">Ryan Reynolds</span>.</h2>
            <h2>Other acceptable answers: <span className="bold">ryan reynolds, RYAN REYNOLDS, Ryan Rodeny Reynolds</span>.</h2>
            <h2>Invalid answers: <span className="bold">ryan, rYaN rEyNolDS, reynolds</span>.</h2>
          </div>
          <div className="info"><h2>GAMES WILL RESET EVERY 12 HOURS</h2></div>
        </Modal.Body>
        <Modal.Footer>
          <h2>THANKS FOR PLAYING!</h2>
        </Modal.Footer>
    </Modal>
  )
}

export default HowToModal
