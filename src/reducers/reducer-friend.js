export default function reducerFriendsData(state = null, action) {
    let allfriends = [
        { "id": 1, "name": "Florina", "location": "eu", "since": 2, "active": false },
        { "id": 2, "name": "Ricca", "location": "platea dictumst", "since": 11, "active": true },
        { "id": 3, "name": "Julina", "location": "pede", "since": 12, "active": true },
        { "id": 4, "name": "Sallyanne", "location": "nulla mollis", "since": 3, "active": true }
    ]

    console.log("Dispatch friend update action received with two parameters!")
    console.log("State: ")
    console.log(state)
    console.log("Action")
    console.log(action)

    switch (action.type) {
        case "FRIEND_UPDATE":
            console.log("Received updated friend for update to data source (allfriends)");
            console.log(action.payload)
            //update the action.payload in state. State holds original data source (allfriends)
            allfriends.map((friend)=>{
                if(friend.id === action.payload.id){
                    friend.name = action.payload.name
                    friend.location = action.payload.location
                    friend.since = action.payload.since
                    friend.active = action.payload.active
                }
            })
            console.log("allfriends check");
            console.log(allfriends);
            return allfriends
    }
    

    console.log("Reducer allfriends created");
    return allfriends
}