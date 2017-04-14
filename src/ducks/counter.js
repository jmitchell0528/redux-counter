// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const initialState = {
  currentValue: 0
}

// Constrants (Action Types)
const INCREMENT = 'counter/INCREMENT'

// Action creators (exported functions)
export function increment(amount) {
  return {
    type: INCREMENT,
    amount: amount
  }
}

// Reducer
export default function counter( state = initialState, action ) {
    // return state;
    switch( action.type ) {
    case INCREMENT:
      return { currentValue: state.currentValue + action.amount};

    default:
      return state
  }
}
