const actionUpdateFriend = function(updatedFriend){
    console.log("updatedFriend dispatch is ready for broadcast....")
    console.log(updatedFriend)
    return ({
        type:"FRIEND_UPDATE",
        payload: updatedFriend
    })
}

export default actionUpdateFriend