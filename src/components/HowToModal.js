import Modal from 'react-bootstrap/Modal';
import {CgClose} from 'react-icons/cg';
import icon from './icons/guessdle-icon-nobackground.svg'

const HowToModal = ({state, setHowToModal}) => {
  const handleClose = () => {
    setHowToModal(false);
  }
  
  return (
    <Modal className="howToModal" show={state} onHide={handleClose}>
        <Modal.Header>
            <Modal.Title className="howToModal-title d-flex justify-content-start align-items-center">
              <img style={{width: '10%'}} src={icon} alt="icon" />
              <h2>How To Play</h2>
              <button className="ml-auto btn closeModal align-self-start" onClick={handleClose}><CgClose></CgClose></button>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="howToModal-body">
          <div className="rules">
            <h5>Guess the correct answer for 4 different game categories:</h5>
            <ul>
              <li>The player will be given 5 attempts (hints) total.</li>
              <li>The player may revisit previous hints, simply by clicking on the ? circle above the hint-box.</li>
              <li>The answer must be typed in its full form. (In the case of names, the player must include first AND last name; middle name(s) not required but acceptable)</li>
            </ul>
          </div>
          <div className="example">
            <h5 className="example-h5">E X A M P L E</h5>
            <p className="example-q text-center">This person plays the comical Deadpool character in the Marvel Film Series.</p>
            <p>The correct answer would be: <span className="bold">Ryan Reynolds</span>.</p>
            <p>Other acceptable answers: <span className="bold">ryan reynolds, Ryan Rodney Reynolds</span>.</p>
            <p>Invalid answers: <span className="bold">ryan, reynolds</span>.</p>
          </div>
          <div className="info"><h5>GAMES WILL RESET EVERY 12 HOURS</h5></div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <h5>THANKS FOR PLAYING!</h5>
        </Modal.Footer>
    </Modal>
  )
}

export default HowToModal
