# 🍽️ FoodiesHub — React Recipe App

A feature-rich, production-quality recipe application built with **React 19**, showcasing modern frontend development practices including state management, client-side routing, persistent storage, responsive design, and polished UI/UX with 30+ custom CSS animations.

> Built to demonstrate real-world React skills — not a tutorial clone.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **Recipe Catalog** | 12 detailed recipes with ingredients, step-by-step instructions, and nutrition data |
| **Search & Filter** | Real-time search by keyword, category, difficulty, cook time, and sort order |
| **Recipe Detail View** | Full recipe page with tabbed interface (Ingredients · Instructions · Nutrition) |
| **Favorites System** | Save/unsave recipes with heart toggle — persisted to localStorage |
| **Shopping List** | Add recipe ingredients to a shopping list, check off items, clear completed |
| **Cooking Timer** | Interactive SVG circular timer with prep/cook presets, custom minutes, and browser notifications |
| **Nutrition Charts** | Animated calorie circle, nutrient progress bars, macro distribution bar |
| **Ingredient Scaling** | Adjust servings and watch ingredient amounts recalculate in real-time |
| **Step Tracking** | Click instructions to mark steps complete with progress bar |
| **Theme Persistence** | User settings (font size, animations) saved to localStorage |
| **Toast Notifications** | Success/error/info/warning toasts with auto-dismiss |
| **Scroll to Top** | Automatic scroll reset on route navigation |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19.1 (functional components + hooks) |
| **Routing** | React Router DOM 7 (6 routes, URL search params) |
| **State Management** | React Context API with localStorage sync |
| **Styling** | SCSS with CSS custom properties, partials architecture |
| **Icons** | FontAwesome 7 (solid, brands, regular) |
| **Build Tool** | Vite 7 |
| **Linting** | ESLint 9 |

---

## 📁 Project Structure

```
src/
├── App.jsx                    # Root with Router, ScrollToTop, AppProvider
├── main.jsx                   # Entry point
├── context/
│   └── AppContext.jsx          # Global state (favorites, shopping list, settings, toasts)
├── data/
│   └── recipes.js              # 12 recipes with search/filter helpers
├── pages/
│   ├── Home.jsx                # Landing with featured recipes & categories
│   ├── Recipes.jsx             # Catalog with search, filters, sorting
│   ├── RecipeDetail.jsx        # Full recipe view with tabs & timer
│   ├── Favorites.jsx           # Saved recipes grid
│   ├── ShoppingList.jsx        # Ingredient checklist manager
│   └── Settings.jsx            # Preferences with live preview
├── components/
│   ├── Navbar.jsx              # Responsive nav with badges & active state
│   ├── Sidebar.jsx             # Mobile slide-out menu
│   ├── RecipeCard.jsx          # Card with favorite toggle, rating, hover effects
│   ├── CookingTimer.jsx        # SVG circular timer with notifications
│   ├── NutritionChart.jsx      # Animated nutrition visualization
│   ├── ToastContainer.jsx      # Notification toast stack
│   ├── Footer.jsx              # Food photo gallery + newsletter + links
│   └── ...
└── styles/
    ├── index.scss              # Base styles, CSS variables, scrollbar, buttons
    └── partials/
        ├── _animations.scss     # 30+ keyframe animations & utility classes
        ├── _navbar.scss
        ├── _footer.scss
        ├── _recipe-detail.scss
        ├── _recipes-section.scss
        ├── _components.scss
        └── ...
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/react-recipe-app.git
cd react-recipe-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📸 Pages Overview

### Home
Hero section, featured recipes carousel, browse-by-category grid.

### Recipes
Full catalog with keyword search, category/difficulty/time filters, sort options, and a favorites-only toggle.

### Recipe Detail
- Hero image with floating meta badges (time, servings, calories)
- Author card, star rating, share/print/timer actions
- **Ingredients tab** — Servings adjuster with auto-scaling amounts, add-all-to-shopping-list button
- **Instructions tab** — Clickable step checkboxes with progress bar
- **Nutrition tab** — Animated calorie ring, nutrient bars, macro distribution chart
- Compact inline cooking timer with circular SVG progress
- Similar recipes section

### Favorites
Grid of saved recipes with remove toggle.

### Shopping List
Grouped ingredient checklist with clear-completed action.

### Settings
Font size, animation speed, and preference controls — all persisted.

---

## 🎨 UI / UX Highlights

- **30+ CSS animations** — fadeIn, slideIn, popIn, bounce, pulse, heartBeat, shimmer, glow, shake, float, ripple, stagger utilities
- **Skeleton loading** states with shimmer effect
- **Micro-interactions** — hover lifts, border glow, scale on click, tag hover fills
- **Footer food gallery** — 6-image grid with hover overlay
- **Responsive** across mobile, tablet, and desktop
- **Custom scrollbar** themed to brand color
- **Print-friendly** recipe detail layout

---

## 📄 License

MIT

---

*Built by **Paras** — [GitHub](https://github.com/your-username)*
