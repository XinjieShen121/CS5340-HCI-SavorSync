import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./App.css";

function App() {
  //  Typing Effect State
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "Welcome to SavorSync! 🪐 Discover flavors from around the world.";

  // Add a loading effect
  const [loading, setLoading] = useState(false);

  //  Typing Effect Logic
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50); // Speed of typing effect
    return () => clearInterval(interval);
  }, []);

  // Ai message state
  const [message, setMessage] = useState(
    "🌍 'Hello, World!' from the Kitchens of SavorSync!"
  );
  const fetchMessage = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://cs5340-hci-savorsync.onrender.com/generate"
      );
      const data = await response.json();
      console.log("API Response:", data);

      //  Clean up unwanted AI-generated text
      const cleanedMessage = data.message
        .replace(/Certainly!.*?:/g, "") // Removes "Certainly! Here's a..."
        .replace(/```plaintext/g, "") // Removes "```plaintext"
        .replace(/---/g, "") // Removes "---"
        .trim();

      setMessage(cleanedMessage);
    } catch (error) {
      setMessage("⚠️ Error fetching data. Please try again.");
      console.error("API Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const cuisines = [
    { value: "asian", label: "🍜 Asian" },
    { value: "italian", label: "🍕 Italian" },
    { value: "mexican", label: "🌮 Mexican" },
    { value: "indian", label: "🍛 Indian" },
    { value: "french", label: "🥐 French" },
    { value: "american", label: "🍔 American" },
    { value: "mediterranean", label: "🥗 Mediterranean" },
    { value: "thai", label: "🍤 Thai" },
    { value: "japanese", label: "🍣 Japanese" },
    { value: "korean", label: "🍖 Korean" },
    { value: "chinese", label: "🥟 Chinese" },
    { value: "middleeastern", label: "🍢 Middle Eastern" },
    { value: "caribbean", label: "🥭 Caribbean" },
    { value: "african", label: "🍲 African" },
    { value: "spanish", label: "🍷 Spanish" },
  ];

  return (
    <div className="container">
      <header>
        <h1>{displayText}</h1> {/*  Typing effect  */}
        <div className="api-box">
          {/* <p id="api-response" dangerouslySetInnerHTML={{ __html: message }} /> */}
          <p id="api-response">
            {loading ? "⏳ Generating your tip..." : message}
          </p>
        </div>
        <button className="primary-btn" onClick={fetchMessage}>
          💡 Click to Get a Cultural Cooking Tip! 🍽️
        </button>
      </header>

      <section className="search-section">
        <Select
          options={cuisines}
          placeholder="🌍 Select a Cuisine"
          className="cuisine-dropdown"
        />
        <button className="search-btn">🔍 Search Recipes</button>
      </section>
      
      <section className="trending-recipes">
        <h2>🔥🔥🔥 Trending Cultural Recipes 🔥🔥🔥</h2>
        <div className="recipe-grid">
          <div className="recipe-card">🍜 Asian Heritage</div>
          <div className="recipe-card">🥙 Mediterranean Classics</div>
          <div className="recipe-card">🌮 Latin Flavors</div>
          <div className="recipe-card">🍔 American Comfort</div>
        </div>
      </section>

      
    </div>
  );
}

export default App;
