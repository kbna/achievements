import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './time-line-slider.scss';
import { FC } from 'react';
import TimeLineCard, { ITimeLineCard } from '../../Cards/ TimeLineCard';
interface ITimeLineCardsSlider {
  items: ITimeLineCard[];
}
const TimeLineCardsSlider: FC<ITimeLineCardsSlider> = ({ items }) => {
  return (
    <>
      <Swiper slidesPerView={'auto'} freeMode={true} modules={[FreeMode]} className={'time-line-cards-slider'}>
        {items.map((card, index) => (
          <SwiperSlide className={'time-line-cards-slider__item'} key={'time-line-card' + index}>
            <TimeLineCard {...card} key={'dish-card' + index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TimeLineCardsSlider;
