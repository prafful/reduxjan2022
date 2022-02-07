import { combineReducers } from "redux";
import reducerAliensData from "./reducer-alien";
import reducerFriendsData from "./reducer-friend";
import reducerFriendNameClickedAndDispatchReceived from "./reducer-friendclicked";
import reducerOtherfriendsData from "./reducer-otherfriend";


const allFriendReducers = combineReducers(
    {
        allfriendsNames: reducerFriendsData,
        allotherfriends: reducerOtherfriendsData,
        allaliens: reducerAliensData,
        friendclickedwithid: reducerFriendNameClickedAndDispatchReceived
    }
)

export default allFriendReducers