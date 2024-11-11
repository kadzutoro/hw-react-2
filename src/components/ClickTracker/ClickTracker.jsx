export const ClickTracker = ({updateFeedBack, resetClicks}) => {
    return (
      <div>
        <button onClick={() => {updateFeedBack('good')}}>Good</button>
        <button onClick={() => {updateFeedBack('neutral')}}>Neutral</button>
        <button onClick={() => {updateFeedBack('bad')}}>Bad</button>
        <button onClick={resetClicks}>Reset</button>
      </div>
    );
  };
