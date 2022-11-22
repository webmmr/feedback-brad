import { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";
import SelectRatings from "./SelectRatings";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [rating, setRating] = useState(10);
  const [feedback, setFeedback] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { handleAdd, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setFeedback(feedbackEdit.item.feedback);
    }
  }, [feedbackEdit]);

  const handleFeedback = (e) => {
    let text = e.target.value;

    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("At least 10 characters needed");
    } else if (text.length > 10) {
      setMessage(null);
      setBtnDisabled(false);
    }

    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.trim().length > 10) {
      const newFeedback = {
        feedback,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        handleAdd(newFeedback);
      }

      setBtnDisabled(true);
      setFeedback("");
      setRating(null);
    }
  };

  return (
    <Card>
      <h2>Share your experience with us</h2>
      <form onSubmit={handleSubmit}>
        <SelectRatings select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your experience"
            onChange={handleFeedback}
            value={feedback}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
