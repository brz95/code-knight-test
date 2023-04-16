import { useEffect, useState } from 'react';
import Clock from './Clock';

const url = 'https://worldtimeapi.org/api/timezone/Europe/Moscow';

export type Time = string | null;

const App = () => {
  const [time, setTime] = useState<Time>(null);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setTime(data.datetime);
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

  return !time ? <div className='loader' /> : <Clock time={time} />;
};

export default App;
