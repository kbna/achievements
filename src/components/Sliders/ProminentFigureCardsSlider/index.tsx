import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './prominent-figure-cards-slider.scss';
import PersonalityCard, { EProminentFigureCardBgColor, IProminentFigureCard } from '../../Cards/ProminentFigureCard';
import { FC } from 'react';
interface IProminentFigureCardsSlider {
  items: IProminentFigureCard[];
}
const ProminentFigureCardsSlider: FC<IProminentFigureCardsSlider> = ({ items }) => {
  return (
    <>
      <Swiper slidesPerView={'auto'} freeMode={true} modules={[FreeMode]} className={'prominent-figure-cards-list'}>
        {items.map((card, index) => {
          const cardNum = index + 1;
          let bckColor;
          if (cardNum % 3 === 0) {
            bckColor = EProminentFigureCardBgColor.WHITE;
          } else if (cardNum % 2 === 0) {
            bckColor = EProminentFigureCardBgColor.GREEN;
          } else {
            bckColor = EProminentFigureCardBgColor.DARK;
          }

          return (
            <SwiperSlide className={'prominent-figure-cards-list__item'} key={'prominent-figure-card' + index}>
              <PersonalityCard {...card} key={'prominent-figure-card' + index} bckColor={bckColor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProminentFigureCardsSlider;
