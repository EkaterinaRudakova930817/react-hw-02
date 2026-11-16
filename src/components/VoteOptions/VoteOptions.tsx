import type { VoteType } from "../../types/votes";
import styles from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={styles.container}>
      <button onClick={() => onVote("good")}>Good</button>
      <button onClick={() => onVote("neutral")}>Neutral</button>
      <button onClick={() => onVote("bad")}>Bad</button>
      {canReset && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
