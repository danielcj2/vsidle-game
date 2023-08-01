import imagesCropped from '../img/imagesCropped'

function GameText({stage, hints, index}) {
    var picture;
    if (hints[stage - 1].substring(0,8) === "/src/img")
    {
        picture = true;
    } else {
        picture = false;
    }
    
    const getText = () => {
        return(picture?(<img src={imagesCropped[index]} alt="Game img"/>):(<h3 className="text-center" style={{padding: "1rem"}}>{hints[stage - 1]}</h3>))
    }

    return (getText())
}

export default GameText
