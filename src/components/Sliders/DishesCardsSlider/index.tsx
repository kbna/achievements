import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './dishes-cards-slider.scss';
import { FC } from 'react';
import DishCard, { EDishCardCardBgColor, IDishCard } from '../../Cards/DishCard';
interface IDishesCardsSlider {
  items: IDishCard[];
}
const DishesCardsSlider: FC<IDishesCardsSlider> = ({ items }) => {
  return (
    <>
      <Swiper slidesPerView={'auto'} freeMode={true} modules={[FreeMode]} className={'dishes-cards-list'}>
        {items.map((card, index) => {
          const cardNum = index + 1;
          let bgColor;
          if (cardNum % 2 === 0) {
            bgColor = EDishCardCardBgColor.WHITE;
          } else {
            bgColor = EDishCardCardBgColor.GREEN;
          }

          return (
            <SwiperSlide className={'dishes-cards-list__item'} key={'dishes-card' + index}>
              <DishCard {...card} key={'dish-card' + index} bgColor={bgColor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default DishesCardsSlider;
