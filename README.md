# SavorSync: Interactive Cultural Cooking Experience

## Overview  
SavorSync is an interactive web platform designed for food lovers who want to explore world cuisines, discover cultural cooking tips, and find delicious recipes. It's built to make cultural learning through food more accessible and engaging.  

The project features a modern, responsive interface with smooth animations and interactive elements that guide users through different culinary experiences. From the initial "Hello World" welcome animation to the comprehensive recipe browsing system, SavorSync offers a complete cooking journey.

---

## How It Works  

SavorSync provides a rich, interactive experience for exploring world cuisines:

1. **Welcome Experience**
   - Animated "Hello World" welcome message
   - Smooth typing effect for the main heading
   - Quick start modal for personalized recipe suggestions

2. **Navigation System**
   - Clean navigation bar with logo and menu items
   - Quick access to Trending Recipes, Cultural Spotlight, and Community sections
   - Icon-based navigation for Favorites, Search, and User Profile

3. **Recipe Discovery**
   - Browse recipes by cuisine categories (Asian, Mediterranean, Latin, American)
   - Detailed recipe views with multiple display modes:
     - Minimalist view for quick reference
     - Cultural Story mode for historical context
     - Health-Conscious mode for dietary alternatives
     - Authentic mode for traditional methods
     - Accessible mode for easy substitutes

4. **Cultural Learning**
   - Cultural Spotlight section with video content
   - AI-powered cultural insights for recipes
   - Historical context and traditional methods

5. **Community Features**
   - User profiles with activity tracking
   - Recipe favorites and saved items
   - Social sharing and interaction

---

## Documentation: How This Project Was Built  

### Frontend Architecture
The application is built using:
- React + TypeScript for robust type safety
- CSS modules for styling
- Bootstrap Icons for consistent iconography
- Google Fonts for typography
- Responsive design principles

### Key Components
1. **Main App Component**
   - Manages global state and navigation
   - Handles animations and transitions
   - Controls modal displays and section switching

2. **Recipe Components**
   - CuisineOverview for browsing recipes
   - RecipeView for detailed instructions
   - QuickStart for personalized suggestions

3. **Feature Components**
   - CulturalSpotlight for cultural content
   - Community for social features
   - SearchPage for recipe discovery
   - UserProfile for personal management

### State Management
- Uses React's useState and useEffect hooks
- Manages multiple view states and user interactions
- Handles animations and transitions smoothly

### Deploying on Netlify
The frontend is deployed on Netlify with the following configuration:
- Base directory: (Left empty)
- Build command: cd savorsync-frontend && npm install && npm run build
- Publish directory: savorsync-frontend/dist

The application is live at: **https://cs5340-hci-savorsync.netlify.app/**

---

## Running the Project Locally

1. Clone the Repository:
```bash
git clone https://github.com/XinjieShen121/CS5340-HCI-SavorSync.git
cd CS5340-HCI-SavorSync
```

2. Start the Frontend:
```bash
cd savorsync-frontend
npm install
npm run dev
```

The application will be available at http://localhost:5173

---

## Reflection
This project demonstrates the power of combining modern web technologies to create an engaging user experience. The focus on cultural education through food creates a unique value proposition, while the clean, intuitive interface makes learning about different cuisines accessible and enjoyable.

Key learnings include:
1. The importance of smooth animations and transitions in user experience
2. The value of responsive design in modern web applications
3. The effectiveness of component-based architecture in React
4. The impact of thoughtful UI/UX design on user engagement

Future improvements could include:
1. Backend integration for recipe data management
2. User authentication and profile management
3. Social features and community interactions
4. Additional cultural content and video resources
5. Mobile app version for on-the-go access

What started as a simple interface has evolved into a comprehensive platform for cultural culinary exploration, demonstrating how technology can enhance our understanding and appreciation of global food traditions.
