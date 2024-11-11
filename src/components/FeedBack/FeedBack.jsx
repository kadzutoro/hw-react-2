export const FeedBack = ({ positivePersent, total, clicks }) => {
  return (
    <>
      <div>Good: {clicks.good} </div>
      <div>Neutral: {clicks.neutral}</div>
      <div>Bad: {clicks.bad} </div>
      <div>Total: {total} </div>
      <div>Positive: {positivePersent}% </div>
    </>
  );
};
