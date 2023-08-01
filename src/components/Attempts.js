import attemptDefaultIcon from "../components/icons/attempt-default.svg"
import attemptIcon from "../components/icons/attempt.svg"
import attemptCurrentIcon from "../components/icons/attempt-current.svg"

function Attempts({current, hintsUnlocked, total, changeHint}) {
    const getShape = () => { 
        let content = [];
        for(let i = 1; i <= total; i++){
            if(i === current){
                content.push(<div className="attempts-current" ><img src={attemptCurrentIcon} alt="attempt icon" /></div>)
            }
            else if(i>hintsUnlocked){
                content.push(<div className="attempts" ><img src={attemptDefaultIcon} alt="attempt icon" /></div>) 
            }
            else {
                content.push(<div className="attempts-fail" value={i} style={{cursor: "pointer"}} onClick={() => changeHint(i)}><img src={attemptIcon} alt="attempt icon" /></div>)
            }     
        }   
        return content;
    }

    return (getShape())
}

export default Attempts
