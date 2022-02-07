const actionFriendEditWithId = function(id){
    console.log("Update friend with id being dispatched: " + id)
    return ({
        type: "FRIEND_UPDATE__BY_ID",
        payload: id
    })
    


}

export default actionFriendEditWithId