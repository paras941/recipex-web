import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faClock, faUtensils, faFire, faStar, faHeart as faHeartSolid,
    faArrowLeft, faShare, faPrint, faPlus, faMinus, faCheck,
    faUser, faChartPie, faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { getRecipeById, getSimilarRecipes } from '../data/recipes';
import { useApp } from '../context/AppContext';
import RecipeCard from '../components/RecipeCard';
import CookingTimer from '../components/CookingTimer';
import NutritionChart from '../components/NutritionChart';

export default function RecipeDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isFavorite, toggleFavorite, addToShoppingList, showToast } = useApp();
    
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [servings, setServings] = useState(4);
    const [checkedSteps, setCheckedSteps] = useState([]);
    const [showTimer, setShowTimer] = useState(false);
    const [activeTab, setActiveTab] = useState('ingredients');
    const [similarRecipes, setSimilarRecipes] = useState([]);

    useEffect(() => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            const foundRecipe = getRecipeById(id);
            if (foundRecipe) {
                setRecipe(foundRecipe);
                setServings(foundRecipe.servings);
                setSimilarRecipes(getSimilarRecipes(foundRecipe.id));
            }
            setLoading(false);
        }, 500);
        
        // Reset state when recipe changes
        setCheckedSteps([]);
        setActiveTab('ingredients');
        window.scrollTo(0, 0);
    }, [id]);

    const toggleStep = (index) => {
        setCheckedSteps(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const adjustedAmount = (originalAmount, originalServings) => {
        if (!originalAmount) return '';
        const num = parseFloat(originalAmount);
        if (isNaN(num)) return originalAmount;
        const adjusted = (num / originalServings * servings).toFixed(1);
        return adjusted.endsWith('.0') ? parseInt(adjusted) : adjusted;
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: recipe.title,
                    text: recipe.description,
                    url: window.location.href
                });
            } catch (err) {
                console.log('Share cancelled');
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            showToast('Link copied to clipboard!', 'success');
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleAddToShoppingList = () => {
        const items = recipe.ingredients.map(ing => ({
            name: `${adjustedAmount(ing.amount, recipe.servings)} ${ing.unit} ${ing.name}`,
            recipeId: recipe.id
        }));
        addToShoppingList(items);
    };

    if (loading) {
        return (
            <div className="recipe-detail-skeleton page-enter">
                <div className="skeleton-header">
                    <div className="skeleton-image shimmer"></div>
                    <div className="skeleton-info">
                        <div className="skeleton-title shimmer"></div>
                        <div className="skeleton-meta shimmer"></div>
                        <div className="skeleton-desc shimmer"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="recipe-not-found page-enter">
                <h2>Recipe not found</h2>
                <p>The recipe you're looking for doesn't exist.</p>
                <Link to="/recipes" className="btn">Browse Recipes</Link>
            </div>
        );
    }

    const progress = (checkedSteps.length / recipe.instructions.length) * 100;

    return (
        <div className="recipe-detail page-enter">
            {/* Back Button */}
            <button className="back-btn" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Back to recipes</span>
            </button>

            {/* Hero Section */}
            <div className="recipe-hero">
                <div className="recipe-image-container">
                    <img src={recipe.image} alt={recipe.title} className="recipe-main-image" />
                    <div className="image-gradient"></div>
                    <div className="recipe-badges">
                        <span className="badge difficulty">{recipe.difficulty}</span>
                        <span className="badge category">{recipe.category}</span>
                    </div>
                    {/* Floating Quick Info */}
                    <div className="floating-meta">
                        <div className="float-item">
                            <FontAwesomeIcon icon={faClock} />
                            <span>{recipe.prepTime + recipe.cookTime} min</span>
                        </div>
                        <div className="float-item">
                            <FontAwesomeIcon icon={faUtensils} />
                            <span>{recipe.servings} servings</span>
                        </div>
                        <div className="float-item">
                            <FontAwesomeIcon icon={faFire} />
                            <span>{recipe.calories} cal</span>
                        </div>
                    </div>
                </div>
                
                <div className="recipe-info-container">
                    <div className="recipe-rating">
                        {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon 
                                key={i} 
                                icon={faStar} 
                                className={i < Math.floor(recipe.rating) ? 'star filled' : 'star'}
                            />
                        ))}
                        <span className="rating-text">{recipe.rating} ({recipe.reviews} reviews)</span>
                    </div>

                    <h1 className="recipe-title">{recipe.title}</h1>
                    
                    <p className="recipe-description">{recipe.description}</p>

                    <div className="recipe-author">
                        <img src={recipe.authorImg} alt={recipe.author} />
                        <div>
                            <span className="author-label">Recipe by</span>
                            <span className="author-name">{recipe.author}</span>
                        </div>
                    </div>

                    <div className="recipe-meta">
                        <div className="meta-item">
                            <div className="meta-icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div>
                                <span className="label">Prep</span>
                                <span className="value">{recipe.prepTime}m</span>
                            </div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-icon cook">
                                <FontAwesomeIcon icon={faFire} />
                            </div>
                            <div>
                                <span className="label">Cook</span>
                                <span className="value">{recipe.cookTime}m</span>
                            </div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-icon servings">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div>
                                <span className="label">Servings</span>
                                <span className="value">{recipe.servings}</span>
                            </div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-icon calories">
                                <FontAwesomeIcon icon={faChartPie} />
                            </div>
                            <div>
                                <span className="label">Calories</span>
                                <span className="value">{recipe.calories}</span>
                            </div>
                        </div>
                    </div>

                    <div className="recipe-actions">
                        <button 
                            className={`action-btn favorite ${isFavorite(recipe.id) ? 'active' : ''}`}
                            onClick={() => toggleFavorite(recipe.id)}
                        >
                            <FontAwesomeIcon icon={isFavorite(recipe.id) ? faHeartSolid : faHeartRegular} />
                            <span>{isFavorite(recipe.id) ? 'Saved' : 'Save'}</span>
                        </button>
                        <button className="action-btn" onClick={handleShare}>
                            <FontAwesomeIcon icon={faShare} />
                            <span>Share</span>
                        </button>
                        <button className="action-btn" onClick={handlePrint}>
                            <FontAwesomeIcon icon={faPrint} />
                            <span>Print</span>
                        </button>
                        <button className={`action-btn timer-btn ${showTimer ? 'active' : ''}`} onClick={() => setShowTimer(!showTimer)}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Timer</span>
                        </button>
                    </div>

                    {/* Tags */}
                    <div className="recipe-tags">
                        {recipe.tags.map((tag, index) => (
                            <Link 
                                key={index} 
                                to={`/recipes?search=${tag}`}
                                className="tag"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cooking Timer */}
            {showTimer && (
                <CookingTimer 
                    prepTime={recipe.prepTime} 
                    cookTime={recipe.cookTime}
                    onClose={() => setShowTimer(false)}
                />
            )}

            {/* Main Content */}
            <div className="recipe-content">
                {/* Tab Navigation */}
                <div className="content-tabs">
                    <button 
                        className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ingredients')}
                    >
                        <FontAwesomeIcon icon={faUtensils} />
                        Ingredients
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'instructions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('instructions')}
                    >
                        <FontAwesomeIcon icon={faCheck} />
                        Instructions
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'nutrition' ? 'active' : ''}`}
                        onClick={() => setActiveTab('nutrition')}
                    >
                        <FontAwesomeIcon icon={faChartPie} />
                        Nutrition
                    </button>
                </div>

                {/* Ingredients Tab */}
                {activeTab === 'ingredients' && (
                    <div className="tab-content ingredients-section animate-fadeIn">
                        <div className="section-header">
                            <h3>What you'll need</h3>
                            <div className="servings-adjuster">
                                <span>Servings</span>
                                <div className="adjuster-controls">
                                    <button 
                                        onClick={() => setServings(Math.max(1, servings - 1))}
                                        disabled={servings <= 1}
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span className="servings-count">{servings}</span>
                                    <button onClick={() => setServings(servings + 1)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <ul className="ingredients-list stagger-children">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="ingredient-item">
                                    <span className="ingredient-bullet"></span>
                                    <span className="ingredient-amount">
                                        {adjustedAmount(ingredient.amount, recipe.servings)} {ingredient.unit}
                                    </span>
                                    <span className="ingredient-name">{ingredient.name}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="btn add-to-list-btn" onClick={handleAddToShoppingList}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span>Add All to Shopping List</span>
                        </button>
                    </div>
                )}

                {/* Instructions Tab */}
                {activeTab === 'instructions' && (
                    <div className="tab-content instructions-section animate-fadeIn">
                        <div className="section-header">
                            <h3>Step by step</h3>
                            <span className="step-progress">{checkedSteps.length}/{recipe.instructions.length} done</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                            <span className="progress-text">
                                {checkedSteps.length} of {recipe.instructions.length} steps completed
                            </span>
                        </div>

                        <ol className="instructions-list stagger-children">
                            {recipe.instructions.map((instruction, index) => (
                                <li 
                                    key={index} 
                                    className={`instruction-item ${checkedSteps.includes(index) ? 'completed' : ''}`}
                                    onClick={() => toggleStep(index)}
                                >
                                    <div className="step-number">
                                        {checkedSteps.includes(index) ? (
                                            <FontAwesomeIcon icon={faCheck} />
                                        ) : (
                                            index + 1
                                        )}
                                    </div>
                                    <p>{instruction}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}

                {/* Nutrition Tab */}
                {activeTab === 'nutrition' && (
                    <div className="tab-content nutrition-section animate-fadeIn">
                        <NutritionChart nutrition={recipe.nutrition} />
                    </div>
                )}
            </div>

            {/* Similar Recipes */}
            {similarRecipes.length > 0 && (
                <div className="similar-recipes">
                    <h2>You Might Also Like</h2>
                    <div className="recipes-grid stagger-children">
                        {similarRecipes.map(r => (
                            <RecipeCard key={r.id} recipe={r} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
