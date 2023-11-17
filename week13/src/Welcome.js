import React from "react";
import Nav from "./Nav";

let date = new Date()

let singleUser = {
    name: 'John',
    time: date.toDateString(),
  }

export default class Welcome extends React.Component {
    render() {
      return (
<div className="App">

<section className="welcomeSection"> 
<h1>Welcome {singleUser.name}</h1>
<p>Todays date is: {date.toDateString()}</p>
</section>

</div>
      
      );
    }
  }
