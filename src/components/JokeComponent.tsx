import React, { useState, useEffect } from "react";
import "./JokeComponent.css";
import { Stack, HStack, VStack } from "rsuite";
function Joke() {
  const [jokeSetup, setJokeSetup] = useState(""); // For the setup part of the joke
  const [jokePunchline, setJokePunchline] = useState(""); // For the punchline
  const [isRevealed, setIsRevealed] = useState(false); // To toggle punchline visibility

  // Fetch joke data from API
  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJokeSetup(data.setup); // Update setup
      setJokePunchline(data.punchline); // Update punchline
      setIsRevealed(false); // Reset reveal state
    } catch (error) {
      setJokeSetup("Failed to fetch joke. Please try again later.");
      setJokePunchline("");
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke(); // Fetch a joke on component load
  }, []);

  return (
    <div id="joke-root-div">
      <p className="joke-text">{jokeSetup}</p>
      {
        isRevealed === true ? (
          <p className="joke-punchline">{jokePunchline}</p>
        ) : (
          <p className="joke-punchline" onClick={() => setIsRevealed(true)}></p>
        ) // Used as a placeholder for when answer is not revealed
      }
      <button onClick={fetchJoke} className="joke-buttons">
        Get a New Joke
      </button>
      <button
        onClick={() => setIsRevealed(true)} // Reveal punchline
        className="joke-buttons"
      >
        Reveal Punchline
      </button>
    </div>
  );
}

export default Joke;
