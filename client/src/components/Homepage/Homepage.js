import React from "react";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container scale-up">
      <h1 className="text-center">Hi opendorse team!</h1>
      <p>
        David speaking here. I heard you are excited about transitioning to
        React and you're having a blast; yet there are some sticking points.
      </p>
      <p>
        After I spoke with Abbie for a phone screening on Friday, July 6th, I
        decided to create a backend for you to play with yourself. To help you
        along, I wrote a brief introduction to React, React Router DOM, and
        Redux here.
      </p>
      <p>
        To be clear, I have no idea what level of understanding you have with
        React and Redux. Thus, I will make very few assumptions. I'd rather
        explain something you already know, rather than lose you somewhere in
        the learning process.
      </p>
      <p>
        Also, I'm writing a blog series on React and Redux too. It will be more
        comprehensive than what you'll find here though. Why? Well, I wanted to
        get you a backend API set up so you can start playing with a project
        that it doesn't matter if you make mistakes on.
      </p>
      <p>
        <a
          href="http://learn.davidmdugger.com/practical-guide-to-learning-react-js-part-1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is a link to part one of that series
        </a>{" "}
        if you're interested.
      </p>
      <p>
        It's super basic, so I'm guessing you're beyond this level. However,
        it's something you can pass off to interns, friends, or whoever you
        like.
      </p>
      <p>I'm sure part 2, 3, and 4 will be more interesting for you.</p>
      <p>
        Lastly, this isn't a comprehensive guide. Afterall, I only wrote this in
        less than a weekend along with starting the blog series.
      </p>
    </div>
  );
};

export default Homepage;
