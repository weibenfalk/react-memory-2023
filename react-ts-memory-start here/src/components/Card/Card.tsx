import React from 'react';
// Types
import { CardType } from '../../setup';

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, callback }) => {
  return <div>Card</div>;
};

export default Card;
