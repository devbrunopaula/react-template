// Reducer
// 1st Argument = Initial State   ext state = 0
// 2nd Argument = Action

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
           return state + 1;
        case 'DECREMENT':
            return state - 1;  
      
            default:
                return state
    }

}

export default counterReducer