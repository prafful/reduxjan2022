//all the reducers where dispatch (event + paylod) will be processd, will always receive 
//two parameters -> state, action
const reducerFriendNameClickedAndDispatchReceived = function(state=null, action){
    console.log("Dispatch action received with two parameters!")
    console.log("State: ")
    console.log(state)
    console.log("Action")
    console.log(action)

    switch (action.type) {
        case "FRIEND_NAME_CLICKED":
            console.log("Captured friend name clicked action: " + action.payload)
            return action.payload
    
        default:
            break;
    }

    return state

}

export default reducerFriendNameClickedAndDispatchReceived