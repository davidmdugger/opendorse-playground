import React from "react";
import "./ReactBasics.css";

const ReactBasics = () => {
  return (
    <div className="react-basics-container scale-up">
      <h1 className="text-center">React Basics</h1>
      <p>Learn once, write once, use everywhere.</p>
      <p>
        React was created to make it easier and faster to create web apps (and
        mobile with React Native, and desktop apps with Electron), and to also
        create wicked fast frontends with client-side routing, the virtual DOM,
        and composable components.
      </p>
      <p>You shout, “Woah, woah! Settle down there, hoss. Use English, man!”</p>
      <p>
        Yeah, when I first read about React, everyone used all this esoteric
        language it made you want an interpreter.
      </p>
      <p>Say no more!</p>
      <p>
        If you want a very beginner intro to React, check out my blog series I'm
        curretly writing.{" "}
        <a
          href="http://learn.davidmdugger.com/practical-guide-to-learning-react-js-part-1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          You can find that series here
        </a>.
      </p>
      <h3 className="heading">Client-side Routing</h3>
      <p>
        Rather than sending a request to the server every time a link is clicked
        on your site, pulling the markup, the styles, the JavaScript, and
        images, client side routing performs all the tasks that do not require
        an HTTP request.
      </p>
      <p>How does this work?</p>
      <p>
        When a user visits a site with client-side routing, the entire site is
        dowloaded on the first hit to the server.
      </p>
      <p>
        The negative consequence is that it takes a little longer to load the
        app you’ve built on initial load.
      </p>
      <p>
        However, after that, user experience rivals of that of native desktop
        and mobile apps because now we can instantaneously render from any page
        because it’s already been dowloaded to web browser.
      </p>
      <h3 className="heading">React Router DOM</h3>
      <p>
        I'm only going to focus on React on the web here, because it's very
        different on mobile and desktop; and I don't know those...yet.
      </p>
      <p>
        BrowserRouter is the routing package we'll use. It's pretty great. Also,
        we will be using version 4.0 or higher. BrowserRouter 3.x was a very
        different routing system.
      </p>
      <p>
        React is a very unopinionated technology. Unopinionated just means that
        it is very lightweight and very flexible; this allows developers to make
        their own decision in terms of frontend architecture, as well as which
        packages to use.
      </p>

      <h4 className="heading">What all do you get with React Router DOM?</h4>
      <p>
        It's a pretty small API. There are only 12 APIs total in React Router
        DOM. I'll be focusing on four of them for now, because they are, by far,
        the most commonly used:
      </p>
      <ul className="list-margin">
        <li>BrowserRouter</li>
        <li>Route</li>
        <li>Redirect</li>
        <li>Switch</li>
      </ul>

      <h4 className="heading">BrowserRouter</h4>
      <p>
        BrowserRouter is a component you wrap all around all of your routes.
      </p>
      <p>
        This means all child components are capable of using any of the other
        APIs within react-router-dom.
      </p>
      <p>
        So, essentially, if you want client-side routing (and you do), you need
        all of your routes to exist as child components of BrowserRouter. If you
        take a look at the Layout.js file on github, you'll see the
        BrowserRouter in action.
      </p>
      <p>
        It's literally just a component that allows you to use routing in all
        child elements.
      </p>
      <p>
        BrowserRouter also creates a history object for every single route. This
        history object allows the app to keep track of the current location of
        the user, and the app needs this in order to determine what child
        components to render.
      </p>

      <h4 className="heading">Switch</h4>
      <p>
        Switch will search through all child components, and only render the
        first match.
      </p>
      <p>
        This is especially useful for when no match can be found. Then you can
        just render a 404 component if no other match is found.
      </p>

      <h4 className="heading">Redirect</h4>
      <p>
        Redirect is exactly what it sounds like; you use this to Redirect a
        user. A specific example would be when the user logouts of their
        account, you would want to redirect the client to, say, the login form
        or a component that tells them they successfully logged out.
      </p>

      <h4 className="heading">Route</h4>
      <p>
        Route is a component that you'll use a lot. In fact, you'll use it for
        every single main component that you want to load when a user navigates
        around your web app. Think of a route as a page; to be clear, it is{" "}
        <strong>NOT</strong> a page; after all we are creating single page
        applications here. However, in the beginning, if you just think of a
        route as a new page, then that's fine.
      </p>
      <p>The beautiful navigation on this site is using frontend routing.</p>
      <p>
        When you click on a different nav item, you'll notice new information is
        displayed. You'll also notice that the page never needs to reload.
      </p>
      <p>
        That's because I am simply directing the app to load a specific
        component based on what URL is matched in my router.
      </p>
      <p>The Route API has a couple important props</p>
      <ul className="list-margin">
        <li>component</li>
        <li>path</li>
        <li>exact</li>
      </ul>
      <p>
        The three props above will be used almost every time you use the Route
        component.{" "}
      </p>
      <p>
        You use <strong>path</strong> for the specific URL, and you use{" "}
        <strong>exact</strong> when you want to go to that path and only that
        path.
      </p>
      <p>
        The path attribute uses a regular expression to compare the URL. Regular
        expressions simply look for the first match they find and then exit.
      </p>
      <p>This is problematic.</p>
      <p>Let's look at an example:</p>
      <div className="code-text">
        <p>&lt;Route path="/" component=&#x0007B; Homepage &#x0007D; /&gt;</p>
        <p>
          &lt;Route path="/react-basics" component=&#x0007B; ReactBasics
          &#x0007D; /&gt;
        </p>
      </div>
      <p>
        As you can, we have two routes above. The first one is simply directing
        traffic to the root route ("/") and when that route is hit, then the
        component attribute says to render the component called Homepage.
      </p>
      <p>
        The second route is directing traffic to the "/react-basics" route. When
        the this route is hit, then the component that should render is the
        ReactBasics component.
      </p>
      <p>However, that won't happen based on our instructions so far.</p>
      <p>
        As I mentioned, the Route component uses a regular expression to
        determine what path to send traffic to. So, that forward slash at the
        beginning of both paths is going to trigger a match and the regex will
        exit, then the Homepage component will render because the regex said,
        "Found the match boss. The root route was hit."
      </p>
      <p>
        Once a regular expression finds a match, it exits. So, the regex matched
        that forward slash and the instructions are to stop searching and load
        the Homepage component immediately.
      </p>
      <p>
        Literally, you could have 100 routes, or 100 billion routes, and the
        regular expression will always match the root route 100% of the time and
        render the Homepage component each time.
      </p>
      <p>So, what's a developer to do?</p>
      <p>
        That's where the attribute <strong>exact</strong> comes into play. When
        you use exact, you are telling React that you demand the exact path to
        be matched by the regular expression, then to render the component you
        say should be rendered.
      </p>
      <p>
        Thus, to fix our code, you just need to add the exact attribute to both
        routes, like so:
      </p>
      <div className="code-text">
        <p>
          &lt;Route exact path="/" component=&#x0007B; Homepage &#x0007D; /&gt;
        </p>
        <p>
          &lt;Route exact path="/react-basics" component=&#x0007B; ReactBasics
          &#x0007D; /&gt;
        </p>
      </div>
      <p>When a route's path is matched, then a match object is produced.</p>
      <p>This match object contains the following keys:</p>
      <ul className="list-margin">
        <li>url - the current location</li>
        <li>path - the route's path</li>
        <li>isExact - boolean (true is if you used the exact prop)</li>
        <li>params - an object containing parameter key/value pairs</li>
      </ul>
      <p>
        The params are especially useful for accessing any strings in the URL,
        such as a user ID, blog post name, comment ID, or any other string you
        want to pull from the URL.
      </p>
      <p>
        For example, I've created an API endpoint that allows you to access a
        profile by a user's handle. The backend route is:
      </p>
      <p>api/profile/handle/:handle</p>
      <p>
        That :handle is going to be the user's actual handle. On the client, you
        can get access to this in the params.
      </p>
      <p>
        There is so much to cover with React, this is a good start though (in
        conjunction with my blog posts).
      </p>
      <p>
        I'll be making updates to this throughout the week. So feel free to
        visit my github and see what's new. You'll be able to clone the project
        again, or merge it depending on what your local project looks like.
      </p>
      <p>Please feel free to contact me if you like.</p>
      <p>email: davidm.dugger@gmail.com</p>
    </div>
  );
};

export default ReactBasics;
