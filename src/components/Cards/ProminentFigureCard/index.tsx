import './prominent-figure-card.scss';
import { FC } from 'react';

export enum EProminentFigureCardBgColor {
  DARK = 'dark',
  WHITE = 'white',
  GREEN = 'green',
}
export interface IProminentFigureCard {
  imgSrc: string;
  personFullName: string;
  years: string;
  description: string;
  bckColor?: EProminentFigureCardBgColor;
}

const ProminentFigureCard: FC<IProminentFigureCard> = ({
  imgSrc,
  personFullName,
  years,
  description,
  bckColor = EProminentFigureCardBgColor.DARK,
}) => {
  return (
    <div className={`prominent-figure-card prominent-figure-card--bg-${bckColor}`}>
      <div className={'prominent-figure-card__img-wrp'}>
        <img src={imgSrc} alt={`фото-${personFullName}`} />
      </div>
      <h5>{personFullName}</h5>
      <p>{years}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProminentFigureCard;
