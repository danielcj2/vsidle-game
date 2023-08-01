import { useState, useEffect, useRef } from 'react'



const Timer = ({interval, number, setNumber}) => {
  const [countdown, setCountdown] = useState(interval);
  //track if incrementNumber is in progress
  const isCountingDown = useRef(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 0) {
          if (!isCountingDown.current) {
            isCountingDown.current = true;
            incrementNumber();
          }
          return interval;
        } else {
          isCountingDown.current = false;
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [interval]);

  const incrementNumber = () => {
    setNumber(prevNumber => {
      const newNumber = prevNumber + 1;

      // If the newNumber exceeds 10, reset it to 1
      const updatedNumber = newNumber > 9 ? 0 : newNumber;

      // Make an API call to update the "number" variable in the JSON server
      fetch('http://localhost:3000/timer', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number: updatedNumber,
        }),
      })
        .then(response => response.json())
        .catch(error => {
          console.log('Error incrementing number:', error);
        });

      return updatedNumber;
    });
  }

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <div>
      <div>{formatTime(countdown)}</div>
      <div>Index: {number}</div>
    </div>
  )
}


export default Timer;




// const SECOND = 1000;
// const MINUTE = SECOND * 60;
// const HOUR = MINUTE * 60;
// const timeStamp = new Date();
//   timeStamp.setHours(20,0,0);

//   const parsedTimeStamp = Date.parse(timeStamp);
//   const [time, setTime] = useState(parsedTimeStamp - Date.now());

//   useEffect(() => {
//     const interval = setInterval(
//         () => setTime(parsedTimeStamp - Date.now()),
//         1000,
//     );

//     return () => clearInterval(interval);
//   }, [parsedTimeStamp]);

//   return (
//     <div className="timer d-flex">
//       {Object.entries({
//                 h: (time / HOUR) % 24,
//                 m: (time / MINUTE) % 60,
//                 s: (time / SECOND) % 60,
//             }).map(([label, value]) => (
//                 <div key={label}>
//                     <p className="ch"><span className="white">{`${Math.floor(value)}`.padStart(2, "0")}</span><span className="white">{label === "s" ? "" : " :"}</span></p>
//                 </div>
//             ))}
//     </div>
//   )