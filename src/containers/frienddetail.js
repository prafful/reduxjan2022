import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionFriendEditWithId from '../actions/actionFriendEditWithId';


function FriendDetail(props) {

    let friend = null
    console.log("Received values from store as props")
    //console.log(props.allfriends)
    console.log(props.friendclicked)

    // function filterAndDisplay(){

    //     friend = props.allfriends.filter((f)=>{
    //         return f.id == props.idclicked
    //     })
    //     console.log("Friend details who was clicked");
    //     console.log(friend)
    //     if(friend.length === 0){
    //         return (
    //             <div>
    //                 <strong> Click on friend above to view details....</strong>
    //             </div>
    //         )
    //     }
    //     if(friend.length === 1){
    //         return (
    //             <span>
    //                 <br></br>
    //                 Friend id (clicked): {friend[0].id}
    //                 <br></br>
    //                 Friend name: {friend[0].name}
    //                 <br></br>
    //                 Friend location: {friend[0].location}
    //                 <br></br>
    //                 Friend since: {friend[0].since}
    //                 <br></br>
    //                 Acitve till date: {friend[0].active? "Yes": "No"}
    //                 <br></br>
    //                 <button onClick={editWithId}>Edit</button>
    //             </span>
    //         )
    //     }

    // }

    function display() {

        if (props.friendclicked === null) {
            return (
                <div>
                    <strong> Click on friend above to view details....</strong>
                </div>
            )
        } else {
            return (
                <span>
                    <br></br>
                    Friend id (clicked): {props.friendclicked.id}
                    <br></br>
                    Friend name: {props.friendclicked.name}
                    <br></br>
                    Friend location: {props.friendclicked.location}
                    <br></br>
                    Friend since: {props.friendclicked.since}
                    <br></br>
                    Acitve till date: {props.friendclicked.active ? "Yes" : "No"}
                    <br></br>
                    <button onClick={editWithId}>Edit</button>
                </span>
            )
        }

    }

    //dispatch the id which needs to be edited
    function editWithId() {
        let friendedit = {
            id: props.friendclicked.id,
            name: props.friendclicked.name,
            location: props.friendclicked.location,
            since: props.friendclicked.since,
            active: props.friendclicked.active,
            type: props.friendclicked.type
        }

        props.editIdDispatch(friendedit)
    }

    return (
        <div>
            <div>
                <h1>
                    Friend Details:
                </h1>
            </div>
            <div>
                {display()}
            </div>
        </div>
    );
}

//capture the store
function mapStoreAsPropsInFriendDetail(store) {
    console.log("In FriendDetail component (store received)")
    console.log(store)
    return {
        //allfriends: store.allfriendsNames,
        friendclicked: store.friendclickedwithid
    }
}

//map function to props and dispatch the event and object
function mapFunctionToPropsAndDispatch(dispatch) {
    return bindActionCreators({
        editIdDispatch: actionFriendEditWithId
    }, dispatch)
}

export default connect(mapStoreAsPropsInFriendDetail, mapFunctionToPropsAndDispatch)(FriendDetail);