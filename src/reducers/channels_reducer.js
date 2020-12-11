export default function(state = null, action) {
    switch (action.type) {
      case 'UPDATE_CHANNELS': {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  }