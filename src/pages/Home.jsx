import { useEffect } from "react";
import { CHeader } from "../components";
import { useState } from "react";

function Home() {
  const { name } = JSON.parse(localStorage.getItem('sing_up_user'));

  const [activate, setActivate] = useState(false);

  const [timer, setTimer] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {

  }, []);

  const onClickFunction = ({ target: { name } }) => {
    switch (name) {
      case 'confirm-button':
        setActivate(true);
        console.log(hours, minutes, seconds)
        break;
      default:
        break;
    }
  };

  const onChangeFunction = ({ target: { name, value } }) => {
    switch (name) {
      case 'input-hours':
        setHours(value);
        break;
      case 'input-minutes':
        setMinutes(value);
        break;
      case 'input-seconds':
        setSeconds(value)
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <CHeader
        name={name}
      />
      <main>
        <article>
          <h2>Hours : Minutes : Seconds</h2>
        </article>
        <article>
          <label htmlFor="input-hours">Hours</label>
          <input
            type="number"
            name="input-hours"
            onChange={onChangeFunction}
            max={24}
            min={0}
            maxLength={2}
          />
          <label htmlFor="input-minutes">Minutes</label>
          <input
            type="number"
            name="input-minutes"
            onChange={onChangeFunction}
            max={59}
            min={0}
            maxLength={2}
          />
          <label htmlFor="input-seconds">Seconds</label>
          <input
            type="number"
            name="input-seconds"
            onChange={onChangeFunction}
            max={59}
            min={0}
            maxLength={2}
          />
          <button
            type="button"
            name="confirm-button"
            onClick={onClickFunction}
          >
            Iniciar
          </button>
        </article>
      </main>
    </div>
  );
}

export default Home;