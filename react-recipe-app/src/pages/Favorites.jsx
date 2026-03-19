import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUtensils } from '@fortawesome/free-solid-svg-icons';
import RecipeCard from '../components/RecipeCard'; 
import { recipes } from '../data/recipes';
import { useApp } from '../context/AppContext';

export default function Favorites() {
    const { favorites } = useApp();

    const favoriteRecipes = useMemo(() => {
        return recipes.filter(r => favorites.includes(r.id));
    }, [favorites]);

    return (
        <div className="favorites-page page-enter">
            <div className="page-header">
                <h1>
                    <FontAwesomeIcon icon={faHeart} className="header-icon" />
                    My Favorites
                </h1>
                <p className="subtitle">
                    {favoriteRecipes.length} saved recipe{favoriteRecipes.length !== 1 ? 's' : ''}
                </p>
            </div>

            {favoriteRecipes.length > 0 ? (
                <div className="recipes-container stagger-children">
                    {favoriteRecipes.map((recipe, index) => (
                        <RecipeCard key={recipe.id} recipe={recipe} index={index} />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <div className="empty-icon">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <h3>No favorites yet</h3>
                    <p>Start exploring recipes and save your favorites by clicking the heart icon!</p>
                    <Link to="/recipes" className="btn">
                        <FontAwesomeIcon icon={faUtensils} />
                        <span>Browse Recipes</span>
                    </Link>
                </div>
            )}
        </div>
    );
}
