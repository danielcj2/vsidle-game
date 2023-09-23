import Modal from 'react-bootstrap/Modal'
import {CgClose} from 'react-icons/cg';
import icon from './icons/guessdle-icon-nobackground.svg'


const SettingsModal = ({state, setSettingsModal, theme, setTheme}) => {
  const handleClose = () => {
    setSettingsModal(false);
  }

  return (
    <Modal className="settingsModal" show={state} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="settingsModal-title d-flex justify-content-start align-items-center">
          <img style={{width: '10%'}} src={icon} alt="icon" />  
          <h2>Settings</h2>
          <button className="btn closeModal align-self-start" onClick={handleClose}><CgClose></CgClose></button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="settings-option form-check form-switch d-flex justify-content-between">
          <div className="option-info">Default Theme</div>
          <input className="switch form-check-input" type="radio" role="switch" name="theme" value="default" checked={theme === 'default'} onChange={() => setTheme('default')}/>
        </div>
        <div className="settings-option form-check form-switch d-flex justify-content-between">
          <div className="option-info">Dark Theme</div>
          <input className="switch form-check-input" type="radio" role="switch" name="theme" value="dark" checked={theme === 'dark'} onChange={() => setTheme('dark')}/>
        </div>
        {/* <div className="settings-option form-check form-switch d-flex justify-content-between">
          <div className="option-info">Light Theme</div>
          <input className="switch form-check-input" type="radio" role="switch" name="theme" value="light" checked={theme === 'light'} onChange={() => setTheme('light')}/>
        </div> */}
        {/* <div className="settings-option form-check form-switch d-flex justify-content-between">
          <div className="option-info">Colour Blindness</div>
          <input className="switch form-check-input" type="checkbox" role="switch" value="mode3"/>
        </div> */}
        <div className="settings-option d-flex justify-content-between">
          <div className="option-info">Feedback</div>
          <a href="mailto:danielc52822@gmail.com">Email</a>
        </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  )
}

export default SettingsModal
