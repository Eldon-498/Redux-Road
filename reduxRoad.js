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
              supplies: state.supplies - 20,
              distance: state.distance + 10,
              days: state.distance + action.payload
            }
          }
        default: {
          return state;
        }
      }
}