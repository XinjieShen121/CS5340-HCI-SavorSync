# SavorSync: Interactive "Hello World" Cultural Cooking Experience

## Overview  
SavorSync is an interactive web platform designed for food lovers who want to explore world cuisines, discover cultural cooking tips, and find delicious recipes. It’s built to make cultural learning through food more accessible and engaging.  

The project started as part of an **API integration assignment**, but instead of just calling an API for a basic response, it became a fun way to learn about different food traditions, flavors, and cooking techniques from around the world.  

---

## How It Works  

SavorSync makes exploring world cuisines fun and interactive. When you land on the homepage, you’re greeted with a smooth typing animation that sets the tone for your journey. A simple click on the Cultural Cooking Tips button generates an AI-powered “Hello World” message with a cultural twist, introducing you to traditional ingredients, cooking customs, or unique flavors from around the world. The Trending Recipes section highlights popular cuisines like Asian, Italian, and Mediterranean, while the Recipe Search feature allows you to browse dishes by selecting a cuisine from the dropdown menu

The goal is to help people not just discover new dishes, but also understand the cultural significance behind them. In a world that’s becoming more connected, food is a way to bring people together. Learning about global cuisines through an interactive platform like SavorSync can help users develop a deeper appreciation for cultural diversity.

This project is also a step toward future applications in food technology, cultural education, and user experience design. Whether it’s enhancing AI-driven food recommendations, improving digital learning platforms, or expanding into personalized culinary experiences, SavorSync lays the foundation for combining technology with cultural storytelling in a meaningful way.

---

## Documentation: How This Project Was Built  

### Setting Up the API on Render  
The backend is a **Node.js + Express API** that generates cultural cooking insights using OpenAI’s GPT model. To make it accessible, the API was deployed on **Render**. Here’s what was done:  
1. Created an **Express backend** to handle API requests.  
2. Integrated **OpenAI’s GPT API** to generate cooking insights.  
3. **Enabled CORS** so the frontend could fetch data from the API.  
4. Deployed the backend on **Render** with this live endpoint: https://cs5340-hci-savorsync.onrender.com/generate

### Building the Frontend with React

The frontend was built using React + Vite for a fast and modern experience. Here’s what was implemented:
1.	A smooth welcome animation with a typing effect.
2.	A searchable dropdown for selecting different world cuisines.
3.	A button for AI-generated cooking tips.
4.	CSS styling for a clean and engaging user interface.

To ensure the AI responses were handled properly, a loading message was added before displaying results.

### Deploying on Netlify
Once the frontend and backend were working, the next step was deploying the project online.
Netlify was used to host the frontend, but initially, it failed because the frontend was inside savorsync-api/savorsync-frontend.

To fix this, the Netlify build settings were updated:
	•	Base directory: (Left empty)
	•	Build command: cd savorsync-frontend && npm install && npm run build
    •   Publish directory: savorsync-frontend/dist

After adjusting these settings, the deployment was successful, and SavorSync went live at: **https://cs5340-hci-savorsync.netlify.app/**

---

## Reflection: 
This mini coding assignment is a valuable experience in building a full-stack application, integrating APIs, and solving real-world deployment issues.

One of the biggest things I learned from this project is how APIs bring a website to life. Instead of just displaying static content, using OpenAI’s API allowed me to generate unique cuktural cooking insights on the fly, which made the experience feel more interactive. I also got hands-on experience with how the frontend and backend communicate, and I realized that even small errors in how they connect can break everything. Debugging CORS issues was a huge struggle—at first, my frontend couldn’t even talk to my own backend—but once I figured out how to configure headers and deployment settings, everything finally started working. Setting up Netlify and Render was also a learning curve since they each have their own quirks, but getting them to work together was super satisfying.

One of the most frustrating challenges was fixing CORS errors—I had no idea how much of a blocker that could be until my API just refused to connect. I had to tweak backend settings, redeploy multiple times, and test over and over before it finally worked. Another issue was handling AI responses—sometimes OpenAI would generate way too much text or include unnecessary phrases, so I had to clean up the responses to make them short and useful. I also realized that UI details matter a lot—at first, when users clicked the button, nothing happened right away, which made the app feel broken. Adding a simple “Generating…” message made a huge difference in making the experience feel smooth and professional.

If I were to take this project further, I’d love to add more cultural insights, like a short history of each dish instead of just quick cooking tips. It would also be great to let users save their favorite recipes, so they can come back to them later. Right now, most of the UI elements—like buttons and the navigation system—are just visually set up but not fully functional, except for the AI-generated cooking insights. Based on the user survey results, people wanted a more guided experience, which means the navigation page could be redesigned to help users explore not just cuisines, but also full recipe breakdowns. One of the biggest improvements would be connecting to a real recipe API, so users could get step-by-step cooking instructions rather than just general cultural insights. Right now, SavorSync is a fun way to learn about world food traditions, but with these additions, it could become an even better tool for helping people actually cook and experience global cuisine firsthand.

What started as a simple “Hello World” API integration turned into an interactive global food discovery platform. It was exciting to see how different tools—React, Express, OpenAI, and Netlify—came together to build something meaningful.

---

## Running the Project Locally
1. Clone the Repository:
• **git clone https://github.com/XinjieShen121/CS5340-HCI-SavorSync.git**
• **cd CS5340-HCI-SavorSync**

2. Start the Backend:
• **cd savorsync-api**
• **npm install**
• **node server.js**
The API will run at http://localhost:3000/generate.

3. Start the Frontend:
• **cd savorsync-frontend**
• **npm install**
• **npm run dev**
