//all the reducers where dispatch (event + paylod) will be processd, will always receive 
//two parameters -> state, action
const reducerFriendEditDispatchReceived = function(state=null, action){
    console.log("Dispatch action received with two parameters for edit!")
    console.log("State: ")
    console.log(state)
    console.log("Action")
    console.log(action)

    switch (action.type) {
        case "FRIEND_UPDATE__BY_ID":
            console.log("Captured friend name edit action: " + action.payload)
            return action.payload
    
        default:
            break;
    }

    return state

}

export default reducerFriendEditDispatchReceived