import css from './VoteStats.module.css';

interface VoteStatsProps {
  good: number;
  neutral: number;
  bad: number;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  good,
  neutral,
  bad,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalVotes}</p>
      <p>Positive: {positiveRate}%</p>
    </div>
  );
}