import { BsQuestionLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <BsQuestionLg size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
