import React from "react";
import s from "./Feedback.module.css";
const Feedback = ({ votingData, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={s.list}>
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
