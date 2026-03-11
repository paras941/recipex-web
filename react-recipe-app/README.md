<div align="center">

# 🍽️ FoodiesHub

### A Modern Recipe Discovery Platform

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![SCSS](https://img.shields.io/badge/SCSS-Modules-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com)
[![Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com)

A production-grade recipe application featuring **12 curated recipes**, real-time search & filtering, a favorites system, shopping list manager, interactive cooking timer, animated nutrition charts, and 30+ hand-crafted CSS animations — all with zero backend dependencies.

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 🔥 Why This Project Stands Out

This isn't a tutorial follow-along. Every feature was architectured from scratch to mirror what you'd find in a **shipped product**:

- **Context-driven state** — single source of truth across 6 routes with localStorage persistence
- **Real interaction patterns** — ingredient scaling, step tracking, timer notifications, toast feedback
- **Performance-conscious** — skeleton loading, lazy image rendering, CSS-only animations (no JS animation libraries)
- **Accessible** — semantic HTML, aria-labels, keyboard-navigable, print-optimized recipe views
- **Clean architecture** — separated data layer, context layer, pages, and presentational components

---

## ✨ Features at a Glance

<table>
<tr>
<td width="50%">

### 🔍 Discovery & Search
- Real-time keyword search
- Filter by category, difficulty, cook time
- Sort by rating, time, name, calories
- Favorites-only toggle view

</td>
<td width="50%">

### 📖 Recipe Detail
- Tabbed interface (Ingredients · Instructions · Nutrition)
- Adjust servings → auto-scaled ingredient amounts
- Click steps to track cooking progress
- Share, print, and save actions

</td>
</tr>
<tr>
<td width="50%">

### ⏱️ Cooking Timer
- Compact inline SVG circular progress
- Preset prep & cook durations per recipe
- Custom minute input
- Browser push notifications on completion

</td>
<td width="50%">

### 📊 Nutrition Insights
- Animated calorie ring chart
- Nutrient breakdown bars (protein, carbs, fat, fiber, sodium)
- Macro distribution proportional bar
- Per-serving calculations

</td>
</tr>
<tr>
<td width="50%">

### ❤️ Favorites & Shopping List
- Heart toggle on any recipe card or detail page
- Dedicated favorites page with grid view
- Add all ingredients to shopping list in one click
- Checklist with clear-completed action

</td>
<td width="50%">

### 🎨 UI / UX Polish
- 30+ CSS keyframe animations
- Skeleton shimmer loading states
- Micro-interactions (hover lifts, border glow, ripple)
- Footer food photo gallery with overlay
- Toast notification system (4 variants)

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

```
Frontend         React 19.1 · React Router DOM 7 · SCSS
State            Context API + localStorage persistence
Icons            FontAwesome 7 (solid · brands · regular)
Build            Vite 7
Lint             ESLint 9
Animations       Pure CSS (30+ keyframes, zero JS libraries)
```

---

## 📁 Architecture

```
src/
├── context/
│   └── AppContext.jsx           → Global state: favorites, shopping list, settings, toasts
├── data/
│   └── recipes.js               → 12 recipes + search/filter/sort helpers
├── pages/
│   ├── Home.jsx                 → Hero · featured recipes · category grid
│   ├── Recipes.jsx              → Full catalog with filters & sorting
│   ├── RecipeDetail.jsx         → Tabbed detail view · timer · nutrition
│   ├── Favorites.jsx            → Saved recipes grid
│   ├── ShoppingList.jsx         → Ingredient checklist manager
│   └── Settings.jsx             → Preferences with live preview
├── components/
│   ├── Navbar.jsx               → Responsive nav · badges · active state
│   ├── Sidebar.jsx              → Mobile slide-out menu
│   ├── RecipeCard.jsx           → Card · favorite toggle · rating · hover
│   ├── CookingTimer.jsx         → SVG circular timer · notifications
│   ├── NutritionChart.jsx       → Animated charts & macro bar
│   ├── ToastContainer.jsx       → Notification stack
│   ├── Footer.jsx               → Photo gallery · newsletter · links
│   └── ...
├── styles/
│   ├── index.scss               → Variables · base · scrollbar · buttons
│   └── partials/
│       ├── _animations.scss     → 30+ keyframes & utility classes
│       ├── _recipe-detail.scss  → Detail page (hero, tabs, timer, nutrition)
│       ├── _components.scss     → Cards, skeletons, toasts
│       └── ...
└── App.jsx                      → Router · ScrollToTop · AppProvider
```

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/your-username/react-recipe-app.git
cd react-recipe-app

# 2. Install
npm install

# 3. Run
npm run dev          # → http://localhost:5173

# 4. Build
npm run build        # → dist/
```

---

## 📸 Pages

| Page | What's Inside |
|---|---|
| **Home** | Hero banner, featured recipe cards, browse-by-category grid |
| **Recipes** | Searchable catalog with category / difficulty / time filters, sort dropdown, favorites toggle |
| **Recipe Detail** | Hero image with floating meta pills · author card · rating · tabbed content (ingredients with servings adjuster, checkable instructions with progress bar, animated nutrition charts) · inline cooking timer · similar recipes |
| **Favorites** | Persisted grid of saved recipes with quick remove |
| **Shopping List** | All added ingredients as a checkable list with clear action |
| **Settings** | Font size, animation speed — all saved to localStorage |

---

## 🎯 Technical Highlights

| Area | Implementation |
|---|---|
| **State Management** | Single `AppContext` provider with `useReducer`-style actions, `useEffect` localStorage sync |
| **Routing** | 6 named routes, URL search params for filters, `ScrollToTop` on every navigation |
| **Data Layer** | Standalone `recipes.js` module with `getRecipeById`, `searchRecipes`, `getSimilarRecipes`, `getCategories` |
| **Animations** | CSS-only: `@keyframes` + utility classes (`animate-fadeIn`, `stagger-children`), configurable `--animation-speed` |
| **Responsive** | Mobile-first breakpoints, hamburger → sidebar, grid → stack, touch-friendly hit targets |
| **Persistence** | Favorites, shopping list, settings, and recent searches survive page refresh via `localStorage` |

---

## 📄 License

MIT — free for personal and commercial use.

---

<div align="center">

**Built by Paras** · [GitHub](https://github.com/your-username)

</div>
