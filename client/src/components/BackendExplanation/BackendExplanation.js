import React from "react";
import "./BackendExplanation.css";

const BackendExplanation = () => {
  return (
    <div className="backend-container scale-up">
      <h3>Backend API</h3>
      <p>
        I built the backend in node.js and data is stored in mongoDB. I've
        created your database instance on MLab, a cloud based storage for
        mongoDB hosted by AWS. This was done so you don't need to setup and
        configure mongoDB on your personal machine. You should have received a
        PDF with instructions on how to create your developer keys file, if you
        haven't done that yet, do that now.
      </p>
      <p>
        Without your keys_dev.js file, you won't be able to do anything with the
        database.
      </p>
      <p>
        <small>
          <strong>PSA</strong>: Please note that the private routes are
          encrypted with JSON Web Tokens (JWTs). I use JWTs to secure the
          transfer of JSON data between the client and the server. Thus in order
          for you to make AJAX requests on the private routes, we would need to
          decode it on the client, which is beyond the scope of this React and
          Redux tutorial.
        </small>
      </p>
      <p>Now back to your normal scheduled program...</p>
      <p>
        Below is a list of all the API endpoints for you to write AJAX requests
        to.
      </p>
      <table>
        <thead>
          <tr>
            <td className="one">Route</td>
            <td className="two">Private (P)</td>
            <td className="three">HTTP Action</td>
            <td className="four">Description</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="one">api/users/test</td>
            <td className="two" />
            <td className="three">GET</td>
            <td className="four">Just a test route</td>
          </tr>
          <tr>
            <td className="one">api/users/register</td>
            <td className="two" />
            <td className="three">POST</td>
            <td className="four">CREATE a new user</td>
          </tr>
          <tr>
            <td className="one">api/users/login</td>
            <td className="two" />
            <td className="three">POST</td>
            <td className="four">LOGIN a user</td>
          </tr>
          <tr>
            <td className="one">api/users/current</td>
            <td className="two">P</td>
            <td className="three">GET</td>
            <td className="four">RETRIEVE the current user</td>
          </tr>
          <tr>
            <td className="one">api/profile/test</td>
            <td className="two" />
            <td className="three">GET</td>
            <td className="four">Profile test route</td>
          </tr>
          <tr>
            <td className="one">api/profile</td>
            <td className="two">P</td>
            <td className="three">GET</td>
            <td className="four">RETRIEVE current user's profile</td>
          </tr>
          <tr>
            <td className="one">api/profile</td>
            <td className="two" />
            <td className="three">POST</td>
            <td className="four">CREATE or UPDATE profile</td>
          </tr>
          <tr>
            <td className="one">api/profile</td>
            <td className="two">P</td>
            <td className="three">DELETE</td>
            <td className="four">DESTROY user and profile</td>
          </tr>
          <tr>
            <td className="one">api/profile/all</td>
            <td className="two" />
            <td className="three">GET</td>
            <td className="four">RETRIEVE all profiles</td>
          </tr>
          <tr>
            <td className="one">api/profile/handle/:handle</td>
            <td className="two" />
            <td className="three">GET</td>
            <td className="four">RETRIEVE profile by handle</td>
          </tr>
          <tr>
            <td className="one">api/profile/user/:user_id</td>
            <td className="two" />
            <td className="three">GET</td>
            <td className="four">RETRIEVE profile by user id</td>
          </tr>
          <tr>
            <td className="one">api/profile/experience</td>
            <td className="two">P</td>
            <td className="three">POST</td>
            <td className="four">CREATE an experience</td>
          </tr>
          <tr>
            <td className="one">api/profile/experience/:exp_id</td>
            <td className="two">P</td>
            <td className="three">DELETE</td>
            <td className="four">REMOVE an experience</td>
          </tr>

          <tr>
            <td className="one">api/profile/education</td>
            <td className="two">P</td>
            <td className="three">POST</td>
            <td className="four">CREATE an education</td>
          </tr>
          <tr>
            <td className="one">api/profile/education/:edu_id</td>
            <td className="two">P</td>
            <td className="three">DELETE</td>
            <td className="four">REMOVE an education</td>
          </tr>
          <tr>
            <td className="one">api/posts</td>
            <td className="two" />
            <td className="three">GET</td>
            <td className="four">RETRIEVE all posts</td>
          </tr>
          <tr>
            <td className="one">api/posts</td>
            <td className="two">P</td>
            <td className="three">POST</td>
            <td className="four">CREATE a post</td>
          </tr>
          <tr>
            <td className="one">api/posts/:id</td>
            <td className="two">P</td>
            <td className="three">GET</td>
            <td className="four">RETRIEVE a specific post</td>
          </tr>
          <tr>
            <td className="one">api/posts/:id</td>
            <td className="two">P</td>
            <td className="three">DELETE</td>
            <td className="four">REMOVE post by id</td>
          </tr>
          <tr>
            <td className="one">api/posts/like/:id</td>
            <td className="two">P</td>
            <td className="three">POST</td>
            <td className="four">ADD like to post</td>
          </tr>
          <tr>
            <td className="one">api/posts/unlike/:id</td>
            <td className="two">P</td>
            <td className="three">POST</td>
            <td className="four">REMOVE like from post</td>
          </tr>
          <tr>
            <td className="one">api/posts/comment/:id</td>
            <td className="two">P</td>
            <td className="three">POST</td>
            <td className="four">CREATE comment to a post</td>
          </tr>
          <tr>
            <td className="one">api/posts/comment/:id/:comment_id</td>
            <td className="two">P</td>
            <td className="three">DELETE</td>
            <td className="four">DESTROY comment on a post</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BackendExplanation;
