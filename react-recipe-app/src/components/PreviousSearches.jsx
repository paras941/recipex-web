import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes, faHistory } from "@fortawesome/free-solid-svg-icons"
import { useApp } from "../context/AppContext"

export default function PreviousSearches({ onSearchClick }) {
    const { recentSearches, clearSearchHistory } = useApp();

    if (recentSearches.length === 0) return null;

    return (
        <div className="previous-searches section animate-fadeIn">
            <div className="searches-header">
                <h2>
                    <FontAwesomeIcon icon={faHistory} />
                    Recent Searches
                </h2>
                <button 
                    className="clear-history-btn"
                    onClick={clearSearchHistory}
                    title="Clear search history"
                >
                    <FontAwesomeIcon icon={faTimes} />
                    <span>Clear</span>
                </button>
            </div>
            <div className="previous-searches-container">
                {recentSearches.map((search, index) => (
                    <button 
                        key={index} 
                        style={{ animationDelay: index * 0.05 + "s" }} 
                        className="search-item"
                        onClick={() => onSearchClick && onSearchClick(search)}
                    >
                        <FontAwesomeIcon icon={faSearch} className="search-item-icon" />
                        {search}
                    </button>
                ))}
            </div>
        </div>
    )
}