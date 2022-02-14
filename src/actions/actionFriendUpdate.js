const actionUpdateFriend = function(updatedFriend){
    console.log("updatedFriend dispatch is ready for broadcast....")
    console.log(updatedFriend)
    if (updatedFriend.type === "api") {
        return ({
            type:"FRIEND_UPDATE_API",
            payload: updatedFriend
        })
    }else{
        return ({
            type:"FRIEND_UPDATE_LOCAL",
            payload: updatedFriend
        })
    }

   
}

export default actionUpdateFriend