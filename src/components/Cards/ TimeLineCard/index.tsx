import { FC, ReactNode } from 'react';
import './time-line-card.scss';

export enum ETimeLineCardVariants {
  WAS = 'was',
  BECAME = 'became',
  WILL = 'will',
}
export interface ITimeLineCard {
  variant: ETimeLineCardVariants;
  description: string[];
  imgSrc: string;
}

const TimeLineCard: FC<ITimeLineCard> = ({ variant, description, imgSrc }) => {
  const timeLineDictionary = {
    [ETimeLineCardVariants.WAS]: 'Было',
    [ETimeLineCardVariants.BECAME]: 'Стало',
    [ETimeLineCardVariants.WILL]: 'Будет',
  };

  return (
    <div className={'time-line-card'}>
      <div className={`time-line-card__info time-line-card__info--${variant}`}>
        <h5>{timeLineDictionary[variant]}:</h5>
        <div className={'time-line-card__description'}>
          {description.map((paragraph, index) => (
            <p key={'time-line-card-paragraph' + index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className={'time-line-card__img-wrp'}>
        <img src={imgSrc} alt={`фото о том что ${timeLineDictionary[variant]}`} />
      </div>
    </div>
  );
};

export default TimeLineCard;
