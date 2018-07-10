import React from "react";
import "./ReduxBasics.css";

const ReduxBasics = () => {
  return (
    <div className="redux-basics scale-up">
      <h1 className="text-center">Redux Basics</h1>
      <p>
        Redux is a lightweight tool to manage your app's data and user
        interactions. Collectively, the data and user interactions of your app
        are called state.
      </p>
      <p>
        Stated differently, state is just the current condition of your app.
        Just like the current condition of your kitchen may be clean, dirty,
        filled with people, timers going off, or it could be empty, it's similar
        with your app's state.
      </p>
      <p>
        State is only the current condition of your app, and that state can
        change based a wide array for user interactions, or automatic AJAX
        requests.
      </p>
      <p>
        The entire purpose of Redux is to hold all of the state in a single
        object so every other component can have access to the data if needed.
      </p>
      <p>
        Redux is completely independent of React. Let me repeat that. Redux and
        React have absolutely nothing to do with each other; React doesn't need
        Redux, and Redux doesn't need React. React and Redux just so happen to
        be a perfect match for each other because, among other reasons, they
        both use unidirectional data flow (one-way data binding) by design.
      </p>
      <p>
        However, you may not need Redux. Redux is only necessary when apps get
        large and scaling becomes a problem.
      </p>
      <h4 className="heading">What is Redux</h4>
      <p>
        Simply put, Redux is a package you can install from your favorite
        dependency manager (Yarn and NPM are the top two).
      </p>
      <p>
        Redux is extremely useful as app's scale because you can store your
        entire state inside a Redux store, and then create an action to receive
        updated data in a payload, and just write a single function (called a
        reducer) to update the state.
      </p>
      <p>
        That's a mouthful; dont' worry if it's confusing. I will walk you
        through this below.
      </p>
      <p>
        There are intances where we will want to utilize React's built-in state
        management even though we are also using Redux; this is especially true
        with forms. But, let's not get ahead of ourselves here. In general, if
        you use Redux for everything, you'd be fine. However, you sacrifice
        performance by doing that.
      </p>
      <p>
        It is important to restate something at this time, React and Redux work
        well together, but there are times it makes sense to simply use React's
        built-in state managment only, or use Redux only, or use both in the
        same component.
      </p>
      <p>You'll see why shortly.</p>
      <p>
        There are a small number of things you need to know about Redux, but
        they can be a bit complicated.
      </p>
      <h4 className="heading">The Three Tenants of Redux </h4>
      <p>Redux consists of three primary items</p>
      <ol className="list-margin">
        <li>store</li>
        <li>actions</li>
        <li>reducers</li>
      </ol>
      <p>
        Notice that store is singular while actions and reducers are plural.
        That's because there is one, and only ever one store.
      </p>

      <p>The store is read only; you never alter it directly.</p>
      <p>
        The <strong>store</strong> is short for data storage. Most of your data
        will exist inside of your Redux store; and your store should not be
        updated directly.
      </p>
      <p>
        Updates to the state are the responsibility of actions and reducers.
      </p>
      <h5 className="heading">Actions</h5>
      <p>
        <strong>Actions</strong> are nothing more than JavaScript objects.
        Actions absolutely, no question, 100% of the time, contain a type.
      </p>
      <p>
        A <strong>type</strong> is a string that describes what action
        (behavior) is going to occur.
      </p>
      <p className="heading">Examples of some types:</p>
      <ul className="list-margin">
        <li>"SET_CURRENT_USER"</li>
        <li>"GET_POST"</li>
        <li>"ADD_POST"</li>
        <li>"GET_ERRORS"</li>
        <li>"POST_LOADING"</li>
      </ul>
      <p>
        To be clear, you can call your actions whatever you want. Those are my
        own naming conventions; in my opinion they clearly indicate what is
        going to happen. For example, "GET_ERRORS" is going to get errors if
        something went wrong; "ADD_POST" is going to get data from a form and
        add that post to the database.
      </p>
      <p>Along with the type, actions typically have a payload.</p>

      <h5 className="heading">Payload</h5>
      <p>
        The payload is just the data that you are going to pass to the reducer
        (reducers are addressed below).
      </p>
      <p>
        Actions don't always need a payload. For example, if one of your actions
        is to show a loading gif, then there isn't any data to take up to the
        state. Instead, you are going to handle this loading gif with some sort
        of conditional statement in the component.
      </p>
      <h5 className="heading">Reducers</h5>
      <p>
        <strong>Reducers</strong> are normal JavaScript functions.{" "}
        <strong>
          Reducers listen to every single action that takes place in your app
        </strong>. They listen to every action because they are prepared to
        receive a payload from their respective action; reducers have no idea
        what is happening on the view, they only know that there are going to be
        some actions sent to them, and the reducers will need to respond to a
        specific action. Every single reducer is a function that does one thing
        and one thing only. Think of a person at a conveyor belt, like a package
        separator at UPS or FedEx that separates mail by zip code, reducers
        stand in an assembly line looking for actions that have their specific
        type defined. When the reducer matches with an action type that is sent,
        the reducer is invoked and it takes that action's payload to the state
        to be updated.
      </p>
      <p>
        Remember earlier when I said you don't want to use Redux for everything?
        The above paragraph is why.{" "}
        <strong>Reducers listen to every single action</strong>. Thus, as your
        app scales, you're going to have a lot of reducers that will be
        listening to every action. Most of the time, the reducer doesn't need to
        listen to the action sent. Thus, this is where the perfomance hit
        occurs.
      </p>
      <p>
        It would be like you sitting in a room of 100 people and you need to
        immediately respond to any person that blurts out a code word (action
        type) to fetch a water pitcher for them (the water pitcher would be the
        payload). You don't have any idea who is going to yell out your code
        word, thus you need to be listening to every person in the room that
        blurts out a command just in case one of them somewhere just happens to
        use your code word just so you can fetch that pitcher of water.
      </p>
      <p>
        Worse yet, there is only one person in the room that is ever going to
        say your code word (action type), This begs the question, why listen to
        all of the people in the room if you are only responsible for one
        person?
      </p>
      <p>
        In this example, the people in the room are the components in your app,
        and you are the reducer listening to every action.
      </p>
      <p>
        You'd be better off just placing a pitcher of water on the table for
        that person. You need to separate your concerns in your app. There is no
        point in creating a reducer that, by convention, listens to every action
        if that action is entirely localized to a single component, or a small
        component tree.
      </p>
      <p>
        That's what built-in state is for. Just use built in state for those
        instances.
      </p>
      <p>
        To be completely honest, React launching their Context API has really
        improved the built-in state management to the point that Redux is not
        needed in a lot of cases.
      </p>
      <p>
        As a specific example in an app. Let's say you have a set of optional
        inputs for a user to enter social media links. The backend schema
        doesn't require these social media links (hence, they are optional), and
        this is the only place on the entire site that a user can add their
        social media links.
      </p>
      <p>Do not use Redux to manage this. There is no point.</p>
      <p>
        The entire purpose of Redux is to share data with all other components.
        If all you are doing is adding some data to the database in a form, then
        just do that in the local component.
      </p>
      <p>
        That will do it for now. I'll cover actual code samples when I have time
        this week. So, you can look forward to actual code to create a Redux
        store, write some actions with some types, send those actions to
        reducers, then update the store.
      </p>
    </div>
  );
};

export default ReduxBasics;
