import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShoppingCart, faCheck, faTrash, faPrint, 
    faShare, faPlus 
} from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../context/AppContext';
import { useState } from 'react';

export default function ShoppingList() {
    const { 
        shoppingList, 
        toggleShoppingItem, 
        removeFromShoppingList,  
        clearShoppingList,
        showToast,
        addToShoppingList
    } = useApp();

    const [newItem, setNewItem] = useState('');

    const checkedCount = shoppingList.filter(item => item.checked).length;
    const progress = shoppingList.length > 0 
        ? (checkedCount / shoppingList.length) * 100 
        : 0;

    const handleAddItem = (e) => {
        e.preventDefault();
        if (newItem.trim()) {
            addToShoppingList([{ name: newItem.trim() }]);
            setNewItem('');
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        const text = shoppingList
            .map(item => `${item.checked ? '✓' : '○'} ${item.name}`)
            .join('\n');
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Shopping List',
                    text: text
                });
            } catch (err) {
                console.log('Share cancelled');
            }
        } else {
            navigator.clipboard.writeText(text);
            showToast('Shopping list copied to clipboard!', 'success');
        }
    };

    const clearChecked = () => {
        const checkedIndices = shoppingList
            .map((item, index) => item.checked ? index : -1)
            .filter(index => index !== -1)
            .reverse();
        
        checkedIndices.forEach(index => removeFromShoppingList(index));
        showToast('Checked items removed', 'info');
    };

    return (
        <div className="shopping-list-page page-enter">
            <div className="page-header">
                <h1>
                    <FontAwesomeIcon icon={faShoppingCart} className="header-icon" />
                    Shopping List
                </h1>
                <p className="subtitle">
                    {shoppingList.length} item{shoppingList.length !== 1 ? 's' : ''} 
                    {checkedCount > 0 && ` · ${checkedCount} checked`}
                </p>
            </div>

            {shoppingList.length > 0 && (
                <div className="list-progress">
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <span className="progress-text">
                        {Math.round(progress)}% complete
                    </span>
                </div>
            )}

            {/* Add new item form */}
            <form className="add-item-form" onSubmit={handleAddItem}>
                <input 
                    type="text"
                    placeholder="Add an item..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button type="submit" className="btn">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add</span>
                </button>
            </form>

            {shoppingList.length > 0 ? (
                <>
                    <div className="list-actions">
                        <button className="action-link" onClick={handlePrint}>
                            <FontAwesomeIcon icon={faPrint} />
                            Print
                        </button>
                        <button className="action-link" onClick={handleShare}>
                            <FontAwesomeIcon icon={faShare} />
                            Share
                        </button>
                        {checkedCount > 0 && (
                            <button className="action-link" onClick={clearChecked}>
                                <FontAwesomeIcon icon={faTrash} />
                                Remove checked
                            </button>
                        )}
                        <button className="action-link danger" onClick={clearShoppingList}>
                            <FontAwesomeIcon icon={faTrash} />
                            Clear all
                        </button>
                    </div>

                    <ul className="shopping-items stagger-children">
                        {shoppingList.map((item, index) => (
                            <li 
                                key={index} 
                                className={`shopping-item ${item.checked ? 'checked' : ''}`}
                            >
                                <button 
                                    className="check-btn"
                                    onClick={() => toggleShoppingItem(index)}
                                >
                                    {item.checked && <FontAwesomeIcon icon={faCheck} />}
                                </button>
                                <span className="item-name">{item.name}</span>
                                <button 
                                    className="remove-btn"
                                    onClick={() => removeFromShoppingList(index)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div className="empty-state">
                    <div className="empty-icon">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                    <h3>Your shopping list is empty</h3>
                    <p>Add ingredients from recipes or manually add items above!</p>
                </div>
            )}
        </div>
    );
}
