import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionUpdateFriend from '../actions/actionFriendUpdate';


function FriendUpdate(props) {

    let friend = null

    //const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [since, setSince] = useState(0)
    const [active, setActive] = useState(false)


    useEffect(()=>{
        console.log("in useEffect");
    },[name])


    console.log("Received values from store as props")
    console.log(props.editfriend)
    friend = props.editfriend

    function display() {

        console.log("Friend details who needs to be edited")
        console.log(friend)
        if (friend === null) {
            return (
                <div>
                    <strong>  Click on edit button (in Friend Details) to update friend.</strong>
                </div>
            )
        }
        if (friend != null) {


            return (
                <span>
                    <br></br>

                    Friend id (clicked): 
                    <input type="text" value={friend.id} readOnly></input>
                    <span style={{color:'lightgrey'}}>{friend.id}</span>
                    <br></br>
                    Friend name: 
                    <input type="text" value={name}  onChange={changeName}></input>
                    <span style={{color:'lightgrey'}}>{friend.name}</span> 
                    <br></br>
                    Friend location: 
                    <input type="text" value={location} onChange={changeLocation} ></input>
                    <span style={{color:'lightgrey'}}> {friend.location}</span>
                    <br></br>
                    Friend since: 
                    <input type="number" value={since} onChange={changeSince}></input>
                    <span style={{color:'lightgrey'}}>{friend.since}</span>

                    <br></br>
              
                    Friend active:  
                    <select onChange={changeActive} value={active}>
                        <option value={true}>Yes</option>    
                        <option value={false}>No</option>
                    </select>
                    <span style={{color:'lightgrey'}}>{friend.active ? "Yes": "No"}     </span>
                    <br></br>
                    <button onClick={captureUpdatedFriend}>Update</button>
                </span>
            )
        }

    }

    function changeName(e){
        console.log(e.target.value)
        setName(name=>e.target.value)
    }

    function changeLocation(e){
        console.log(e.target.value)
        setLocation(location=>e.target.value)
    }

    function changeSince(e){
        console.log(e.target.value)
        setSince(since=>e.target.value)
    }

    function changeActive(e){
        console.log(e.target.value)
        setActive(active=>e.target.value)
    }

    function captureUpdatedFriend(){
        let updatedFriend = {
            id: friend.id, 
            name: name, 
            location: location, 
            since: since, 
            active: active
        }
        console.log("Updated friend which will be dispatched as payload: ")
        console.log(updatedFriend)
        //dispatch function as props for the action listener
        props.dispatchUpdatedFriend(updatedFriend)
    }

    return (
        <div>
            <div>
                <h1>
                    Friend Update:
                </h1>
            </div>

            <div>
                {display()}
            </div>
        </div>

    );
}

//map store to props
function convertStoreToPropsForFriendUpdate(store) {
    console.log("store received in FriendUpdate");
    console.log(store)
    return {
       editfriend: store.friendeditwithid
    }
}

//map function to props for dispatch
function mapUpdateFriendToPropsAndDispatch(dispatch){
    //map function as props to some action listener
    //action listener will broadcast the dispatch
    return bindActionCreators({
        dispatchUpdatedFriend: actionUpdateFriend
    }, dispatch )
}

export default connect(convertStoreToPropsForFriendUpdate, mapUpdateFriendToPropsAndDispatch)(FriendUpdate)