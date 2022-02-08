import React from 'react';

import './App.css';
import FriendDetail from './containers/frienddetail';
import FriendList from './containers/friendlist';
import FriendListAPI from './containers/friendlistapi';
import FriendUpdate from './containers/friendupdate';

function App() {
  return (
    <div className="App">
     <div style={{overflow: "hidden"}}>
       <div style={{backgroundColor:"pink", width:"50%", float:"left"}}>
         <FriendList></FriendList>
       </div>
       <div style={{backgroundColor:"lightblue", width:"40%", float:"left"}}>
         <FriendListAPI></FriendListAPI>
       </div>
     </div>
     
     <hr></hr>
     <FriendDetail></FriendDetail>
     <hr></hr>
     <FriendUpdate></FriendUpdate>

    </div>
  );
}

export default App;
