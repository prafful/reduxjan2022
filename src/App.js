import React from 'react';

import './App.css';
import FriendDetail from './containers/frienddetail';
import FriendList from './containers/friendlist';

function App() {
  return (
    <div className="App">
     
     < FriendList></FriendList>
     <hr></hr>
     <FriendDetail></FriendDetail>

    </div>
  );
}

export default App;
