import { useState, useEffect } from "react";
import "./App.css";

// Import images
import asianFood from "./assets/asian-food.jpeg";
import mediterraneanFood from "./assets/mediterranean-food.jpeg";
import latinFood from "./assets/latin-food.jpg";
import americanFood from "./assets/american-food.jpeg";

// Temporary placeholder images for specific dishes
const ramenImage = "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=60";
const bibimbapImage = "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=60";
const greekSaladImage = "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop&q=60";
const tacosImage = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60";
const cevicheImage = "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&auto=format&fit=crop&q=60";
const applePieImage = "https://images.unsplash.com/photo-1621743478914-4b796d8e0f94?w=800&auto=format&fit=crop&q=60";
const bbqPorkImage = "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60";

// Update OpenAI API configuration
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Recipe view modes type
type ViewMode = 'minimalist' | 'story' | 'health' | 'authentic' | 'accessible';

// Recipe interface
interface Recipe {
  id: number;
  name: string;
  description: string;
  culturalContext: string;
  ingredients: string[];
  instructions: string[];
  culturalStories: {
    step: number;
    story: string;
  }[];
  substitutions: {
    ingredient: string;
    healthyOption?: string;
    accessibleOption?: string;
  }[];
  videoUrl?: string;
}

// Sample dishes data
const cuisineDishes = {
  asian: [
    {
      id: 1,
      name: "Ramen Noodle Soup",
      description: "Traditional Japanese noodle soup with rich broth and tender chashu pork",
      image: ramenImage,
      tags: ["Japanese", "Soup", "Noodles"],
      videoUrl: "https://www.youtube.com/embed/watch?v=JyZjoJcvHvE",
      recipe: {
        id: 1,
        name: "Ramen Noodle Soup",
        description: "A soul-warming Japanese noodle soup",
        culturalContext: "Ramen originated from Chinese noodles but has become a Japanese cultural icon. Each region in Japan has its own unique ramen style.",
        ingredients: [
          "Fresh ramen noodles",
          "Pork belly (chashu)",
          "Soy sauce",
          "Mirin",
          "Green onions",
          "Soft-boiled eggs",
          "Nori seaweed"
        ],
        instructions: [
          "Prepare the chashu pork by marinating and braising",
          "Make the ramen broth with pork bones and kombu",
          "Cook noodles according to package instructions",
          "Assemble the bowl with broth, noodles, and toppings"
        ],
        culturalStories: [
          { step: 1, story: "Chashu is adapted from Chinese char siu but prepared differently in Japanese cuisine" },
          { step: 2, story: "The art of ramen broth-making is passed down through generations in Japan" },
          { step: 3, story: "The perfect noodle texture, known as 'al dente' in Italian cuisine, is called 'koshi' in Japanese" }
        ],
        substitutions: [
          { ingredient: "Fresh ramen noodles", healthyOption: "Whole wheat noodles", accessibleOption: "Instant ramen noodles" },
          { ingredient: "Pork belly", healthyOption: "Chicken breast", accessibleOption: "Tofu" }
        ]
      }
    },
    {
      id: 2,
      name: "Korean Bibimbap",
      description: "Colorful rice bowl with vegetables, meat, and gochujang sauce",
      image: bibimbapImage,
      tags: ["Korean", "Rice", "Healthy"],
      videoUrl: "https://www.youtube.com/embed/watch?v=6QQ67F8y2b8",
      recipe: {
        id: 2,
        name: "Bibimbap",
        description: "A nutritious Korean rice bowl",
        culturalContext: "Bibimbap represents the Korean philosophy of balanced eating with its colorful vegetables representing different elements.",
        ingredients: [
          "Steamed rice",
          "Spinach",
          "Carrots",
          "Bean sprouts",
          "Ground beef",
          "Gochujang sauce",
          "Egg"
        ],
        instructions: [
          "Cook rice and prepare vegetables separately",
          "Season and cook ground beef",
          "Arrange ingredients in a bowl",
          "Top with fried egg and gochujang sauce"
        ],
        culturalStories: [
          { step: 1, story: "In Korean culture, each color represents different health benefits" },
          { step: 2, story: "Bibimbap was traditionally served to royalty in the Joseon Dynasty" }
        ],
        substitutions: [
          { ingredient: "Ground beef", healthyOption: "Tofu crumbles", accessibleOption: "Ground turkey" },
          { ingredient: "Gochujang sauce", healthyOption: "Low-sodium gochujang", accessibleOption: "Sriracha" }
        ]
      }
    }
  ],
  mediterranean: [
    {
      id: 1,
      name: "Greek Salad",
      description: "Fresh and healthy Mediterranean salad with feta cheese",
      image: greekSaladImage,
      tags: ["Greek", "Salad", "Healthy"],
      videoUrl: "https://www.youtube.com/embed/watch?v=k4IqTp_nV8Y",
      recipe: {
        id: 1,
        name: "Greek Salad",
        description: "Traditional Greek salad with fresh vegetables",
        culturalContext: "Greek salad, known as 'Horiatiki', represents the Mediterranean diet's emphasis on fresh, simple ingredients.",
        ingredients: [
          "Cucumber",
          "Tomatoes",
          "Red onion",
          "Kalamata olives",
          "Feta cheese",
          "Extra virgin olive oil",
          "Oregano"
        ],
        instructions: [
          "Chop vegetables into large chunks",
          "Add olives and feta cheese",
          "Drizzle with olive oil and oregano",
          "Serve immediately"
        ],
        culturalStories: [
          { step: 1, story: "Greeks traditionally cut vegetables in large chunks to showcase their freshness" },
          { step: 2, story: "Feta cheese has been protected by EU law to ensure only Greek feta can be called 'feta'" }
        ],
        substitutions: [
          { ingredient: "Feta cheese", healthyOption: "Low-fat feta", accessibleOption: "Cottage cheese" },
          { ingredient: "Kalamata olives", healthyOption: "Fresh cucumber", accessibleOption: "Black olives" }
        ]
      }
    }
  ],
  latin: [
    {
      id: 1,
      name: "Tacos al Pastor",
      description: "Mexican street tacos with marinated pork and pineapple",
      image: tacosImage,
      tags: ["Mexican", "Street Food", "Pork"],
      videoUrl: "https://www.youtube.com/embed/watch?v=6QQ67F8y2b8",
      recipe: {
        id: 1,
        name: "Tacos al Pastor",
        description: "Traditional Mexican street tacos with a unique blend of flavors",
        culturalContext: "Tacos al Pastor originated from Lebanese immigrants in Mexico, who adapted their shawarma to local ingredients. The dish represents the beautiful fusion of Middle Eastern and Mexican cuisines.",
        ingredients: [
          "Pork shoulder",
          "Pineapple",
          "Achiote paste",
          "Guajillo chiles",
          "Corn tortillas",
          "Onion",
          "Cilantro",
          "Lime"
        ],
        instructions: [
          "Marinate pork with achiote and chile mixture",
          "Layer pork and pineapple on vertical spit",
          "Cook until tender and crispy",
          "Serve with warm tortillas and toppings"
        ],
        culturalStories: [
          { step: 1, story: "The marinade recipe was adapted from Lebanese shawarma spices" },
          { step: 2, story: "The vertical spit cooking method was introduced by Lebanese immigrants" },
          { step: 3, story: "Pineapple was added to tenderize the meat and add sweetness" }
        ],
        substitutions: [
          { ingredient: "Pork shoulder", healthyOption: "Chicken breast", accessibleOption: "Ground turkey" },
          { ingredient: "Achiote paste", healthyOption: "Paprika", accessibleOption: "Chipotle powder" }
        ]
      }
    },
    {
      id: 2,
      name: "Ceviche",
      description: "Fresh Peruvian fish ceviche with citrus marinade",
      image: cevicheImage,
      tags: ["Peruvian", "Seafood", "Healthy"],
      videoUrl: "https://www.youtube.com/embed/watch?v=6QQ67F8y2b8",
      recipe: {
        id: 2,
        name: "Ceviche",
        description: "Fresh and zesty Peruvian ceviche",
        culturalContext: "Ceviche is considered Peru's national dish and has been prepared for thousands of years. The dish showcases the country's abundant seafood and citrus fruits.",
        ingredients: [
          "Fresh white fish",
          "Lime juice",
          "Red onion",
          "Aji peppers",
          "Cilantro",
          "Sweet potato",
          "Corn"
        ],
        instructions: [
          "Cut fish into cubes",
          "Marinate in lime juice",
          "Add vegetables and seasonings",
          "Serve with sweet potato and corn"
        ],
        culturalStories: [
          { step: 1, story: "The Incas used fermented chicha to marinate fish before citrus was introduced" },
          { step: 2, story: "The word 'ceviche' comes from the Quechua word 'siwichi'" }
        ],
        substitutions: [
          { ingredient: "Fresh white fish", healthyOption: "Shrimp", accessibleOption: "Tofu" },
          { ingredient: "Aji peppers", healthyOption: "Bell peppers", accessibleOption: "Jalapeños" }
        ]
      }
    }
  ],
  american: [
    {
      id: 1,
      name: "Classic Apple Pie",
      description: "Traditional American apple pie with cinnamon and nutmeg",
      image: applePieImage,
      tags: ["Dessert", "Baking", "Classic"],
      videoUrl: "https://www.youtube.com/embed/watch?v=6QQ67F8y2b8",
      recipe: {
        id: 1,
        name: "Classic Apple Pie",
        description: "A symbol of American comfort food",
        culturalContext: "Apple pie became a symbol of American prosperity and home cooking during the colonial period. The phrase 'as American as apple pie' reflects its cultural significance.",
        ingredients: [
          "Apples",
          "Cinnamon",
          "Nutmeg",
          "Sugar",
          "Butter",
          "Flour",
          "Pie crust"
        ],
        instructions: [
          "Prepare pie crust",
          "Slice and season apples",
          "Layer apples in crust",
          "Bake until golden brown"
        ],
        culturalStories: [
          { step: 1, story: "Early American settlers brought apple seeds from Europe" },
          { step: 2, story: "Johnny Appleseed helped spread apple cultivation across America" }
        ],
        substitutions: [
          { ingredient: "Butter", healthyOption: "Margarine", accessibleOption: "Vegetable oil" },
          { ingredient: "Sugar", healthyOption: "Honey", accessibleOption: "Brown sugar" }
        ]
      }
    },
    {
      id: 2,
      name: "BBQ Pulled Pork",
      description: "Slow-cooked pork with smoky BBQ sauce",
      image: bbqPorkImage,
      tags: ["BBQ", "Southern", "Slow Cook"],
      videoUrl: "https://www.youtube.com/embed/watch?v=6QQ67F8y2b8",
      recipe: {
        id: 2,
        name: "BBQ Pulled Pork",
        description: "Southern-style BBQ pulled pork",
        culturalContext: "BBQ is deeply rooted in Southern American culture, with each region having its own unique style. Pulled pork is particularly associated with Carolina BBQ traditions.",
        ingredients: [
          "Pork shoulder",
          "BBQ rub",
          "Apple cider vinegar",
          "Brown sugar",
          "Mustard",
          "Buns",
          "Coleslaw"
        ],
        instructions: [
          "Season pork with rub",
          "Slow cook until tender",
          "Shred the meat",
          "Mix with BBQ sauce"
        ],
        culturalStories: [
          { step: 1, story: "BBQ rubs were developed to preserve meat before refrigeration" },
          { step: 2, story: "Carolina BBQ sauce is vinegar-based, unlike other regions" }
        ],
        substitutions: [
          { ingredient: "Pork shoulder", healthyOption: "Turkey breast", accessibleOption: "Chicken thighs" },
          { ingredient: "Brown sugar", healthyOption: "Maple syrup", accessibleOption: "Honey" }
        ]
      }
    }
  ]
};

