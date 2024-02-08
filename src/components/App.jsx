import dataStatsJSON from '../sourses/statistics/data.json'
import dataFriendListJSON from '../sourses/friends/friends.json'
import dataTransactionsJSON from '../sourses/transactions/transactions.json'

import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactions/Transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 0',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h2>Task-1 User Profile</h2>
      <Profile />

      <h2>Task-2 User Statistics</h2>
      <Statistics title="Upload stats" stats={dataStatsJSON} />

      <h2>Task-3 Friend List</h2>
      <FriendList data={dataFriendListJSON} />

      <h2>Task-4 Transaction History</h2>
      <TransactionHistory items={dataTransactionsJSON} />
    </div >
  );
};
