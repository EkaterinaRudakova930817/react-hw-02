interface VoteStatsProps {
  good: number;
  neutral: number;
  bad: number;
  positiveRate: number;  
  totalVotes: number; 
}

export default function VoteStats({
  good,
  neutral,
  bad, 
  positiveRate,
  totalVotes,
}: VoteStatsProps) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalVotes}</p>   
      <p>Positive: {positiveRate}%</p>   
    </div>
  );
}
