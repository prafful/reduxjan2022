import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionFriendNameClicked from '../actions/actionFriendNameClicked';
import Friend from './friend';


function FriendList(props) {

    console.log("In component")
    console.log(props.friendsall)
    console.log(props.aliensall)

    function friendClicked(id){
        console.log("Friend clicked with id: " + id)
        props.friendClickedDispatch(id)
    }

    function displayFriendNames(){
        return props.friendsall.map((f)=>{
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

    return ( 
        <div>
            List of friends from store! 
            <br></br>
            (friendlist component -> friend compoent)
            <table border="1">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                     {displayFriendNames()}
                </tbody>
            </table>
           
        </div>
     );
}

//convert the store to props to be able to access store in FriendList
function convertFriendStoreToProps(storeReceived){
    console.log(storeReceived)
    return {
        friendsall: storeReceived.allfriendsNames,
        aliensall: storeReceived.allaliens
    }
}

//map function to props and dispatch
function mapPropsFunctionToActionAndDispatch(dispatch){
    return bindActionCreators({
        friendClickedDispatch: actionFriendNameClicked
    }, dispatch)

}


export default  connect(convertFriendStoreToProps, mapPropsFunctionToActionAndDispatch)(FriendList);