import Modal from 'react-bootstrap/Modal';
import Timer from './Timer'
import { Link } from 'react-router-dom';
import images from '../img/images'

function ModalPopUp({state, outcome, hints, answer, index, interval, setNumber}) {
  const handleClose = () => false;

  return (
    <>
      <Modal show={state || outcome} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{outcome ? <h2>CORRECT!</h2> : <h2>WRONG!!</h2>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {outcome ? <div>Well done...</div> : <div>This is the end of the road for you...</div>}
          {outcome ? <div>You guessed the actor in <span className="orange">{hints}</span> {hints===1 ? "attempt" : "attempts"}</div> : <div>You failed to guess the actor after <span className="orange">FIVE</span> attemps...</div>}
          <div className="answer-wrapper">
            {outcome ? <h4><span className="orange">{answer}</span></h4> : <div>The correct answer was.... <span className="orange">{answer}</span></div>}
            <img src={images[index]} alt="Game img" />          
          </div>
        </Modal.Body>
        <Modal.Footer>
        <div className="time">
            {outcome ? <div>You can test your brain again in...</div> : <div>Try again in...</div>}
            <Timer interval={interval} setNumber={setNumber}/>
          </div>
        <Link to="/"><button className="btn">
            Close
          </button> </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalPopUp
