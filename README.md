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

The application is live at: **https://cs5340-hci-savorsync-helloworld.netlify.app/**

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
This project gave me the chance to explore how thoughtful design can turn a simple interface into something meaningful and engaging. From the start, my goal with SavorSync was to help users learn about global cuisines, not just through recipes, but through the stories and culture behind the food. Based on feedback from early survey responses, users were most interested in learning about why certain ingredients or cooking methods are used, but often felt overwhelmed when too much text was shown. That insight directly influenced the decision to focus on short, friendly AI-generated cooking tips and clean, digestible UI sections.

I also learned just how much small design choices, like animations, button placement, and visual spacing—can impact how intuitive an interface feels. Even adding a simple “Generating…” loading message helped make the interaction feel smoother and more trustworthy. Using a component-based design in React allowed me to quickly iterate and test layout changes based on those user insights.

Looking ahead, I’d love to build on this by adding real recipe content, cultural spotlight videos, and even community features where users can share their own cooking stories. Many users from the initial survey mentioned wanting a sense of connection—not just to the culture, but to other people learning and cooking along with them. I think that’s a powerful direction for SavorSync to grow.

What began as a basic “Hello World” app turned into a creative way to connect people through food and culture. And that, to me, is what good design is all about—making people feel curious, included, and inspired.

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
5. Music mode integration
6. AI Ingredient Swap functionalify integration

What started as a simple interface has evolved into a comprehensive platform for cultural culinary exploration, demonstrating how technology can enhance our understanding and appreciation of global food traditions.
