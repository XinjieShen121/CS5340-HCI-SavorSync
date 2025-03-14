# SavorSync: Interactive "Hello World" Cultural Cooking Experience

## Overview  
SavorSync is an interactive web platform designed for food lovers who want to explore world cuisines, discover cultural cooking tips, and find delicious recipes. It’s built to make cultural learning through food more accessible and engaging.  

The project started as part of an **API integration assignment**, but instead of just calling an API for a basic response, it became a fun way to learn about different food traditions, flavors, and cooking techniques from around the world.  

---

## How It Works  

SavorSync provides an **interactive cooking experience** with these features: 
- **Animated Welcome Experience** – The homepage greets users with a typing effect to make it feel more dynamic.   
- **Cultural Cooking Tips** – Click a button to receive a unique AI-generated “Hello World” welcome message with a cultural twist. These insights introduce world cuisines, traditional ingredients, or cooking customs, making food exploration more interactive and engaging.  
- **Trending Recipes** – Discover popular cuisines like Asian, Italian, Mediterranean, and more.  
- **Recipe Search** – Pick a cuisine from a dropdown and get recipes for that food style.  

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
This project was a valuable experience in building a full-stack application, integrating APIs, and solving real-world deployment issues.

Key Takeaways:
	•	APIs add dynamic content – OpenAI’s API made it possible to generate unique cooking insights.
	•	Frontend and backend communication is crucial – Debugging CORS errors was one of the biggest challenges.
	•	Deployment requires proper setup – Netlify and Render each had specific settings that needed to be configured correctly.

Biggest Challenges:
	•	Fixing CORS errors – Without CORS, the frontend couldn’t fetch data from the backend.
	•	Handling AI responses – The AI sometimes returned long messages, which needed formatting.
	•	Ensuring a smooth UI – Small details like adding a loading message made a big difference in usability.

Future Improvements:
	•	More cultural insights – AI could generate deeper stories behind each cuisine.
	•	Saving favorite recipes – Users could bookmark meals they like.
	•	Integrating a real-world recipe API – This would allow users to access detailed cooking instructions.

What started as a simple “Hello World” API integration turned into an interactive global food discovery platform. It was exciting to see how different tools—React, Express, OpenAI, and Netlify—came together to build something meaningful.

---

## Running the Project Locally
1. Clone the Repository:
**git clone https://github.com/XinjieShen121/CS5340-HCI-SavorSync.git**
**cd CS5340-HCI-SavorSync**

2. Start the Backend:
**cd savorsync-api**
**npm install**
**node server.js**
The API will run at http://localhost:3000/generate.

3. Start the Frontend:
**cd savorsync-frontend**
**npm install**
**npm run dev**
