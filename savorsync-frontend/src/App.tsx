

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("Click the button to get an AI-generated message!");

//   const fetchMessage = async () => {
//     try {
//       const response = await fetch("https://cs5340-hci-savorsync.onrender.com/generate");
//       const data = await response.json();
//       console.log("API Response:", data); //  Debugging API response
//       setMessage(data.message.replace(/\n/g, "<br/>")); //  Ensures proper line breaks
//     } catch (error) {
//       setMessage("⚠️ Error fetching data. Please try again.");
//       console.error("API Fetch Error:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <header>
//         <h1>Hello, World! 🌎</h1>
//         <div id="api-response" dangerouslySetInnerHTML={{ __html: message }} /> {/*  Proper display */}
//       </header>

//       <section className="search-section">
//         <input type="text" placeholder="Search for a recipe..." />
//         <button className="search-btn">🔍 Search</button>
//       </section>

//       <section className="trending-recipes">
//         <h2>Trending Cultural Recipes</h2>
//         <div className="recipe-grid">
//           <div className="recipe-card">🍜 Asian Heritage</div>
//           <div className="recipe-card">🥙 Mediterranean Classics</div>
//           <div className="recipe-card">🌮 Latin Flavors</div>
//           <div className="recipe-card">🍔 American Comfort</div>
//         </div>
//       </section>

//       <section className="ai-message">
//         <button className="primary-btn" onClick={fetchMessage}>✨ Get AI Cooking Insights</button> {/* ✅ Clearer button */}
//       </section>

//       <footer>
//         <button className="start-btn">🍽️ Start Your Cooking Journey</button> {/*  More descriptive */}
//       </footer>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("Click the button to get an AI-generated message!");

//   const fetchMessage = async () => {
//     try {
//       const response = await fetch("https://cs5340-hci-savorsync.onrender.com/generate");
//       const data = await response.json();
//       console.log("API Response:", data); // Debugging API response
//       setMessage(data.message.replace(/\n/g, "<br/>")); // Ensures proper line breaks
//     } catch (error) {
//       setMessage("⚠️ Error fetching data. Please try again.");
//       console.error("API Fetch Error:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <header>
//         <h1>Hello, World! 🌎</h1>
//         <div id="api-response" dangerouslySetInnerHTML={{ __html: message }} /> {/* ✅ Proper display */}
//       </header>

//       <section className="search-section">
//         <input type="text" placeholder="Search for a recipe..." />
//         <button className="search-btn">🔍 Search Recipes</button> {/* ✅ Clearer label */}
//       </section>

//       <section className="trending-recipes">
//         <h2>Trending Cultural Recipes</h2>
//         <div className="recipe-grid">
//           <div className="recipe-card">🍜 Asian Heritage</div>
//           <div className="recipe-card">🥙 Mediterranean Classics</div>
//           <div className="recipe-card">🌮 Latin Flavors</div>
//           <div className="recipe-card">🍔 American Comfort</div>
//         </div>
//       </section>

//       <section className="ai-message">
//         <button className="primary-btn" onClick={fetchMessage}>🍽️ Get a Cultural Cooking Tip!</button> {/* ✅ More clear */}
//       </section>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("🌍 'Hello, World!' from the Kitchens of SavorSync!");

//   const fetchMessage = async () => {
//     try {
//       const response = await fetch("https://cs5340-hci-savorsync.onrender.com/generate");
//       const data = await response.json();
//       console.log("API Response:", data); // Debugging API response
//       setMessage(data.message.replace(/\n/g, "<br/>")); // Ensures proper line breaks
//     } catch (error) {
//       setMessage("⚠️ Error fetching data. Please try again.");
//       console.error("API Fetch Error:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <header>
//         <h1>Hello, World! 🌎</h1> {/* ✅ Keeps 'Hello World' for assignment */}
//         <div id="api-response" dangerouslySetInnerHTML={{ __html: message }} /> {/* ✅ Displays API-generated message */}
//       </header>

//       <section className="search-section">
//         <input type="text" placeholder="Search for a recipe..." />
//         <button className="search-btn">🔍 Search Recipes</button> {/* ✅ Clearer label */}
//       </section>

//       <section className="trending-recipes">
//         <h2>Trending Cultural Recipes</h2>
//         <div className="recipe-grid">
//           <div className="recipe-card">🍜 Asian Heritage</div>
//           <div className="recipe-card">🥙 Mediterranean Classics</div>
//           <div className="recipe-card">🌮 Latin Flavors</div>
//           <div className="recipe-card">🍔 American Comfort</div>
//         </div>
//       </section>