// Add new QuickStart component
const QuickStart = ({ 
  onClose, 
  handleCuisineClick 
}: { 
  onClose: () => void;
  handleCuisineClick: (cuisine: string) => void;
}) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const moods = [
    { id: 'comfort', name: 'Comfort Food', icon: 'bi-heart' },
    { id: 'healthy', name: 'Healthy & Fresh', icon: 'bi-shop-window' },
    { id: 'quick', name: 'Quick & Easy', icon: 'bi-lightning' },
    { id: 'adventure', name: 'Culinary Adventure', icon: 'bi-compass' }
  ];

  const timeOptions = [
    { id: '15', name: '15 mins' },
    { id: '30', name: '30 mins' },
    { id: '45', name: '45 mins' },
    { id: '60', name: '1 hour' }
  ];

  return (
    <div className="quick-start-modal">
      <div className="quick-start-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Let's Start Cooking!</h2>
        <p>What's your cooking mood today?</p>
        
        <div className="mood-selector">
          {moods.map(mood => (
            <button
              key={mood.id}
              className={`mood-button ${selectedMood === mood.id ? 'active' : ''}`}
              onClick={() => setSelectedMood(mood.id)}
            >
              <i className={`bi ${mood.icon}`}></i>
              <span>{mood.name}</span>
            </button>
          ))}
        </div>

        <p>How much time do you have?</p>
        <div className="time-selector">
          {timeOptions.map(time => (
            <button
              key={time.id}
              className={`time-button ${selectedTime === time.id ? 'active' : ''}`}
              onClick={() => setSelectedTime(time.id)}
            >
              {time.name}
            </button>
          ))}
        </div>

        <button 
          className="find-recipes-button"
          onClick={() => {
            // Navigate to filtered recipes based on mood and time
            const cuisine = selectedMood === 'adventure' ? 'Random' : 
                          selectedMood === 'healthy' ? 'Mediterranean' :
                          selectedMood === 'quick' ? 'Asian' : 'American';
            handleCuisineClick(cuisine);
            onClose();
          }}
        >
          Find Recipes
        </button>
      </div>
    </div>
  );
};

