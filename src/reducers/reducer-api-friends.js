import axios from "axios"

export default function reducerAPIFriendsData(state = null, action) {
    let allfriends = []
    return axios.get("http://localhost:3000/allfriends")
            .then(res=>{
                console.log("API Reducer allfriends created");
                console.log(res);
                allfriends = res.data
                return allfriends
            }, err=>{
                console.log(err)
            })
    // console.log("Dispatch friend update action received with two parameters!")
    // console.log("State: ")
    // console.log(state)
    // console.log("Action")
    // console.log(action)

    // switch (action.type) {
    //     case "FRIEND_UPDATE":
    //         console.log("Received updated friend for update to data source (allfriends)");
    //         console.log(action.payload)
    //         //update the action.payload in state. State holds original data source (allfriends)
    //         allfriends.map((friend)=>{
    //             if(friend.id === action.payload.id){
    //                 friend.name = action.payload.name
    //                 friend.location = action.payload.location
    //                 friend.since = action.payload.since
    //                 friend.active = action.payload.active
    //             }
    //         })
    //         console.log("allfriends check");
    //         console.log(allfriends);
    //         return allfriends
    // }
    

    // console.log("Reducer allfriends created");
    // return allfriends
}