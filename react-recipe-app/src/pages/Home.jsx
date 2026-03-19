import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUtensils } from '@fortawesome/free-solid-svg-icons';
import HeroSection from '../components/HeroSection';
import ImproveSkills from '../components/ImproveSkills';
import QuoteSection from '../components/QuoteSection';
import ChiefsSection from '../components/ChiefsSection';
import RecipeCard from '../components/RecipeCard';
import { getFeaturedRecipes, getCategories } from '../data/recipes';
 
export default function Home() {
    const featuredRecipes = getFeaturedRecipes();
    const categories = getCategories().filter(c => c !== 'All');

    return (
        <div className="home-page page-enter">
            <HeroSection />
            
            {/* Featured Recipes Section */}
            <section className="featured-section section">
                <div className="section-header-full">
                    <div>
                        <h2 className="title">Featured Recipes</h2>
                        <p className="info">
                            Our most popular and highly-rated recipes loved by our community
                        </p>
                    </div>
                    <Link to="/recipes" className="view-all-btn">
                        View All
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
                <div className="featured-grid stagger-children">
                    {featuredRecipes.map((recipe, index) => (
                        <RecipeCard key={recipe.id} recipe={recipe} index={index} />
                    ))}
                </div>
            </section>

            {/* Category Browsing */}
            <section className="categories-section section animate-fadeInUp">
                <h2 className="title">Explore by Category</h2>
                <p className="info">Find recipes from your favorite cuisines</p>
                <div className="categories-grid">
                    {categories.slice(0, 6).map((category, index) => (
                        <Link 
                            key={category} 
                            to={`/recipes?category=${category}`}
                            className="category-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <FontAwesomeIcon icon={faUtensils} />
                            <span>{category}</span>
                        </Link>
                    ))}
                </div>
            </section>

            <ImproveSkills />
            <QuoteSection />
            <ChiefsSection />
        </div>
    );
}