import './dish-card.scss';
import { FC } from 'react';

export enum EDishCardCardBgColor {
  WHITE = 'white',
  GREEN = 'green',
}
export interface IDishCard {
  imgSrc: string;
  dishName: string;
  description: string;
  bgColor?: EDishCardCardBgColor;
}

const DishCard: FC<IDishCard> = ({ imgSrc, dishName, description, bgColor = EDishCardCardBgColor.GREEN }) => {
  return (
    <div className={`dish-card dish-card--bg-${bgColor}`}>
      <div className={'dish-card__img-wrp'}>
        <img src={imgSrc} alt={`фото-блюда-${dishName}`} />
      </div>
      <h5>{dishName}</h5>
      <p>{description}</p>
    </div>
  );
};

export default DishCard;
