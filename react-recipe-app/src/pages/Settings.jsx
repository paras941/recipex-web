import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faCog, faPalette, faFont, faPlay, faMoon, faSun, faTrash, faDownload, faUpload } from "@fortawesome/free-solid-svg-icons"
import { useApp } from "../context/AppContext"

export default function Settings(){
    const { 
        settings, 
        setSettings, 
        theme, 
        setTheme,
        favorites,
        recentSearches,
        shoppingList,
        showToast
    } = useApp();

    const themes = [
        {
            name: "light",
            label: "Light",
            icon: faSun,
            values: {
                "--background-color": "#fff",
                "--background-light": "#fff",
                "--shadow-color": "rgba(0,0,0,0.2)",
                "--text-color": "#0A0A0A",
                "--text-light": "#575757"
            }
        },
        {
            name: "dark",
            label: "Dark",
            icon: faMoon,
            values: {
                "--background-color": "rgb(29, 29, 29)",
                "--background-light": "rgb(77, 77, 77)",
                "--shadow-color": "rgba(0,0,0,0.4)",
                "--text-color": "#ffffff",
                "--text-light": "#eceaea"
            }
        }
    ];

    const primaryColors = [
        { name: "Rose", value: "rgb(255, 0, 86)" },
        { name: "Ocean", value: "rgb(33, 150, 243)" },
        { name: "Sunset", value: "rgb(255, 152, 0)" },
        { name: "Forest", value: "rgb(76, 175, 80)" },
        { name: "Lavender", value: "rgb(156, 39, 176)" },
        { name: "Cherry", value: "rgb(244, 67, 54)" }
    ];

    const fontSizes = [
        { title: "Compact", value: "14px" },
        { title: "Default", value: "16px" },
        { title: "Large", value: "18px" },
        { title: "Extra Large", value: "20px" }
    ];

    const animationSpeeds = [
        { title: "Slow", value: 2 },
        { title: "Normal", value: 1 },
        { title: "Fast", value: 0.5 },
        { title: "Instant", value: 0.1 }
    ];

    function changeTheme(themeObj) {
        setTheme(themeObj.name);
        let _settings = { ...settings };
        for (let key in themeObj.values) {
            _settings[key] = themeObj.values[key];
        }
        setSettings(_settings);
        showToast(`${themeObj.label} theme applied`, 'success');
    }

    function changeColor(color) {
        setSettings({ ...settings, "--primary-color": color.value });
        showToast(`${color.name} color applied`, 'success');
    }

    function changeFontSize(size) {
        setSettings({ ...settings, "--font-size": size.value });
    }

    function changeAnimationSpeed(speed) {
        setSettings({ ...settings, "--animation-speed": speed.value });
    }

    function exportData() {
        const data = {
            settings,
            theme,
            favorites,
            recentSearches,
            shoppingList,
            exportedAt: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'foodieshub-backup.json';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Data exported successfully!', 'success');
    }

    function clearAllData() {
        if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
            localStorage.clear();
            window.location.reload();
        }
    }

    return (
        <div className="settings-page page-enter">
            <div className="page-header">
                <h1>
                    <FontAwesomeIcon icon={faCog} className="header-icon" />
                    Settings
                </h1>
                <p className="subtitle">Customize your experience</p>
            </div>

            {/* Theme Section */}
            <div className="settings-section animate-fadeInUp">
                <div className="section-header">
                    <FontAwesomeIcon icon={faMoon} />
                    <h2>Theme</h2>
                </div>
                <div className="options-container theme-options">
                    {themes.map((t) => (
                        <div 
                            key={t.name}
                            className={`theme-option ${t.name} ${theme === t.name ? 'active' : ''}`}
                            onClick={() => changeTheme(t)}
                        >
                            <div className="theme-preview">
                                <FontAwesomeIcon icon={t.icon} />
                            </div>
                            <span className="theme-label">{t.label}</span>
                            {theme === t.name && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Color Section */}
            <div className="settings-section animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <div className="section-header">
                    <FontAwesomeIcon icon={faPalette} />
                    <h2>Accent Color</h2>
                </div>
                <div className="options-container color-options">
                    {primaryColors.map((color) => (
                        <div 
                            key={color.value}
                            className={`color-option ${settings["--primary-color"] === color.value ? 'active' : ''}`}
                            style={{ backgroundColor: color.value }}
                            onClick={() => changeColor(color)}
                            title={color.name}
                        >
                            {settings["--primary-color"] === color.value && (
                                <FontAwesomeIcon icon={faCheck} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Font Size Section */}
            <div className="settings-section animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="section-header">
                    <FontAwesomeIcon icon={faFont} />
                    <h2>Text Size</h2>
                </div>
                <div className="options-container button-options">
                    {fontSizes.map((size) => (
                        <button 
                            key={size.value}
                            className={`option-btn ${settings["--font-size"] === size.value ? 'active' : ''}`}
                            onClick={() => changeFontSize(size)}
                        >
                            {size.title}
                            {settings["--font-size"] === size.value && (
                                <FontAwesomeIcon icon={faCheck} className="check-icon" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Animation Speed Section */}
            <div className="settings-section animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <div className="section-header">
                    <FontAwesomeIcon icon={faPlay} />
                    <h2>Animation Speed</h2>
                </div>
                <div className="options-container button-options">
                    {animationSpeeds.map((speed) => (
                        <button 
                            key={speed.value}
                            className={`option-btn ${settings["--animation-speed"] === speed.value ? 'active' : ''}`}
                            onClick={() => changeAnimationSpeed(speed)}
                        >
                            {speed.title}
                            {settings["--animation-speed"] === speed.value && (
                                <FontAwesomeIcon icon={faCheck} className="check-icon" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Data Management Section */}
            <div className="settings-section animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="section-header">
                    <FontAwesomeIcon icon={faDownload} />
                    <h2>Data Management</h2>
                </div>
                <div className="data-stats">
                    <div className="stat-item">
                        <span className="stat-value">{favorites.length}</span>
                        <span className="stat-label">Favorites</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{recentSearches.length}</span>
                        <span className="stat-label">Recent Searches</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{shoppingList.length}</span>
                        <span className="stat-label">Shopping Items</span>
                    </div>
                </div>
                <div className="options-container button-options">
                    <button className="option-btn" onClick={exportData}>
                        <FontAwesomeIcon icon={faDownload} />
                        Export Data
                    </button>
                    <button className="option-btn danger" onClick={clearAllData}>
                        <FontAwesomeIcon icon={faTrash} />
                        Clear All Data
                    </button>
                </div>
            </div>
        </div>
    )
}