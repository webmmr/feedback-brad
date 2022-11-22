import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>
        {feedback.length} review{feedback.length !== 1 ? "s" : ""}
      </h4>
      <h4>
        Average rating: {isNaN(avg) ? 0 : avg.toFixed(1).replace(/[,.]0$/, "")}
      </h4>
    </div>
  );
}

export default FeedbackStats;
