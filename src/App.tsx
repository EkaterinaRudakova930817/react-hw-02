import { useState } from 'react';
import CafeInfo from './components/CafeInfo/Cafeinfo';
import VoteOptions from './components/VoteOptions/VoteOptions';
import VoteStats from './components/VoteStats/VoteStats';
import Notification from './components/Notification/Notification';
import './App.css';

function App() {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: 'good' | 'neutral' | 'bad') => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const handleReset = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate =
    totalVotes > 0
      ? Math.round((votes.good / totalVotes) * 100)
      : 0;

  return (
    <div>
      <CafeInfo />

      <VoteOptions
        onVote={handleVote}
        onReset={handleReset}
        canReset={totalVotes > 0}
      />

      {totalVotes > 0 ? (
        <VoteStats
          good={votes.good}
          neutral={votes.neutral}
          bad={votes.bad}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;