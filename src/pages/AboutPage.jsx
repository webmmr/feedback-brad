import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <h3>About this app</h3>
      <p>
        This is a simple app to collect feedback from the users with both rating
        and texts. This can be implemented in multiple websites including
        eCommerce, blogs, forums etc.
      </p>
      <p>
        This is the first project of the Brad Traversy React course from Udemy
      </p>
      <p>Version: 1.0.0</p>

      <div>
        <Link to="/">
          <Button version="primary" type="button">
            Go Home
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
