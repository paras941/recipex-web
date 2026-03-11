import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar, faHeart as faHeartSolid, faFire } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import CustomImage from './CustomImage';
import { useApp } from '../context/AppContext';

export default function RecipeCard({ recipe, index = 0 }) {
    const { isFavorite, toggleFavorite } = useApp();
    const favorite = recipe.id ? isFavorite(recipe.id) : false;

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (recipe.id) {
            toggleFavorite(recipe.id);
        }
    };

    const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0);

    return (
        <Link 
            to={recipe.id ? `/recipe/${recipe.id}` : '#'}
            className="recipe-card"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="recipe-card-image">
                <CustomImage imgSrc={recipe.image} pt="65%" />
                
                {/* Favorite button */}
                <button 
                    className={`favorite-btn ${favorite ? 'active' : ''}`}
                    onClick={handleFavoriteClick}
                    aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <FontAwesomeIcon icon={favorite ? faHeartSolid : faHeartRegular} />
                </button>

                {/* Badges */}
                <div className="card-badges">
                    {recipe.difficulty && (
                        <span className={`badge ${recipe.difficulty.toLowerCase()}`}>
                            {recipe.difficulty}
                        </span>
                    )}
                </div>

                {/* Overlay with quick info */}
                <div className="card-overlay">
                    <span className="overlay-text">View Recipe</span>
                </div>
            </div>

            <div className="recipe-card-info">
                <div className="card-header">
                    <img className="author-img" src={recipe.authorImg} alt={recipe.author || ''} />
                    {recipe.rating && (
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <span>{recipe.rating}</span>
                        </div>
                    )}
                </div>

                <h3 className="recipe-title">{recipe.title}</h3>
                
                {recipe.description ? (
                    <p className="recipe-desc">{recipe.description.substring(0, 80)}...</p>
                ) : (
                    <p className="recipe-desc">A delicious recipe you'll love to make at home.</p>
                )}

                <div className="card-meta">
                    {totalTime > 0 && (
                        <span className="meta-item">
                            <FontAwesomeIcon icon={faClock} />
                            {totalTime} min
                        </span>
                    )}
                    {recipe.calories && (
                        <span className="meta-item">
                            <FontAwesomeIcon icon={faFire} />
                            {recipe.calories} cal
                        </span>
                    )}
                </div>

                {recipe.category && (
                    <span className="category-tag">{recipe.category}</span>
                )}
            </div>
        </Link>
    );
}