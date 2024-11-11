import { useState } from 'react';
import { ClickTracker } from '../ClickTracker/ClickTracker.jsx';
import { Description } from '../Description/Description.jsx';
import { FeedBack } from '../FeedBack/FeedBack.jsx';

function App() {
  const getInitialClicks = () => {
    const savedClicks = window.localStorage.getItem('my-clicks');
    return savedClicks ? JSON.parse(savedClicks) : { good: 0, neutral: 0, bad: 0 };
  };
  const [clicks, setClicks] = useState(getInitialClicks);

  const initialClicks = { good: 0, bad: 0, neutral: 0 };
  
  const updateFeedBack = type => {
    const newClicks = { ...clicks, [type]: clicks[type] + 1 };
    setClicks(newClicks);
    window.localStorage.setItem('my-clicks', JSON.stringify(newClicks));
  };

  const resetClicks = () => {
    setClicks(initialClicks);
    window.localStorage.setItem('my-clicks', JSON.stringify(initialClicks));
  };

  const total = clicks.good + clicks.neutral + clicks.bad;
  const positivePersent = total === 0 ? 0 : Math.round(((clicks.good + clicks.neutral) / total) * 100);

  return (
    <div>
      <Description />
      <ClickTracker updateFeedBack={updateFeedBack} resetClicks={resetClicks} />
      {total === 0 ? <p>Not feedback yet</p> : <FeedBack total ={ total} positivePersent = {positivePersent} clicks = {clicks} />}
    </div>
  );
}

export default App;
