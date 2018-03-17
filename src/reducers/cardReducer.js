function CardReducer(state = [], action) {
    switch (action.type) {
        case 'NEW_CARD':
        console.log(action.card);
            return [
                ...state,
                Object.assign({}, action.card)
            ];
            break;

        case 'EDIT_CARD':
            return [
                ...state.filter(card => card.number != action.card.number),
                Object.assign({}, action.card)
            ];
        default:
            return state;
    }
}

export default CardReducer;
