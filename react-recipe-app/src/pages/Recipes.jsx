import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faTimes, faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons';
import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';
import { recipes, searchRecipes, getCategories } from '../data/recipes'; 
import { useApp } from '../context/AppContext';

export default function Recipes() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { addSearch, favorites } = useApp();
    
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const [showFilters, setShowFilters] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    
    const [filters, setFilters] = useState({
        category: searchParams.get('category') || 'All',
        difficulty: 'All',
        maxTime: null,
        sortBy: 'rating'
    });

    const categories = getCategories();
    const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
    const timeOptions = [
        { label: 'Any time', value: null },
        { label: '30 min or less', value: 30 },
        { label: '1 hour or less', value: 60 },
        { label: '2 hours or less', value: 120 }
    ];
    const sortOptions = [
        { label: 'Top Rated', value: 'rating' },
        { label: 'Quick to Make', value: 'time' },
        { label: 'Easiest First', value: 'difficulty' },
        { label: 'Newest', value: 'newest' }
    ];

    // Simulate loading
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, [searchQuery, filters, showFavoritesOnly]);

    // Filter recipes
    const filteredRecipes = useMemo(() => {
        let results = searchRecipes(searchQuery, filters);
        
        if (showFavoritesOnly) {
            results = results.filter(r => favorites.includes(r.id));
        }
        
        return results;
    }, [searchQuery, filters, showFavoritesOnly, favorites]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            addSearch(searchQuery.trim());
            setSearchParams({ search: searchQuery.trim() });
        }
    };

    const handleSearchFromTag = (term) => {
        setSearchQuery(term);
        addSearch(term);
        setSearchParams({ search: term });
    };

    const clearFilters = () => {
        setFilters({
            category: 'All',
            difficulty: 'All',
            maxTime: null,
            sortBy: 'rating'
        });
        setSearchQuery('');
        setSearchParams({});
    };

    const activeFiltersCount = [
        filters.category !== 'All',
        filters.difficulty !== 'All',
        filters.maxTime !== null,
        searchQuery.length > 0
    ].filter(Boolean).length;

    return (
        <div className="recipes-page page-enter">
            <PreviousSearches onSearchClick={handleSearchFromTag} />
            
            {/* Search and Filter Bar */}
            <div className="search-filter-bar">
                <form className="search-form" onSubmit={handleSearch}>
                    <div className="search-input-wrapper">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="Search recipes, ingredients, cuisines..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button 
                                type="button" 
                                className="clear-search"
                                onClick={() => {
                                    setSearchQuery('');
                                    setSearchParams({});
                                }}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        )}
                    </div>
                    <button type="submit" className="btn search-btn">Search</button>
                </form>

                <div className="filter-actions">
                    <button 
                        className={`filter-btn ${showFavoritesOnly ? 'active' : ''}`}
                        onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                        <span>Favorites ({favorites.length})</span>
                    </button>
                    
                    <button 
                        className={`filter-btn ${showFilters ? 'active' : ''}`}
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <FontAwesomeIcon icon={faFilter} />
                        <span>Filters</span>
                        {activeFiltersCount > 0 && (
                            <span className="filter-count">{activeFiltersCount}</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
                <div className="filters-panel animate-slideInDown">
                    <div className="filter-group">
                        <label>Category</label>
                        <div className="filter-options">
                            {categories.map(cat => (
                                <button 
                                    key={cat}
                                    className={`filter-option ${filters.category === cat ? 'active' : ''}`}
                                    onClick={() => setFilters({...filters, category: cat})}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <label>Difficulty</label>
                        <div className="filter-options">
                            {difficulties.map(diff => (
                                <button 
                                    key={diff}
                                    className={`filter-option ${filters.difficulty === diff ? 'active' : ''}`}
                                    onClick={() => setFilters({...filters, difficulty: diff})}
                                >
                                    {diff}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <label>Time</label>
                        <div className="filter-options">
                            {timeOptions.map(opt => (
                                <button 
                                    key={opt.label}
                                    className={`filter-option ${filters.maxTime === opt.value ? 'active' : ''}`}
                                    onClick={() => setFilters({...filters, maxTime: opt.value})}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <label>Sort By</label>
                        <select 
                            value={filters.sortBy}
                            onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                            className="sort-select"
                        >
                            {sortOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button className="clear-filters-btn" onClick={clearFilters}>
                        <FontAwesomeIcon icon={faTimes} />
                        Clear All Filters
                    </button>
                </div>
            )}

            {/* Results Info */}
            <div className="results-info">
                <span className="results-count">
                    {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
                </span>
                {searchQuery && (
                    <span className="search-term">
                        for "{searchQuery}"
                    </span>
                )}
            </div>

            {/* Recipe Grid */}
            {isLoading ? (
                <div className="recipes-loading">
                    <div className="loading-spinner">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                    <p>Loading recipes...</p>
                </div>
            ) : filteredRecipes.length > 0 ? (
                <div className="recipes-container stagger-children">
                    {filteredRecipes.map((recipe, index) => (
                        <RecipeCard key={recipe.id} recipe={recipe} index={index} />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <div className="no-results-icon">🍽️</div>
                    <h3>No recipes found</h3>
                    <p>Try adjusting your search or filters</p>
                    <button className="btn" onClick={clearFilters}>
                        Clear All Filters
                    </button>
                </div>
            )}
        </div>
    );
}