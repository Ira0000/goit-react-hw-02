import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [votingData, setVotingData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = votingData.good + votingData.neutral + votingData.bad;
  const positiveFeedback = Math.round((votingData.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setVotingData(() => {
      return { good: 0, neutral: 0, bad: 0 };
    });
  };

  const updateFeedback = (feedbackType) => {
    // console.log(feedbackType);
    if (feedbackType === `good`) {
      setVotingData((prev) => {
        return {
          ...prev,
          good: prev.good + 1,
        };
      });
    }
    if (feedbackType === `neutral`) {
      setVotingData((prev) => {
        return {
          ...prev,
          neutral: prev.neutral + 1,
        };
      });
    }
    if (feedbackType === `bad`) {
      setVotingData((prev) => {
        return {
          ...prev,
          bad: prev.bad + 1,
        };
      });
    }
  };
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          votingData={votingData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
