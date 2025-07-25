// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import {Profile} from './Profile';
import user from './user.json'

import { Statistics } from './Statistics';
import data from './data.json';

import {FriendList} from './FriendList';
import friends from './friends.json';

// import { TransactionHistory } from './TransactionHistory';
// import transactions from './transactions.json'



function App () {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        

      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      
      <FriendList friends={friends} />

      {/* <TransactionHistory items={transactions}/> */}
     
    </div>

    
  )
}

export default App;
