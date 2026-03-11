import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfo, faExclamation, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ToastContainer({ toasts }) {
    const getIcon = (type) => {
        switch (type) {
            case 'success': return faCheck;
            case 'error': return faTimes;
            case 'warning': return faExclamation;
            default: return faInfo;
        }
    };

    return (
        <div className="toast-container">
            {toasts.map(toast => (
                <div key={toast.id} className={`toast toast-${toast.type}`}>
                    <div className="toast-icon">
                        <FontAwesomeIcon icon={getIcon(toast.type)} />
                    </div>
                    <span className="toast-message">{toast.message}</span>
                </div>
            ))}
        </div>
    );
}
