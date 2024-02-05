import Title from '../../components/Title';
import { FC } from 'react';
import './region-information.scss';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../components/Container';

export interface IRegionInformationSection {
  title?: string;
  regionFacts: string[];
}
const RegionInformationSection: FC<IRegionInformationSection> = ({ title = 'Информация о регионе:', regionFacts }) => {
  return (
    <section className={'section-margin-top'}>
      <Container>
        <Title>{title}</Title>
      </Container>
      <Swiper slidesPerView={'auto'} freeMode={true} modules={[FreeMode]} className={'region-facts-list'}>
        {regionFacts.map((fact, index) => {
          return (
            <SwiperSlide className={'region-facts-list__item'} key={'region-fact' + index}>
              <span>0{index + 1}</span>
              <p>{fact}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default RegionInformationSection;
