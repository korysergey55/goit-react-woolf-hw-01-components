import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import dataStats from '../sourses/statistics/data.json'

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
        padding: '50px 20px',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h2>Task-1 User Profile</h2>
      <Profile />
      <h2>Task-2 User Statistics</h2>
      <Statistics title="Upload stats" stats={dataStats} />
    </div>
  );
};
