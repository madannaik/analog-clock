import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../utils/themes";
import { gsDayNames, secHandAnim, time, timeDetails } from "../utils/common";
import { GlobalStyles } from "../styled.d";

export default function ClockPage() {


  const date: Date = new Date();

  // get todays weekday
  const today: String = gsDayNames[date.getDay()];

  // for theme toggler
  const [setTheme, setThemestate] = useState(false);

  // get time at initail state
  const { hour, min, sec } = time(date);

  const [state, setstate] = useState<timeDetails | null>({
    hour: "0",
    min: "0",
    sec: "0",
    exactHour: 0,
    exactMin: 0,
  });

  // get time for every 1 sec and update time variable
  const refreshTime = () => {
    const date: Date = new Date();
    setstate(time(date));
  };

  
  useEffect(() => {
    setInterval(refreshTime, 1000);
  }, []);

  // animate second hand using styled component
  const SecHand = styled.div`
    animation: ${secHandAnim(String(state?.sec))} 1s linear infinite;
  `;

  return (
    <ThemeProvider theme={setTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="clock">
        <div className="clock__digi">
          <div className="clock__digi--day">{today}</div>
          <div className="clock__digi--time">
            {state?.exactHour}
            <span>:</span>
            {state?.exactMin}
          </div>
        </div>
        <div className="clock__circle ">
          <div
            className="clock__hand clock__hand--min"
            style={{
              transform: `rotate(${min}deg)`,
            }}
          ></div>
          <SecHand className="clock__hand clock__hand--sec" />

          <div
            className="clock__hand clock__hand--hour"
            style={{
              transform: `rotate(${hour}deg)`,
            }}
          ></div>
        </div>

        <div className="clock__theme-switch">
          <input
            type="checkbox"
            checked={setTheme}
            id="switch"
            onClick={() => {
              setThemestate(!setTheme);
            }}
          ></input>
          <label htmlFor="switch" className="switch-label"></label>
        </div>
      </div>
    </ThemeProvider>
  );
}
