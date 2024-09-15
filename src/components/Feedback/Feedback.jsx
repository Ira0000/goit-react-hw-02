import React from "react";

const Feedback = ({ votingData, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {votingData.good} </li>
        <li>Neutral: {votingData.neutral}</li>
        <li>Bad: {votingData.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
