import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container slide-top">
      <h1>Nice try</h1>
      <p>
        This is the 404 page. If you check the layout.js file, you'll see how to
        use a &lt;Switch /&gt; from react-router-dom to display 404 Components
      </p>
    </div>
  );
};

export default NotFound;
