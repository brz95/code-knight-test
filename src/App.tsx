import { useEffect, useState } from 'react';
import Clock from './Clock';

const url = 'https://worldtimeapi.org/api/timezone/Europe/Moscow';

export type Time = string | null

const App = () => {
  const [time, setTime] = useState<Time>(null);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setTime(data.datetime);
    };

    const timer = setInterval(fetchApi, 1000);

    return () => clearInterval(timer);
  }, [time]);
  
  return !time ? <div className='loader' />: <Clock time={time} />;
};

export default App;
