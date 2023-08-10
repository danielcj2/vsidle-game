import logo from './icons/guessdle-logo.svg'
import howto from './icons/howto-icon.svg'
import { FiMenu } from 'react-icons/fi'
import Timer from './Timer'

const Header = ({title, addLogo, menuShow, interval, setNumber, setHowToModal}) => {
  return (
    <header style={{width: "100%"}} className="d-flex flex-nowrap justify-content-between">
      <div className="indent align-self-top"><Timer interval={interval} setNumber={setNumber}/></div>
      <div className="header-title text-center align-self-center">
        {addLogo ? <img src={logo} alt="icon" /> : null}
        <h2>Guess the {title ? <span>{title}</span> : '. . .'}</h2>
      </div>
      <div className="header-menu d-flex flex-nowrap align-items-baseline">
        <button className="btn howto-btn" onClick={setHowToModal}><img src={howto} alt="howto svg" /></button>
        <button className="btn menu-btn" onClick={menuShow}><FiMenu /></button>
      </div>
    </header>
  )
}

export default Header
