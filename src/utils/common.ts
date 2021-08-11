import {  keyframes } from "styled-components";


export type timeDetails = {
  hour: String;
  min: String;
  sec: String;
  exactHour: Number;
  exactMin: Number;
};

export function time(date: Date): timeDetails {
  const hour: String = String(((date.getHours() % 12) - 1) * 30 + 300);
  const min: String = String(date.getMinutes() * 6 + 270);
  const sec: String = String(date.getSeconds() * 6 - 90);
  const exactHour: Number = date.getHours();
  const exactMin: Number = date.getMinutes();
  return { hour, min, sec, exactHour, exactMin };
}

export const secHandAnim = (sec: string) => {
  return keyframes`
    from {
      transform: rotate(${sec}deg);
    }

    to {
      transform: rotate(${sec}deg);
    }
  `;
};

export const gsDayNames:String[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];