//       <section className="ai-message">
//         <button className="primary-btn" onClick={fetchMessage}>💡 Click to Get a Cultural Cooking Tip! 🍽️</button> {/* ✅ More clear */}
//       </section>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState(
//     "🌍 'Hello, World!' from the Kitchens of SavorSync!"
//   );

//   const fetchMessage = async () => {
//     try {
//       const response = await fetch(
//         "https://cs5340-hci-savorsync.onrender.com/generate"
//       );
//       const data = await response.json();
//       console.log("API Response:", data);

//       // Clean message by removing unnecessary formatting
//       const cleanedMessage = data.message
//         .replace(/```plaintext/g, "") // Removes "```plaintext"
//         .replace(/---/g, "") // Removes "---"
//         .trim();

//       setMessage(cleanedMessage);
//     } catch (error) {
//       setMessage("⚠️ Error fetching data. Please try again.");
//       console.error("API Fetch Error:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <header>
//         <h1>Hello, World! 🌎</h1>
//         <div className="api-box">
//           <p id="api-response" dangerouslySetInnerHTML={{ __html: message }} />
//         </div>
//         <button className="primary-btn" onClick={fetchMessage}>
//           💡 Click to Get a Cultural Cooking Tip! 🍽️
//         </button>
//       </header>

//       <section className="trending-recipes">
//         <h2>🔥🔥🔥 Trending Cultural Recipes 🔥🔥🔥</h2>
//         <div className="recipe-grid">
//           <div className="recipe-card">🍜 Asian Heritage</div>
//           <div className="recipe-card">🥙 Mediterranean Classics</div>
//           <div className="recipe-card">🌮 Latin Flavors</div>
//           <div className="recipe-card">🍔 American Comfort</div>
//         </div>
//       </section>

//       <section className="search-section">
//         <input type="text" placeholder="Search for a recipe..." />
//         <button className="search-btn">🔍 Search Recipes</button>
//       </section>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("🌍 'Hello, World!' from the Kitchens of SavorSync!");

  // const fetchMessage = async () => {
  //   try {
  //     const response = await fetch("https://cs5340-hci-savorsync.onrender.com/generate");
  //     const data = await response.json();
  //     console.log("API Response:", data);

  //     // Clean up formatting issues
  //     const cleanedMessage = data.message
  //       .replace(/```plaintext/g, "") // Removes "```plaintext"
  //       .replace(/---/g, "") // Removes "---"
  //       .trim();

  //     setMessage(cleanedMessage);
  //   } catch (error) {
  //     setMessage("⚠️ Error fetching data. Please try again.");
  //     console.error("API Fetch Error:", error);
  //   }
  // };
  const fetchMessage = async () => {
    try {
      const response = await fetch("https://cs5340-hci-savorsync.onrender.com/generate");
      const data = await response.json();
      console.log("API Response:", data);
  
      // ✅ Clean up unwanted AI-generated text
      const cleanedMessage = data.message
        .replace(/Certainly!.*?:/g, "") // Removes "Certainly! Here's a..."
        .replace(/```plaintext/g, "") // Removes "```plaintext"
        .replace(/---/g, "") // Removes "---"
        .trim();
  
      setMessage(cleanedMessage);
    } catch (error) {
      setMessage("⚠️ Error fetching data. Please try again.");
      console.error("API Fetch Error:", error);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Hello, World! 🌎</h1>
        <div className="api-box">
          <p id="api-response" dangerouslySetInnerHTML={{ __html: message }} />
        </div>
        <button className="primary-btn" onClick={fetchMessage}>
          💡 Click to Get a Cultural Cooking Tip! 🍽️
        </button>
      </header>

      <section className="trending-recipes">
        <h2>🔥🔥🔥 Trending Cultural Recipes 🔥🔥🔥</h2>
        <div className="recipe-grid">
          <div className="recipe-card">🍜 Asian Heritage</div>
          <div className="recipe-card">🥙 Mediterranean Classics</div>
          <div className="recipe-card">🌮 Latin Flavors</div>
          <div className="recipe-card">🍔 American Comfort</div>
        </div>
      </section>

      <section className="search-section">
        <input type="text" placeholder="Search for a recipe..." />
        <button className="search-btn">🔍 Search Recipes</button>
      </section>
    </div>
  );
}

export default App;