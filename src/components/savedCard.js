import React from 'react';

const SavedCard = ({card}) => {
    var cardImageClass = card.type === 'visa'
        ? 'visa'
        : 'mastercard';
    return (
        <div>
            <div>CitiBank</div>
            <div>{card.number}</div>
            <div>CitiBank Credit Card</div>
            <div>
                <span>{card.name}</span>
                <div className={cardImageClass}></div>
            </div>
        </div>
    );
}

export default SavedCard;
