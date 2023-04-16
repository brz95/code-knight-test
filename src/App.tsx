import { useEffect, useState } from 'react';
import Clock from './Clock';

const url = 'https://worldtimeapi.org/api/timezone/Europe/Moscow';

export type Time = string | null;

const App = () => {
  const [time, setTime] = useState<Time>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTime(data.datetime);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchApi();
  }, []);

  useEffect(() => {
    if (time) {
      const timer = setTimeout(() => {
        setTime((prevTime) => {
          if (prevTime) {
            const currentTime = new Date(prevTime);
            currentTime.setSeconds(currentTime.getSeconds() + 1);
            return currentTime.toISOString();
          }
          return prevTime;
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [time]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return !time ? <div className="loader" /> : <Clock time={time} />;
};

export default App;