// Add new components before the App function
const TrendingRecipes = () => {
  const trendingDishes = [
    {
      id: 1,
      name: "Ramen Noodle Soup",
      cuisine: "Asian",
      image: ramenImage,
      likes: 1234,
      description: "Traditional Japanese noodle soup with rich broth"
    },
    {
      id: 2,
      name: "Greek Salad",
      cuisine: "Mediterranean",
      image: greekSaladImage,
      likes: 890,
      description: "Fresh and healthy Mediterranean salad"
    },
    {
      id: 3,
      name: "Tacos al Pastor",
      cuisine: "Latin",
      image: tacosImage,
      likes: 756,
      description: "Mexican street tacos with marinated pork"
    }
  ];

  return (
    <div className="trending-section">
      <h2>Trending Recipes</h2>
      <div className="trending-grid">
        {trendingDishes.map(dish => (
          <div key={dish.id} className="trending-card">
            <img src={dish.image} alt={dish.name} />
            <div className="trending-info">
              <h3>{dish.name}</h3>
              <p className="cuisine-tag">{dish.cuisine}</p>
              <p>{dish.description}</p>
              <div className="likes">
                <i className="bi bi-heart-fill"></i>
                <span>{dish.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CulturalSpotlight = () => {
  const culturalStories = [
    {
      id: 1,
      title: "The Art of Japanese Ramen",
      image: ramenImage,
      description: "Discover how ramen evolved from Chinese noodles to become a Japanese cultural icon.",
      readTime: "5 min read",
      videoUrl: "https://www.youtube.com/embed/watch?v=JyZjoJcvHvE",
      hasVideo: true
    },
    {
      id: 2,
      title: "Mediterranean Diet Traditions",
      image: mediterraneanFood,
      description: "Explore the centuries-old traditions behind the Mediterranean diet.",
      readTime: "4 min read",
      videoUrl: undefined,
      hasVideo: false
    },
    {
      id: 3,
      title: "Mexican Street Food Culture",
      image: tacosImage,
      description: "Learn about the vibrant street food culture in Mexico.",
      readTime: "6 min read",
      videoUrl: "https://www.youtube.com/embed/watch?v=6QQ67F8y2b8",
      hasVideo: true
    }
  ];

  return (
    <div className="cultural-spotlight">
      <h2>Cultural Spotlight</h2>
      <div className="stories-grid">
        {culturalStories.map(story => (
          <div key={story.id} className="story-card">
            {story.hasVideo ? (
              <div className="video-container">
                <iframe
                  width="100%"
                  height="200"
                  src={story.videoUrl}
                  title={story.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="video-placeholder">
                <img src={story.image} alt={story.title} />
                <div className="play-overlay">
                  <i className="bi bi-play-circle"></i>
                  <span>Video Coming Soon</span>
                </div>
              </div>
            )}
            <div className="story-content">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <div className="story-footer">
                <span className="read-time">{story.readTime}</span>
                {story.hasVideo && (
                  <span className="video-badge">
                    <i className="bi bi-camera-video"></i> Watch Story
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Community = () => {
  const communityPosts = [
    {
      id: 1,
      user: "FoodieExplorer",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Just made my first homemade ramen! The broth took 12 hours but it was worth it!",
      likes: 45,
      comments: 12,
      image: ramenImage
    },
    {
      id: 2,
      user: "MediterraneanChef",
      avatar: "https://i.pravatar.cc/150?img=2",
      content: "Sharing my family's secret Greek salad recipe. The key is in the olive oil!",
      likes: 78,
      comments: 23,
      image: greekSaladImage
    },
    {
      id: 3,
      user: "TacoMaster",
      avatar: "https://i.pravatar.cc/150?img=3",
      content: "Perfecting my al pastor recipe. The pineapple makes all the difference!",
      likes: 92,
      comments: 31,
      image: tacosImage
    }
  ];

  return (
    <div className="community-section">
      <h2>Community Feed</h2>
      <div className="post-form">
        <textarea placeholder="Share your cooking journey..."></textarea>
        <button className="post-button">Post</button>
      </div>
      <div className="posts-grid">
        {communityPosts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.avatar} alt={post.user} className="user-avatar" />
              <span className="username">{post.user}</span>
            </div>
            <p className="post-content">{post.content}</p>
            <img src={post.image} alt="Post content" className="post-image" />
            <div className="post-actions">
              <button className="action-button">
                <i className="bi bi-heart"></i>
                <span>{post.likes}</span>
              </button>
              <button className="action-button">
                <i className="bi bi-chat"></i>
                <span>{post.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SignIn = () => {
  return (
    <div className="signin-section">
      <div className="signin-container">
        <h2>Welcome Back</h2>
        <form className="signin-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
          <div className="social-signin">
            <p>Or sign in with</p>
            <div className="social-buttons">
              <button className="social-button google">
                <i className="bi bi-google"></i>
                Google
              </button>
              <button className="social-button facebook">
                <i className="bi bi-facebook"></i>
                Facebook
              </button>
            </div>
          </div>
          <p className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

// Add new components for the icon navigation
const Favorites = () => {
  const favoriteRecipes = [
    {
      id: 1,
      name: "Ramen Noodle Soup",
      cuisine: "Asian",
      image: ramenImage,
      description: "Traditional Japanese noodle soup with rich broth"
    },
    {
      id: 2,
      name: "Greek Salad",
      cuisine: "Mediterranean",
      image: greekSaladImage,
      description: "Fresh and healthy Mediterranean salad"
    }
  ];

  return (
    <div className="favorites-section">
      <h2>My Favorite Recipes</h2>
      <div className="favorites-grid">
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="favorite-card">
            <img src={recipe.image} alt={recipe.name} />
            <div className="favorite-info">
              <h3>{recipe.name}</h3>
              <p className="cuisine-tag">{recipe.cuisine}</p>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    const results = Object.values(cuisineDishes)
      .flat()
      .filter(dish => 
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    setSearchResults(results);
  };

  return (
    <div className="search-page">
      <h2>Search Recipes</h2>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>

      {searchResults.length > 0 ? (
        <div className="search-results">
          {searchResults.map(dish => (
            <div key={dish.id} className="search-result-card">
              <img src={dish.image} alt={dish.name} />
              <div className="result-info">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        <p className="no-results">No recipes found matching your search.</p>
      ) : null}
    </div>
  );
};

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src="https://i.pravatar.cc/150?img=1" alt="User Avatar" className="profile-avatar" />
        <h2>John Doe</h2>
        <p>Food Enthusiast</p>
      </div>
      
      <div className="profile-stats">
        <div className="stat-item">
          <i className="bi bi-heart"></i>
          <span>12 Favorites</span>
        </div>
        <div className="stat-item">
          <i className="bi bi-bookmark"></i>
          <span>8 Saved Recipes</span>
        </div>
        <div className="stat-item">
          <i className="bi bi-star"></i>
          <span>5 Reviews</span>
        </div>
      </div>

      <div className="profile-sections">
        <div className="profile-section">
          <h3>My Recipes</h3>
          <div className="user-recipes">
            {/* Add user's recipes here */}
          </div>
        </div>
        
        <div className="profile-section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <i className="bi bi-heart-fill"></i>
              <span>Liked Ramen Noodle Soup</span>
              <small>2 hours ago</small>
            </div>
            <div className="activity-item">
              <i className="bi bi-bookmark-fill"></i>
              <span>Saved Greek Salad</span>
              <small>1 day ago</small>
            </div>
            <div className="activity-item">
              <i className="bi bi-star-fill"></i>
              <span>Reviewed Tacos al Pastor</span>
              <small>3 days ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  // Add Bootstrap Icons in head
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css';
    document.head.appendChild(link);

    // Add Google Fonts
    const fontsLink = document.createElement('link');
    fontsLink.rel = 'stylesheet';
    fontsLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap';
    document.head.appendChild(fontsLink);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(fontsLink);
    };
  }, []);

  // State for Hello World animation
  const [showHelloWorld, setShowHelloWorld] = useState(true);
  const [helloWorldText, setHelloWorldText] = useState("");
  
  // State for main content animation
  const [displayText, setDisplayText] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  
  // Add new state for navigation
  const [selectedDish, setSelectedDish] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showQuickStart, setShowQuickStart] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  // Add new state for banner visibility
  const [showBanner, setShowBanner] = useState(true);

  const helloWorldFullText = "Hello, World! 🌎 Welcome to SavorSync!";
  const mainFullText = "Connecting the World One Dish at a Time";

  // Function to handle cuisine card clicks
  const handleCuisineClick = (cuisine: string) => {
    setSelectedCuisine(cuisine);
  };

  // Function to handle dish selection
  const handleDishClick = (dish: any) => {
    setSelectedDish(dish);
  };

  // Hello World animation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setHelloWorldText(helloWorldFullText.slice(0, index));
      index++;
      if (index > helloWorldFullText.length) {
        clearInterval(interval);
        // After Hello World animation completes, wait 2 seconds and transition
        setTimeout(() => {
          setShowHelloWorld(false);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Main content animation effect
  useEffect(() => {
    if (!showHelloWorld) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(mainFullText.slice(0, index));
        index++;
        if (index > mainFullText.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [showHelloWorld]);

  // Cuisine Overview Component
  const CuisineOverview = ({ cuisine }: { cuisine: string }) => {
    const [filteredDishes, setFilteredDishes] = useState(
      cuisineDishes[cuisine.toLowerCase() as keyof typeof cuisineDishes] || []
    );

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value.toLowerCase();
      setSearchQuery(query);
      
      const filtered = cuisineDishes[cuisine.toLowerCase() as keyof typeof cuisineDishes]?.filter(dish =>
        dish.name.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query) ||
        dish.tags.some(tag => tag.toLowerCase().includes(query))
      );
      
      setFilteredDishes(filtered || []);
    };

    return (
      <div className="cuisine-overview">
        <button className="back-button" onClick={() => setSelectedCuisine(null)}>
          <i className="bi bi-arrow-left"></i> Back to Cuisines
        </button>
        
        <div className="cuisine-header">
          <h2>{cuisine} Cuisine</h2>
          <p>Discover traditional {cuisine} dishes and their cultural significance</p>
        </div>

        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search dishes..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="dishes-grid">
          {filteredDishes.map(dish => (
            <div key={dish.id} className="dish-card" onClick={() => handleDishClick(dish)}>
              <img src={dish.image} alt={dish.name} />
              <div className="dish-info">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <div className="dish-tags">
                  {dish.tags.map((tag, index) => (
                    <span key={index} className="dish-tag">{tag}</span>
                  ))}
                </div>
                {dish.videoUrl && (
                  <div className="video-indicator">
                    <i className="bi bi-play-circle"></i> Watch Recipe
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Enhanced Recipe View Component
  const RecipeView = ({ cuisine, recipe }: { cuisine: string; recipe: Recipe }) => {
    const [viewMode, setViewMode] = useState<ViewMode>('minimalist');
    const [showCulturalTip, setShowCulturalTip] = useState(false);
    const [currentTip, setCurrentTip] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
    const [currentStep, setCurrentStep] = useState<number>(0);

    // Function to handle ingredient checkbox
    const handleIngredientCheck = (index: number) => {
      const newChecked = new Set(checkedIngredients);
      if (newChecked.has(index)) {
        newChecked.delete(index);
      } else {
        newChecked.add(index);
      }
      setCheckedIngredients(newChecked);
    };

    // Function to handle step navigation
    const handleStepNavigation = (step: number) => {
      setCurrentStep(step);
    };

    // Function to get AI-powered cooking tips
    const getAITip = async () => {
      try {
        setIsLoading(true);
        const prompt = `Give me a cultural insight about ${recipe.name} from ${cuisine} cuisine. Include historical context and cultural significance.`;
        
        const response = await fetch(OPENAI_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: "You are a culinary cultural expert. Provide engaging, concise insights about food traditions and history."
              },
              {
                role: "user",
                content: prompt
              }
            ],
            max_tokens: 150
          })
        });

        const data = await response.json();
        const tip = data.choices[0].message.content;
        setCurrentTip(tip);
        setShowCulturalTip(true);
      } catch (error) {
        console.error('Error fetching AI tip:', error);
        setCurrentTip("Sorry, couldn't fetch the cultural insight at this moment.");
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="recipe-view">
        <button className="back-button" onClick={() => setSelectedDish(null)}>
          <i className="bi bi-arrow-left"></i> Back
        </button>

        {/* Video Section */}
        {recipe.videoUrl && (
          <div className="recipe-video">
            <iframe
              width="100%"
              height="400"
              src={recipe.videoUrl}
              title={recipe.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* View Mode Selector */}
        <div className="view-mode-selector">
          <button 
            className={`mode-button ${viewMode === 'minimalist' ? 'active' : ''}`}
            onClick={() => setViewMode('minimalist')}
          >
            Recipe Only
          </button>
          <button 
            className={`mode-button ${viewMode === 'story' ? 'active' : ''}`}
            onClick={() => setViewMode('story')}
          >
            Cultural Story
          </button>
          <button 
            className={`mode-button ${viewMode === 'health' ? 'active' : ''}`}
            onClick={() => setViewMode('health')}
          >
            Health-Conscious
          </button>
          <button 
            className={`mode-button ${viewMode === 'authentic' ? 'active' : ''}`}
            onClick={() => setViewMode('authentic')}
          >
            Authentic
          </button>
          <button 
            className={`mode-button ${viewMode === 'accessible' ? 'active' : ''}`}
            onClick={() => setViewMode('accessible')}
          >
            Easy Substitutes
          </button>
        </div>

        <div className="recipes-grid">
          <div className="recipe-detail-card">
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>

            {/* Cultural Story Section (visible in story mode) */}
            {viewMode === 'story' && (
              <div className="cultural-context">
                <h4>Cultural Background</h4>
                <p>{recipe.culturalContext}</p>
                <button className="ai-tip-button" onClick={getAITip}>
                  <i className="bi bi-lightbulb"></i> Get Cultural Insight
                </button>
              </div>
            )}

            {/* Recipe Information */}
            <div className="recipe-info">
              <div className="ingredients-section">
                <h4>Ingredients</h4>
                <div className="ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-item">
                      <label className="checkbox-container">
                        <input
                          type="checkbox"
                          checked={checkedIngredients.has(index)}
                          onChange={() => handleIngredientCheck(index)}
                        />
                        <span className="checkmark"></span>
                        <span className={`ingredient-text ${checkedIngredients.has(index) ? 'checked' : ''}`}>
                          {ingredient}
                        </span>
                      </label>
                      {viewMode === 'health' && (
                        <span className="substitute">
                          Healthy option: {recipe.substitutions[index]?.healthyOption}
                        </span>
                      )}
                      {viewMode === 'accessible' && (
                        <span className="substitute">
                          Common substitute: {recipe.substitutions[index]?.accessibleOption}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="instructions-section">
                <h4>Instructions</h4>
                <div className="step-navigation">
                  {recipe.instructions.map((_, index) => (
                    <button
                      key={index}
                      className={`step-button ${currentStep === index ? 'active' : ''}`}
                      onClick={() => handleStepNavigation(index)}
                    >
                      Step {index + 1}
                    </button>
                  ))}
                </div>
                <div className="current-step">
                  <div className="step-content">
                    <h5>Step {currentStep + 1}</h5>
                    <p>{recipe.instructions[currentStep]}</p>
                    {viewMode === 'story' && recipe.culturalStories[currentStep] && (
                      <div className="cultural-tip">
                        <i className="bi bi-info-circle"></i>
                        <p>{recipe.culturalStories[currentStep].story}</p>
                      </div>
                    )}
                  </div>
                  <div className="step-navigation-buttons">
                    <button
                      className="nav-button"
                      onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                      disabled={currentStep === 0}
                    >
                      <i className="bi bi-arrow-left"></i> Previous
                    </button>
                    <button
                      className="nav-button"
                      onClick={() => setCurrentStep(Math.min(recipe.instructions.length - 1, currentStep + 1))}
                      disabled={currentStep === recipe.instructions.length - 1}
                    >
                      Next <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Tip Modal with Loading State */}
            {showCulturalTip && (
              <div className="cultural-tip-modal">
                <div className="modal-content">
                  <button className="close-button" onClick={() => setShowCulturalTip(false)}>×</button>
                  {isLoading ? (
                    <div className="loading-spinner">
                      <i className="bi bi-arrow-repeat"></i>
                      <p>Loading cultural insight...</p>
                    </div>
                  ) : (
                    <p>{currentTip}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      {showHelloWorld ? (
        <div className="hello-world-container">
          <h1 className="hello-world-text">{helloWorldText}</h1>
        </div>
      ) : (
        <>
          {/* Top Banner */}
          {showBanner && (
            <div className="top-banner">
              Bridging Cultures Through Food, Stories, and Experience
              <button 
                className="close-banner" 
                onClick={() => setShowBanner(false)}
              >×</button>
            </div>
          )}

          {/* Navigation */}
          <nav className="navbar">
            <div className="logo" onClick={() => {
              setSelectedCuisine(null);
              setSelectedDish(null);
              setActiveSection(null);
              setActiveIcon(null);
              setShowQuickStart(false);
            }}>SavorSync</div>
            <div className="nav-links">
              <a 
                href="#trending" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('trending');
                }}
                className={activeSection === 'trending' ? 'active' : ''}
              >
                Trending recipe
              </a>
              <a 
                href="#cultural" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('cultural');
                }}
                className={activeSection === 'cultural' ? 'active' : ''}
              >
                Cultural Spotlight
              </a>
              <a 
                href="#community" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('community');
                }}
                className={activeSection === 'community' ? 'active' : ''}
              >
                Community
              </a>
              <a 
                href="#signin" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('signin');
                }}
                className={activeSection === 'signin' ? 'active' : ''}
              >
                Signin
              </a>
            </div>
            <div className="nav-icons">
              <button 
                className={`icon-button ${activeIcon === 'favorites' ? 'active' : ''}`}
                onClick={() => setActiveIcon(activeIcon === 'favorites' ? null : 'favorites')}
              >
                <i className="bi bi-bookmark-heart"></i>
              </button>
              <button 
                className={`icon-button ${activeIcon === 'search' ? 'active' : ''}`}
                onClick={() => setActiveIcon(activeIcon === 'search' ? null : 'search')}
              >
                <i className="bi bi-search"></i>
              </button>
              <button 
                className={`icon-button ${activeIcon === 'user' ? 'active' : ''}`}
                onClick={() => setActiveIcon(activeIcon === 'user' ? null : 'user')}
              >
                <i className="bi bi-person"></i>
              </button>
            </div>
          </nav>

          {/* Main Content */}
          <main className="main-content">
            {activeIcon === 'favorites' ? (
              <Favorites />
            ) : activeIcon === 'search' ? (
              <SearchPage />
            ) : activeIcon === 'user' ? (
              <UserProfile />
            ) : activeSection === 'trending' ? (
              <TrendingRecipes />
            ) : activeSection === 'cultural' ? (
              <CulturalSpotlight />
            ) : activeSection === 'community' ? (
              <Community />
            ) : activeSection === 'signin' ? (
              <SignIn />
            ) : (
              <>
                <h1 className="main-heading">{displayText}</h1>
                <button 
                  className="start-cooking-btn"
                  onClick={() => setShowQuickStart(true)}
                >
                  <span className="play-icon">▶</span> Start Cooking
                </button>

                {/* Quick Start Modal */}
                {showQuickStart && (
                  <QuickStart 
                    onClose={() => setShowQuickStart(false)} 
                    handleCuisineClick={handleCuisineClick}
                  />
                )}

                {/* Conditional Rendering based on selection */}
                {selectedDish ? (
                  <RecipeView cuisine={selectedCuisine || ''} recipe={selectedDish.recipe} />
                ) : selectedCuisine ? (
                  <CuisineOverview cuisine={selectedCuisine} />
                ) : (
                  <div className="cuisine-categories">
                    <div className="cuisine-card" onClick={() => handleCuisineClick('Asian')}>
                      <img src={asianFood} alt="Asian Heritage" />
                      <h3>Asian Heritage</h3>
                    </div>
                    <div className="cuisine-card" onClick={() => handleCuisineClick('Mediterranean')}>
                      <img src={mediterraneanFood} alt="Mediterranean Classics" />
                      <h3>Mediterranean Classics</h3>
                    </div>
                    <div className="cuisine-card" onClick={() => handleCuisineClick('Latin')}>
                      <img src={latinFood} alt="Latin Flavors" />
                      <h3>Latin Flavors</h3>
                    </div>
                    <div className="cuisine-card" onClick={() => handleCuisineClick('American')}>
                      <img src={americanFood} alt="American Comfort" />
                      <h3>American Comfort</h3>
                    </div>
                  </div>
                )}
              </>
            )}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
