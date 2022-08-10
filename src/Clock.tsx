const Clock = ({ time }: { time: string | null }) => {
  const timeArray: Date = new Date(time || '');
  return (
    <>
      <div className="clock">
        <div
          className="hour"
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
      <div className="clockSeconds">
        {`${timeArray.getHours()}:${timeArray.getMinutes()}:${timeArray.getSeconds()}`}
      </div>
    </>
  );
};

export default Clock;
