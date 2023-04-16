interface ClockProps {
  toggleTheme: VoidFunction;
  time: string | null;
  themeDark: boolean;
}
const Clock = ({ time, toggleTheme, themeDark }: ClockProps) => {
  const timeArray: Date = new Date(time || '');

  const addLeadingZero = (number: number): string => {
    return number < 10 ? '0' + number : number.toString();
  };

  return (
    <>
      <div className="clock">
        <div
          className={'hour'}
          style={{
            transform: `rotateZ(${timeArray.getHours() * 30}deg)`,
          }}
        />
        <div
          className="minute"
          style={{
            transform: `rotateZ(${timeArray.getMinutes() * 6}deg)`,
          }}
        />
        <div
          className="second"
          style={{
            transform: `rotateZ(${timeArray.getSeconds() * 6}deg)`,
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
      <button onClick={toggleTheme}>Переключить тему</button>
      <div className="clockSeconds">
        {`${addLeadingZero(timeArray.getHours())}:${addLeadingZero(
          timeArray.getMinutes()
        )}:${addLeadingZero(timeArray.getSeconds())}`}
      </div>
    </>
  );
};

export default Clock;
