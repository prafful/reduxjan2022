import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionFriendNameClicked from '../actions/actionFriendNameClicked';
import Friend from './friend';

function FriendListAPI(props) {

    const [friends, setFriends] = useState([])

    console.log("Promise based all friends array received from store")
    console.log(props.allfriendsfromapi)
    console.log(typeof (props.allfriendsfromapi));

    function displayFriendsFromAPI() {
        props.allfriendsfromapi.then(response => {
            console.log("Reading values from promise....")
            console.log(response)
            setFriends(previousValue => response)
            console.log("friends state in FriendListAPI");
            console.log(friends);
            // response.map(friend=>{
            //    console.log(friend)
            // })
        })
        console.log("length of friends state")
        console.log(friends.length)
        if (friends.length === 0) {
            return (
                <div>
                    <div>
                        Pending....
                    </div>
                </div>
            )
        } else {
            return friends.map(f => {
                return (
                    <Friend
                    key = {f.id}
                    name = {f.name}
                    id = {f.id}
                    friendClick = {friendClicked}
               ></Friend>
                )
            })
        }
    }

    function friendClicked(id){
        console.log("Friend clicked with id (API): " + id)
        props.friendClickedDispatch(id)
    }


    return (
        <div>
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayFriendsFromAPI()}
                    </tbody>
                </table>


            </div>
        </div>
    );
}


//convert store to props
function mapStoreToPropsForFriendListAPI(store) {
    console.log("Store received in FriendListAPI container");
    console.log(store);

    return {
        allfriendsfromapi: store.apiallfriends
    }

}

//map function to props and dispatch
function mapPropsFunctionToActionAndDispatch(dispatch){
    return bindActionCreators({
        friendClickedDispatch: actionFriendNameClicked
    }, dispatch)

}

export default connect(mapStoreToPropsForFriendListAPI, mapPropsFunctionToActionAndDispatch)(FriendListAPI);