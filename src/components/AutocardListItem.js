import React from 'react';

const AutocardListItem = card => {
  let { display_image, image_flip, name, tags } = card.details;
  return (
    <a
      href="#"
      className={`activateContextModal card-list-item list-group-item autocard ${getCardColorClass(card)}`}
      card={display_image}
      card_flip={image_flip}
      card_tags={tags}
    >
      {name}
    </a>
  );
}

export default AutocardListItem;