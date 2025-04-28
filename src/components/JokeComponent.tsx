import React, { useState, useEffect } from "react";
import "./JokeComponent.css";

function Joke() {
  const [joke, setJoke] = useState("Loading...");

  // 定义一个函数来获取笑话
  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      ); // 示例 API
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`); // 更新笑话内容
    } catch (error) {
      setJoke("Failed to fetch joke. Please try again later.");
      console.error("Error fetching joke:", error);
    }
  };

  // 使用 useEffect 在组件加载时调用 API
  useEffect(() => {
    fetchJoke();
  }, []); // 仅在组件首次加载时调用

  return (
    <div>
      <p className="joke-text">{joke}</p>
      <button onClick={fetchJoke} className="refresh-button">
        Get Another Joke
      </button>
    </div>
  );
}

export default Joke;
