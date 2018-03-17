export function saveNewCard(card) {
  console.log(card);
    return {type: 'NEW_CARD', card:card};
}

export function saveEditedCard(card){
    return {type: 'EDIT_CARD', card:card};
}
