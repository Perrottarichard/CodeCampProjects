import {
  SESS_INC,
  SESS_DEC,
  BREAK_INC,
  BREAK_DEC,
  RESET,
  STATUS_INDICATOR,
  START,
  STOP,
  ALARM,
} from "../actions/types";

const defaultState = {
  sessLength: 25,
  breakLength: 5,
  incVal: 1,
  decVal: 1,
  isRunning: false,
  timeLeft: 6000,
  statusMessage: "Stopped",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SESS_INC:
      console.log("*session increment");
      return Object.assign({}, state, {
        sessLength: state.sessLength + 1,
      });

    case SESS_DEC:
      console.log("*session decrement");
      return Object.assign({}, state, { sessLength: state.sessLength - 1 });

    case BREAK_INC:
      console.log("*break increment");
      return Object.assign({}, state, { breakLength: state.breakLength + 1 });

    case BREAK_DEC:
      console.log("*break decrement");
      return Object.assign({}, state, { breakLength: state.breakLength - 1 });

    case RESET:
      return {};

    case ALARM:
      return {};

    case STATUS_INDICATOR:
      return {};

    case START:
      console.log("*start");
      return Object.assign({}, state, { isRunning: true });

    case STOP:
      console.log("*stop");
      return Object.assign({}, state, { isRunning: false });

    default:
      return state;
  }
};

export default reducer;
