import './attractions-map.scss';
import Container from '../../components/Container';
import Title from '../../components/Title';
import { FC, MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import useWindowSize from '../../core/hooks/UseWindowSize';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { TABLET_SIZE } from '../../core/constans';

interface ILocationMarkConfig {
  top: string;
  left: string;
  width: string;
  height: string;
}

export interface ILocationAttractionCard {
  id: string;
  title: string;
  location: string;
  description: string;
  imgSrc: string;
}

export interface IAttractionsMapSection {
  attractionsItems: ILocationAttractionCard[];
  mapSvg: ReactNode;
}

const AttractionsMapSection: FC<IAttractionsMapSection> = ({ attractionsItems, mapSvg }) => {
  const { width } = useWindowSize();
  const [selectedLocation, setSelectedLocation] = useState<string>(attractionsItems[0].id);
  const [locationMarkConfig, setLocationMarkConfig] = useState<any>();
  const attractionsMapRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();
  const slideTo = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };
  const handleClickMap = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as SVGElement;
    if (target && target.id && attractionsMapRef.current) {
      setSelectedLocation(target.id);
    }
  };

  useEffect(() => {
    getCoords();
    const slideId = attractionsItems.find(el => el.id === selectedLocation);
    if (slideId) {
      const slideIndex = attractionsItems.indexOf(slideId);
      slideTo(slideIndex);
    }
  }, [selectedLocation, width]);

  const getCoords = () => {
    if (!attractionsMapRef.current || !selectedLocation) return;
    const activeLocation = attractionsMapRef.current.querySelector(`#${selectedLocation}`) as SVGElement;
    if (!activeLocation) return;

    const rectWrp = attractionsMapRef.current.getBoundingClientRect();
    const rectLocation = activeLocation.getBoundingClientRect();

    const config: ILocationMarkConfig = {
      top: rectLocation.top - rectWrp.top - rectLocation.height / 2 + 'px',
      left: rectLocation.left - rectWrp.left - rectLocation.width / 2 + 'px',
      width: rectLocation.height * 2 + 'px',
      height: rectLocation.width * 2 + 'px',
    };

    setLocationMarkConfig(config);
  };

  return (
    <section className={'section-margin-top'}>
      <Container>
        <Title className={'attractions-map-title'}>
          карта {width && width >= TABLET_SIZE && 'достопримечательностей'}
        </Title>
        <div className={'attractions-map-wrp'}>
          <Swiper
            onSwiper={setSwiperInstance}
            slidesPerView={'auto'}
            direction={'vertical'}
            freeMode={{
              enabled: true,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.4,
              releaseOnEdges: true,
              touchMoveStopPropagation: true,
            }}
            touchReleaseOnEdges={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            scrollbar={{ draggable: true, snapOnRelease: true }}
            className={'attractions-list'}
          >
            {attractionsItems.map((card, index) => {
              const activeCard = card.id === selectedLocation;
              return (
                <>
                  <SwiperSlide className={'attraction-slide'} key={card.id + selectedLocation}>
                    <div className={'attraction-card'}>
                      <div className={'attraction-card__img-wrp'}>
                        <img src={card.imgSrc} alt={'фото достопримечательноси ' + card.title} />
                      </div>
                      <div
                        className={`attraction-card__info-wrp ${activeCard ? 'attraction-card__info-wrp--active' : ''}`}
                      >
                        <div>
                          <h5>{card.title}</h5>
                          {activeCard && <p>{card.description}</p>}
                        </div>

                        {!activeCard && <button onClick={() => setSelectedLocation(card.id)}>Читать подробнее</button>}
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>

          <div className={'attractions-map'} onClick={handleClickMap}>
            <div ref={attractionsMapRef} className={'attractions-map__wrp'}>
              {mapSvg}
              {selectedLocation && (
                <div className={'attractions-map__mark-wrp'} style={locationMarkConfig}>
                  <div className={'attractions-map__mark'}></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AttractionsMapSection;
