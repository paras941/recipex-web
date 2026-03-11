import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';

const footerGallery = [
    '/img/gallery/img_1.jpg',
    '/img/gallery/img_2.jpg',
    '/img/gallery/img_3.jpg',
    '/img/gallery/img_4.jpg',
    '/img/gallery/img_5.jpg',
    '/img/gallery/img_6.jpg',
];

export default function Footer() {
    return (
        <footer className="footer">
            {/* Food Gallery Banner */}
            <div className="footer-gallery">
                {footerGallery.map((img, i) => (
                    <Link to="/recipes" key={i} className="gallery-item">
                        <img src={img} alt="Delicious food" loading="lazy" />
                        <div className="gallery-overlay">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </Link>
                ))}
            </div>

            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                F<span>oo</span>diesHub
                            </Link>
                            <p>
                                Discover delicious recipes from around the world. 
                                From quick weeknight dinners to gourmet feasts.
                            </p>
                            <div className="social-links">
                                <a href="#!" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#!" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#!" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#!" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a href="#!" aria-label="Pinterest"><FontAwesomeIcon icon={faPinterest} /></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/recipes"><FontAwesomeIcon icon={faArrowRight} /> All Recipes</Link></li>
                                <li><Link to="/favorites"><FontAwesomeIcon icon={faArrowRight} /> Favorites</Link></li>
                                <li><Link to="/shopping-list"><FontAwesomeIcon icon={faArrowRight} /> Shopping List</Link></li>
                                <li><Link to="/settings"><FontAwesomeIcon icon={faArrowRight} /> Settings</Link></li>
                            </ul>
                        </div>

                        {/* Categories */}
                        <div className="footer-section">
                            <h4>Categories</h4>
                            <ul>
                                <li><Link to="/recipes?category=Italian"><FontAwesomeIcon icon={faArrowRight} /> Italian</Link></li>
                                <li><Link to="/recipes?category=Indian"><FontAwesomeIcon icon={faArrowRight} /> Indian</Link></li>
                                <li><Link to="/recipes?category=American"><FontAwesomeIcon icon={faArrowRight} /> American</Link></li>
                                <li><Link to="/recipes?category=Dessert"><FontAwesomeIcon icon={faArrowRight} /> Desserts</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="footer-section footer-newsletter">
                            <h4>Stay Updated</h4>
                            <p>Get new recipes and cooking tips delivered to your inbox.</p>
                            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="Your email address" />
                                <button type="submit">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <div className="container">
                    <p>
                        © {new Date().getFullYear()} FoodiesHub. Made with{' '}
                        <span className="heart"><FontAwesomeIcon icon={faHeart} /></span>{' '}
                        by Paras
                    </p>
                    <div className="footer-links">
                        <a href="#!">Privacy</a>
                        <span className="divider">·</span>
                        <a href="#!">Terms</a>
                        <span className="divider">·</span>
                        <a href="#!">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}