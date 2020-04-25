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
  STATE_SHIFT,
} from "../actions/types";

const defaultState = {
  sessLength: 2,
  breakLength: 5,
  incVal: 1,
  decVal: 1,
  isRunning: false,
  timeLeft: null,
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
      return Object.assign({}, defaultState);

    case ALARM:
      return Object.assign({}, state, { statusMessage: "Alarm" });

    case STATUS_INDICATOR:
      if (state.isRunning) {
        return Object.assign({}, state, {
          statusMessage: "Session In Progress",
        });
      } else {
        return Object.assign({}, state, { statusMessage: "Paused" });
      }

    case START:
      console.log("*start");
      return Object.assign({}, state, { isRunning: true });

    case STOP:
      console.log("*stop");
      return Object.assign({}, state, { isRunning: false });

    case STATE_SHIFT:
      return Object.assign({}, state, {
        statusMessage: "Break Time",
      });

    default:
      return state;
  }
};

export default reducer;
