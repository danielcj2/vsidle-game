import { useState, useEffect, useRef } from 'react';

const Alert = ({errors, removeError }) => {
  const [alerts, setAlerts] = useState([]);

  const timersRef = useRef({}); //allocates to memory, persists through re-renders

  useEffect(() => {
    errors.slice(-4).forEach((error) => {
      if (!timersRef.current[error.id]) { //check if there is no existing timer 
        timersRef.current[error.id] = setTimeout(() => { //set timer
          removeError(error.id); //remove alert from box
          setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== error.id));
          delete timersRef.current[error.id]; //remove timer from memory
        }, 5000);
      }
    });
  }, [errors, removeError]);

  useEffect(() => { //update
    setAlerts(errors.slice(-4).reverse());
  }, [errors]);

  if (alerts.length === 0) {
    return null; // Do not render anything if there are no alerts
  }

  return (
    <div className="error-box">
      {alerts.map((alert) => (
        <div className="error text-center" key={alert.id}>
          {alert.message}
        </div>
      ))}
    </div>
  );
}


export default Alert
