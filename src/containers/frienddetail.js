import React from 'react';
import { connect } from 'react-redux';


function FriendDetail(props) {

    console.log("Received values from store as props")
    console.log(props.allfriends)
    console.log(props.idclicked)

    function filterAndDisplay(){
        let friend = null
        friend = props.allfriends.filter((f)=>{
            return f.id == props.idclicked
        })
        console.log("Friend details who was clicked");
        console.log(friend)
        if(friend.length === 0){
            return (
                <div>
                    <strong> Click on friend above to view details....</strong>
                </div>
            )
        }
        if(friend.length === 1){
            return (
                <span>
                    <br></br>
                    Friend id (clicked): {friend[0].id}
                    <br></br>
                    Friend name: {friend[0].name}
                    <br></br>
                    Friend location: {friend[0].location}
                    <br></br>
                    Friend since: {friend[0].since}
                </span>
            )
        }
        
    }

    return (  
        <div>
            <div>
                <h1>
                    Friend Details:
                </h1>
            </div>
            <div>
                {filterAndDisplay()}
            </div>
        </div>
    );
}

//capture the store
function mapStoreAsPropsInFriendDetail(store){
    console.log("In FriendDetail component (store received)")
    console.log(store)
    return {
        allfriends: store.allfriendsNames,
        idclicked: store.friendclickedwithid
    }

}

export default connect(mapStoreAsPropsInFriendDetail)(FriendDetail);