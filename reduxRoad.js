const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
  }
const reducer = (state=initialWagonState, action) => {
    switch(action.type){
        case 'gather': {
            return {
              ...state,
              supplies: state.supplies + 15,
              days: state.days + 1
            }
          }
          case 'travel': {
            return {
              ...state,
              supplies: state.supplies - (20*action.payload),
              distance: state.distance + 10,
              days: state.distance + action.payload
            }
          }
          case 'tippedWagon': {
            return {
              ...state,
              supplies: state.supplies - 30,
              days: state.days + 1
            }
          }
        default: {
          return state;
        }
      }
}
let wagon = reducer(undefined, {});
console.log(wagon);
wagon = reducer(initialWagonState, {type: 'travel',
payload: 1});
console.log(wagon);