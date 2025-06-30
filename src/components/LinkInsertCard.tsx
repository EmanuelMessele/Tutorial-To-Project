import React, { useState } from "react";
import "./LinkInsertCard.css";

const LinkInsertCard = () => {
  // useState for chaning the state of our link
  const [link, setLink] = useState("");

  const handleClick = () => {
    // now we know it has access to the link
    console.log("Sending link to our backend...", link); // from here we will send it to our backend which we will then send to OpenAi API for suggestions

    // make our fetch request to backend here
    // learn more about how the front end makes that connection with the front before moving on
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  return (
    <>
      <h1>Find Your Project</h1>

      <div id="dropoff">
        <form>
          <input
            id="form"
            placeholder="Insert Link To Tutorial"
            onChange={handleInputChange}
          ></input>
        </form>
        <button onClick={handleClick}> Submit </button>
      </div>
    </>
  );
};

export default LinkInsertCard;
