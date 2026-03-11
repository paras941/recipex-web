import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function CookingTimer({ prepTime, cookTime, onClose }) {
    const [activeTimer, setActiveTimer] = useState('prep');
    const [timeLeft, setTimeLeft] = useState(prepTime * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [customMinutes, setCustomMinutes] = useState('');
    const audioRef = useRef(null);

    useEffect(() => {
        let interval;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isRunning) {
            setIsRunning(false);
            if (audioRef.current) {
                audioRef.current.play();
            }
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('Timer Complete!', {
                    body: `Your ${activeTimer === 'prep' ? 'prep' : 'cooking'} time is done!`,
                    icon: '/img/gallery/img_1.jpg'
                });
            }
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft, activeTimer]);

    useEffect(() => {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleTimerSwitch = (type) => {
        setActiveTimer(type);
        setTimeLeft(type === 'prep' ? prepTime * 60 : cookTime * 60);
        setIsRunning(false);
    };

    const handleReset = () => {
        setTimeLeft(activeTimer === 'prep' ? prepTime * 60 : cookTime * 60);
        setIsRunning(false);
    };

    const handleCustomTimer = (e) => {
        e.preventDefault();
        const mins = parseInt(customMinutes);
        if (mins > 0) {
            setTimeLeft(mins * 60);
            setCustomMinutes('');
            setIsRunning(false);
        }
    };

    const totalTime = activeTimer === 'prep' ? prepTime * 60 : cookTime * 60;
    const progress = totalTime > 0 ? (1 - timeLeft / totalTime) * 100 : 0;
    const circumference = 2 * Math.PI * 34;

    return (
        <div className="cooking-timer animate-fadeInUp">
            <button className="close-timer" onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="timer-layout">
                {/* Left: timer circle */}
                <div className="timer-visual">
                    <svg className="timer-circle" viewBox="0 0 76 76">
                        <circle cx="38" cy="38" r="34" fill="none" stroke="var(--background-light)" strokeWidth="5" />
                        <circle 
                            className="timer-progress" 
                            cx="38" cy="38" r="34" 
                            fill="none" 
                            stroke="var(--primary-color)" 
                            strokeWidth="5"
                            strokeDasharray={`${(progress / 100) * circumference} ${circumference}`}
                            strokeLinecap="round"
                            transform="rotate(-90 38 38)"
                        />
                    </svg>
                    <span className={`timer-time ${timeLeft < 60 ? 'warning' : ''}`}>
                        {formatTime(timeLeft)}
                    </span>
                </div>

                {/* Right: controls */}
                <div className="timer-body">
                    <div className="timer-tabs">
                        <button 
                            className={`timer-tab ${activeTimer === 'prep' ? 'active' : ''}`}
                            onClick={() => handleTimerSwitch('prep')}
                        >
                            Prep {prepTime}m
                        </button>
                        <button 
                            className={`timer-tab ${activeTimer === 'cook' ? 'active' : ''}`}
                            onClick={() => handleTimerSwitch('cook')}
                        >
                            Cook {cookTime}m
                        </button>
                    </div>

                    <div className="timer-controls">
                        <button className="timer-btn reset" onClick={handleReset}>
                            <FontAwesomeIcon icon={faRedo} />
                        </button>
                        <button 
                            className={`timer-btn main ${isRunning ? 'pause' : 'play'}`} 
                            onClick={() => setIsRunning(!isRunning)}
                        >
                            <FontAwesomeIcon icon={isRunning ? faPause : faPlay} />
                        </button>
                    </div>

                    <form className="custom-timer" onSubmit={handleCustomTimer}>
                        <input 
                            type="number" 
                            placeholder="Custom min"
                            value={customMinutes}
                            onChange={(e) => setCustomMinutes(e.target.value)}
                            min="1"
                        />
                        <button className="btn" type="submit">Set</button>
                    </form>
                </div>
            </div>

            <audio ref={audioRef} preload="auto">
                <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleAgAUYz" type="audio/wav" />
            </audio>
        </div>
    );
}
