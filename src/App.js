import React from 'react';

import './App.css';
import FriendDetail from './containers/frienddetail';
import FriendList from './containers/friendlist';
import FriendUpdate from './containers/friendupdate';

function App() {
  return (
    <div className="App">
     
     < FriendList></FriendList>
     <hr></hr>
     <FriendDetail></FriendDetail>
     <hr></hr>
     <FriendUpdate></FriendUpdate>

    </div>
  );
}

export default App;
