/**
 * Step 1: Create a new file in our src folder called Nav.js
 * Step 2: Create the base format for a class-based component.
 *         Inside of the return(), return: <nav>Nav</nav>
 * Step 3: In your App.js, import your <Nav> component inside of the div in return()
 *         You should now see the text 'Nav' on your app.
 *         Don't forget to 'npm start' in the console if you aren't on a live server yet.
 * Step 4: In your Nav.js file, add an <ul>, and 3 <li> inside your <nav> element.
 *         The text inside the 3 <li> should be: Home, Portfolio, and Contact
 * Step 5: Style your Nav component using the app.css file.
 *         Give your <nav> element: 100vw
 *                                  (100 view width makes the width the size of their screen)
 *         Give your <ul> element: display: flex, flex-direction: row, justify-content: right
 *         The rest is up to you! Consider pseudo:selectors, such as hover/active/touch
 *
 *         Alternatively, refer to Week 9 and use bootstrap instead.
 *         Remember when we give elements classes in React, we use className=""
 **/

import React from "react";

export default class Nav extends React.Component {
    render() {
      return (
      <nav>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
      
      );
    }
  }