# SavorSync: Interactive Cultural Cooking Experience

## Overview  
SavorSync is an interactive web platform designed for food lovers who want to explore world cuisines, discover cultural cooking tips, and find delicious recipes. It's built to make cultural learning through food more accessible and engaging.  

The project features a modern, responsive interface with smooth animations and interactive elements that guide users through different culinary experiences. SavorSync offers a complete cultural cooking journey.

---

## Interface Demo & HCI Principles

### Key Features Demonstration

1. **Cultural Story Mode**
   - Authentic cultural videos for each recipe
   - Historical context and significance
   - Traditional cooking methods explained

2. **Authentic Recipe Navigation**
   - Step-by-step cooking instructions
   - Visual guides and tips
   - Multiple view modes for different needs

3. **Cultural Music Integration**
   - Region-specific traditional music
   - Curated playlists for each cuisine
   - Cultural context for music selections

4. **Dynamic Search & Filtering**
   - Real-time search functionality
   - Multi-criteria filtering
   - Personalized recommendations

5. **Community Engagement**
   - Recipe sharing and comments
   - Cultural discussion forum
   - User interaction features

### HCI Principles Implementation

1. **Mental Models & Visual Hierarchy**
   - Recipe layout follows familiar cookbook structure
   - Intuitive icons (♪ for music, ▶ for videos)
   - Consistent navigation patterns
   - Clear headings and logical content grouping

2. **User Feedback & Accessibility**
   - Interactive loading states
   - Success/error messages
   - High contrast text and accessible font
   - Alt-text for images
   - Multilingual-ready layout

3. **Cultural Sensitivity**
   - Authentic content representation
   - Respectful cultural descriptions
   - Diverse cuisine coverage

### 8 Golden Rules of Interface Design

1. **Strive for Consistency**
   - Standard navigation pattern at the top  
   - Matching button styles across all pages  
   - Similar card layouts for all recipes  
   - Same warm color scheme throughout (orange and brown tones)

2. **Enable Frequent Users to Use Shortcuts**
   - Quick Start button for instant recipe suggestions  
   - One-click cuisine category selection  
   - Quick filters for cooking time and difficulty  
   - Direct search function in the header  

3. **Offer Informative Feedback**
   - Loading spinner while fetching recipes  
   - "Swapped" indicator when ingredients are substituted  
   - Step completion messages in recipes  
   - Cultural tip loading states  
   - Hover effects on all clickable elements  

4. **Design Dialogs to Yield Closure**
   - "Congratulations" message after completing a recipe  
   - Clear indication for ingredient swaps  
   - "Recipe Saved" confirmation  
   - Step completion indicators  
   - “No matches found” fallback in search  

5. **Error Prevention**
   - Disabled "Next" button on last recipe step  
   - Disabled "Previous" button on first step  
   - Clear ingredient substitution options  
   - Search input validation 

6. **Easy Action Reversal**
   - “Back” button on all pages  
   - “Reset to original” option for swapped ingredients  
   - Cancel option in Quick Start quiz  
   - Easy navigation between recipe steps 

7. **Support Internal Locus of Control**
   - Choice between 4 viewing modes:
      - Cultural Story Mode  
      - Authentic Recipe Mode  
      - Health-Conscious Mode  
      - Cultural Music Mode  
   - Optional cultural context per recipe  
   - Flexible step navigation  
   - Customizable ingredient swaps 

8. **Reduced Short-Term Memory Load**
   - Visual step counter in recipes  
   - Visual markers for modified ingredients  
   - Ingredient checklist  
   - Clear recipe progress indicators  
   - Cultural tips displayed alongside steps  
   - Clear category icons and labels  

---

## How It Works  

SavorSync provides a rich, interactive experience for exploring world cuisines:

1. **Landing Page & Navigation**
  	-	Welcoming visual layout with cuisine images and bold headlines
	-	Prominent “Start Cooking” button as the main call-to-action
	-	Navigation bar includes links to Trending Recipes, Cultural Spotlight, Community, and Sign In/Profile
	-	Top-right icons for Favorites, Search, and User Profile


2. **Quick Start Cooking Flow**
   - Click Start Cooking to launch a guided quiz
	- Choose cooking mood (e.g., Comfort, Healthy, Quick)
	- Select region (e.g., Asian, Mediterranean, Latin, American)
	- Get personalized recipe recommendations with visual cards

3. **Recipe Discovery & Viewing Modes**
   - Browse recipes by cuisine categories (Asian, Mediterranean, Latin, American)
   - Detailed recipe views with multiple display modes:
     - Minimalist view for quick reference
     - Cultural Story mode for historical context
     - Health-Conscious mode for dietary alternatives
     - Authentic mode for traditional methods
     - Accessible mode for easy substitutes

4. **Community Engagement**
  	-	Visit the Community section to read and post threads
	-	Like, comment, and interact with other users’ cooking experiences
	-	Engage in cultural exchange and recipe discussion

5. **Search & Filtering**
   - Use the search bar to find specific recipes
	- Apply filters based on region, diet, or time
	- View real-time results and helpful cultural tags

---

## Documentation: How This Project Was Built  

###Frontend Architecture
- React + TypeScript for type safety  
- CSS Modules for modular styling  
- Bootstrap Icons & Google Fonts  
- Fully responsive layout  

### Key Components
- `MainApp`: manages nav, modals, and transitions  
- `RecipeView`, `CuisineOverview`, `QuickStart`, etc.  
- `CulturalSpotlight`, `SearchPage`, `UserProfile`, `Community`  

### State Management
- React hooks (`useState`, `useEffect`)  
- Multiple view states  
- Handles transitions and user interactions  

### Deployment (Netlify)
- Build Command: `cd savorsync-frontend && npm install && npm run build`  
- Publish directory: `savorsync-frontend/dist`  

---

The application is live at: **https://hci-savorsync.netlify.app/**

---

## Running the Project Locally

1. Clone the Repository:
```bash
git clone https://github.com/XinjieShen121/CS5340-HCI-SavorSync.git
cd CS5340-HCI-SavorSync
git checkout finalproject
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
This project gave me the opportunity to explore how thoughtful design choices can transform a basic interface into an engaging cultural experience. From the beginning, my goal with SavorSync was to help people connect with world cuisines—not just by learning recipes, but by understanding the stories, traditions, and emotions behind them.

Based on early user surveys, I discovered that users were eager to learn cultural background—but found long blocks of text overwhelming. That insight led me to prioritize short, friendly tips, interactive videos, and digestible content layouts.

I also saw how much impact small UX details could have—like button placement, loading indicators, and animations. Even a simple “Generating…” message helped make interactions feel smoother and more reliable.


## Next Steps
-	Connect to a backend for persistent data storage (recipes, users)
-	Implement user authentication and personalized profiles
-	Expand cultural video and music content
-	Introduce real-time community engagement features


What started as a simple interface has evolved into a comprehensive platform for cultural culinary exploration, demonstrating how technology can enhance our understanding and appreciation of global food traditions.
