type VoteOptionsProps = {
  onVote: (type: 'good' | 'neutral' | 'bad') => void;
  onReset: () => void;
  canReset: boolean;
};

function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div>
      <button onClick={() => onVote('good')}>
        Good
      </button>

      <button onClick={() => onVote('neutral')}>
        Neutral
      </button>

      <button onClick={() => onVote('bad')}>
        Bad
      </button>

      {canReset && (
        <button onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;