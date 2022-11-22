import { BsXLg, BsPencilSquare } from "react-icons/bs";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ feedback }) {
  const { handleDelete, handleEdit } = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => handleDelete(feedback.id)}>
        <BsXLg color="purple" />
      </button>
      <button onClick={() => handleEdit(feedback)} className="edit">
        <BsPencilSquare color="purple" />
      </button>
      <div className="text-display">{feedback.feedback}</div>
    </Card>
  );
}

FeedbackItem.proptype = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
