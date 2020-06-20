const loginReducer = (state= false, action) => {

    switch(action.type){

        case 'SIGN_IN':
            return state = true;
        case 'LOGGED_OUT':
            return state = false; 
        default:
            return state   
    }
}

export default loginReducer