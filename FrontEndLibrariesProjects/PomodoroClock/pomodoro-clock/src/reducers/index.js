const defaultState = {
  sessLength: 25,
  breakLength: 5,
  incVal: 1,
  decVal: 1,
  isRunning: false,
  timeRemaining: 5,
  statusMessage: "Stopped",
};
const SESS_INC = "SESS_INC";
const SESS_DEC = "SESS_DEC";
const BREAK_INC = "BREAK_INC";
const BREAK_DEC = "BREAK_DEC";
const RESET = "RESET";
const ALARM = "ALARM";
const STATUS_INDICATOR = "STATUS_INDICATOR";
const START_STOP = "START_STOP";

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SESS_INC:
      return {};

    case SESS_DEC:
      return {};

    case BREAK_INC:
      return {};

    case BREAK_DEC:
      return {};

    case RESET:
      return {};

    case ALARM:
      return {};

    case STATUS_INDICATOR:
      return {};

    case START_STOP:
      return {};

    default:
      return state;
  }
};

export default reducer;
