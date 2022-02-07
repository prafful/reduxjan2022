const actionFriendNameClicked = function(id){
    console.log("Friend with id clicked and being dispatched for click: " + id)
    return ({
        type: "FRIEND_NAME_CLICKED",
        payload: id
    })
    


}

export default actionFriendNameClicked