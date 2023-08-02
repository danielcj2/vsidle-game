import { useState, useEffect, useRef, useCallback } from 'react'



const Timer = ({interval, setNumber}) => {
  const [countdown, setCountdown] = useState(interval);
  //track if incrementNumber is in progress
  const isCountingDown = useRef(false);

  // Calculate the interval duration based on the number of intervals in a 24-hour period
  const intervalDuration = Math.floor(24 * 60 * 60 / interval);

  const incrementNumber = useCallback(() => {
    setNumber(prevNumber => {
      const newNumber = prevNumber + 1;

      // If the newNumber exceeds 5, reset it to 0 (This is just the limit for the beta test, it is the # of games currently added for each category)
      const updatedNumber = newNumber > 5 ? 0 : newNumber;

      // Make an API call to update the "number" variable in the JSON server
      fetch('http://localhost:5000/settings', {
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
  }, [setNumber]);

  const startNewInterval = () => {
    //if incrementNumber is in progress, return
    if (isCountingDown.current) return;

    isCountingDown.current = true;
    incrementNumber();

    setTimeout(() => {
      isCountingDown.current = false;
      const currentTime = new Date().getTime() / 1000;
      const intervalStartTime = Math.floor(currentTime / intervalDuration) * intervalDuration;
      setCountdown(intervalStartTime - currentTime);
    }, 0);
  };

  useEffect(() => {
    const currentTime = new Date().getTime() / 1000;
    const intervalStartTime = Math.ceil(currentTime / intervalDuration) * intervalDuration;
    setCountdown(intervalStartTime - currentTime);

    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          startNewInterval();
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [interval, intervalDuration, startNewInterval]);


  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <div>
      <div>{formatTime(countdown)}</div>
    </div>
  )
}


export default Timer;
