import { useEffect, useState } from 'react';

export default function NutritionChart({ nutrition }) {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimated(true), 100);
    }, []);

    const nutrients = [
        { name: 'Protein', value: nutrition.protein, unit: 'g', color: '#4CAF50', daily: 50 },
        { name: 'Carbs', value: nutrition.carbs, unit: 'g', color: '#2196F3', daily: 300 },
        { name: 'Fat', value: nutrition.fat, unit: 'g', color: '#FF9800', daily: 65 },
        { name: 'Fiber', value: nutrition.fiber, unit: 'g', color: '#9C27B0', daily: 25 },
        { name: 'Sodium', value: nutrition.sodium, unit: 'mg', color: '#F44336', daily: 2300 }
    ];

    return (
        <div className="nutrition-chart">
            <div className="calories-display">
                <div className="calories-circle">
                    <svg viewBox="0 0 100 100">
                        <circle 
                            cx="50" cy="50" r="45" 
                            fill="none" 
                            stroke="var(--background-light)" 
                            strokeWidth="10"
                        />
                        <circle 
                            cx="50" cy="50" r="45" 
                            fill="none" 
                            stroke="var(--primary-color)" 
                            strokeWidth="10"
                            strokeDasharray={`${animated ? (nutrition.calories / 2000) * 283 : 0} 283`}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                            style={{ transition: 'stroke-dasharray 1s ease-out' }}
                        />
                    </svg>
                    <div className="calories-text">
                        <span className="value">{nutrition.calories}</span>
                        <span className="label">calories</span>
                    </div>
                </div>
                <p className="daily-note">Based on 2000 calorie diet</p>
            </div>

            <div className="nutrients-breakdown">
                <h4>Nutritional Breakdown</h4>
                <div className="nutrients-list">
                    {nutrients.map((nutrient, index) => (
                        <div key={nutrient.name} className="nutrient-item">
                            <div className="nutrient-header">
                                <span className="nutrient-name">{nutrient.name}</span>
                                <span className="nutrient-value">
                                    {nutrient.value}{nutrient.unit}
                                    <span className="daily-percent">
                                        ({Math.round((nutrient.value / nutrient.daily) * 100)}% DV)
                                    </span>
                                </span>
                            </div>
                            <div className="nutrient-bar">
                                <div 
                                    className="nutrient-fill"
                                    style={{ 
                                        backgroundColor: nutrient.color,
                                        width: animated ? `${Math.min((nutrient.value / nutrient.daily) * 100, 100)}%` : '0%',
                                        transitionDelay: `${index * 0.1}s`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="macro-distribution">
                <h4>Macro Distribution</h4>
                <div className="macro-chart">
                    {(() => {
                        const total = (nutrition.protein * 4) + (nutrition.carbs * 4) + (nutrition.fat * 9);
                        const proteinPercent = Math.round((nutrition.protein * 4 / total) * 100);
                        const carbsPercent = Math.round((nutrition.carbs * 4 / total) * 100);
                        const fatPercent = Math.round((nutrition.fat * 9 / total) * 100);
                        
                        return (
                            <>
                                <div className="macro-bar">
                                    <div 
                                        className="macro-segment protein" 
                                        style={{ width: animated ? `${proteinPercent}%` : '0%' }}
                                    ></div>
                                    <div 
                                        className="macro-segment carbs" 
                                        style={{ width: animated ? `${carbsPercent}%` : '0%' }}
                                    ></div>
                                    <div 
                                        className="macro-segment fat" 
                                        style={{ width: animated ? `${fatPercent}%` : '0%' }}
                                    ></div>
                                </div>
                                <div className="macro-legend">
                                    <div className="legend-item">
                                        <span className="dot protein"></span>
                                        Protein {proteinPercent}%
                                    </div>
                                    <div className="legend-item">
                                        <span className="dot carbs"></span>
                                        Carbs {carbsPercent}%
                                    </div>
                                    <div className="legend-item">
                                        <span className="dot fat"></span>
                                        Fat {fatPercent}%
                                    </div>
                                </div>
                            </>
                        );
                    })()}
                </div>
            </div>
        </div>
    );
}
