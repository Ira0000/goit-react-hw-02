import React from "react";
import s from "./Options.module.css";
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.list}>
      <button className={s.btnGood} onClick={() => updateFeedback(`good`)}>
        Good
      </button>
      <button
        className={s.btnNeutral}
        onClick={() => updateFeedback(`neutral`)}
      >
        Neutral
      </button>
      <button className={s.btnBad} onClick={() => updateFeedback(`bad`)}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.btnReset} onClick={() => resetFeedback()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
