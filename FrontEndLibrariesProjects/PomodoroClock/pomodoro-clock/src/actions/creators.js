import {
  SESS_INC,
  SESS_DEC,
  BREAK_INC,
  BREAK_DEC,
  RESET,
  STATUS_INDICATOR,
  START_STOP,
  ALARM,
} from "./types";

export const sessInc = () => {
  return {
    type: SESS_INC,
  };
};
export const sessDec = () => {
  return {
    type: SESS_DEC,
  };
};
export const breakInc = () => {
  return {
    type: BREAK_INC,
  };
};
export const breakDec = () => {
  return {
    type: BREAK_DEC,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};
export const alarm = () => {
  return {
    type: ALARM,
  };
};
export const start_Stop = (timeLeft) => {
  return {
    type: START_STOP,
    timeLeft,
  };
};
export const statusIndicator = () => {
  return {
    type: STATUS_INDICATOR,
  };
};
