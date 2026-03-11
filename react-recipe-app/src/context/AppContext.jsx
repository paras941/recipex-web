import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AppContext = createContext();

// Default settings
const defaultSettings = {
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1
};

export function AppProvider({ children }) {
    // Settings state with localStorage persistence
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('app-settings');
        return saved ? JSON.parse(saved) : defaultSettings;
    });
    
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('app-theme') || 'light';
    });

    // Favorites system
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    // Recent searches
    const [recentSearches, setRecentSearches] = useState(() => {
        const saved = localStorage.getItem('recent-searches');
        return saved ? JSON.parse(saved) : ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad'];
    });

    // Toast notifications
    const [toasts, setToasts] = useState([]);

    // Shopping list
    const [shoppingList, setShoppingList] = useState(() => {
        const saved = localStorage.getItem('shopping-list');
        return saved ? JSON.parse(saved) : [];
    });

    // Apply settings to CSS variables
    useEffect(() => {
        const root = document.documentElement;
        for (let key in settings) {
            root.style.setProperty(key, settings[key]);
        }
        localStorage.setItem('app-settings', JSON.stringify(settings));
    }, [settings]);

    // Persist favorites
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    // Persist recent searches
    useEffect(() => {
        localStorage.setItem('recent-searches', JSON.stringify(recentSearches));
    }, [recentSearches]);

    // Persist shopping list
    useEffect(() => {
        localStorage.setItem('shopping-list', JSON.stringify(shoppingList));
    }, [shoppingList]);

    // Persist theme
    useEffect(() => {
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    // Toast notification system
    const showToast = useCallback((message, type = 'success', duration = 3000) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, duration);
    }, []);

    // Favorites management
    const toggleFavorite = useCallback((recipeId) => {
        setFavorites(prev => {
            const isFavorite = prev.includes(recipeId);
            if (isFavorite) {
                showToast('Removed from favorites', 'info');
                return prev.filter(id => id !== recipeId);
            } else {
                showToast('Added to favorites! ❤️', 'success');
                return [...prev, recipeId];
            }
        });
    }, [showToast]);

    const isFavorite = useCallback((recipeId) => {
        return favorites.includes(recipeId);
    }, [favorites]);

    // Search history management
    const addSearch = useCallback((term) => {
        if (!term.trim()) return;
        setRecentSearches(prev => {
            const filtered = prev.filter(s => s.toLowerCase() !== term.toLowerCase());
            return [term, ...filtered].slice(0, 10);
        });
    }, []);

    const clearSearchHistory = useCallback(() => {
        setRecentSearches([]);
        showToast('Search history cleared', 'info');
    }, [showToast]);

    // Shopping list management
    const addToShoppingList = useCallback((items) => {
        setShoppingList(prev => {
            const newItems = items.filter(item => 
                !prev.some(p => p.name.toLowerCase() === item.name.toLowerCase())
            );
            if (newItems.length > 0) {
                showToast(`Added ${newItems.length} item(s) to shopping list`, 'success');
            }
            return [...prev, ...newItems.map(item => ({ ...item, checked: false }))];
        });
    }, [showToast]);

    const toggleShoppingItem = useCallback((index) => {
        setShoppingList(prev => prev.map((item, i) => 
            i === index ? { ...item, checked: !item.checked } : item
        ));
    }, []);

    const removeFromShoppingList = useCallback((index) => {
        setShoppingList(prev => prev.filter((_, i) => i !== index));
    }, []);

    const clearShoppingList = useCallback(() => {
        setShoppingList([]);
        showToast('Shopping list cleared', 'info');
    }, [showToast]);

    const value = {
        settings,
        setSettings,
        theme,
        setTheme,
        favorites,
        toggleFavorite,
        isFavorite,
        recentSearches,
        addSearch,
        clearSearchHistory,
        toasts,
        showToast,
        shoppingList,
        addToShoppingList,
        toggleShoppingItem,
        removeFromShoppingList,
        clearShoppingList
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}
