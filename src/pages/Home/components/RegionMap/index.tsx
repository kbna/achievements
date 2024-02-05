import './region-map.scss';
import MapSvg from './MapSvg';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const items = [
  {
    key: 'respublic-altai',
    name: 'Республика Алтай',
    url: '/altai',
  },
  {
    key: 'altai-kray',
    name: 'Алтайский край',
    url: '/',
  },
  {
    key: 'amurskaya-oblast',
    name: 'Амурская область',
    url: '/',
  },
  {
    key: 'belgorodskaya-oblast',
    name: 'Белгородская область',
    url: '/',
  },
  {
    key: 'bryanskaya-oblast',
    name: 'Брянская область',
    url: '/',
  },
  {
    key: 'respublic-altai2',
    name: 'Республика Алтай2',
    url: '/',
  },
  {
    key: 'altai-kray2',
    name: 'Алтайский край2',
    url: '/',
  },
  {
    key: 'amurskaya-oblast2',
    name: 'Амурская область2',
    url: '/',
  },
  {
    key: 'belgorodskaya-oblast2',
    name: 'Белгородская область2',
    url: '/',
  },
  {
    key: 'bryanskaya-oblast2',
    name: 'Брянская область2',
    url: '/',
  },
];

const RegionMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>(items[0].key);
  const [selectIsVisible, setSelectIsVisible] = useState<boolean>(false);
  const selectedRegionData = items.find(el => el.key === selectedRegion);
  const selectRef = useRef<HTMLDivElement>(null);
  const handleChoiceRegion = (value: string) => {
    setSelectedRegion(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setSelectIsVisible(false);
      }
    };
    if (selectIsVisible) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [selectIsVisible]);

  return (
    <section className={'region-map'}>
      <div className={'choice-region-wrp'}>
        <div className={'choice-region'}>
          <div className={'choice-region__title'}>Выбор региона:</div>
          <div className={'choice-region__divider'} />
          <div
            className={`region-select ${selectIsVisible ? 'region-select--open-items-list' : ''}`}
            onClick={() => setSelectIsVisible(!selectIsVisible)}
            ref={selectRef}
          >
            <div className={'region-select__selected-item'}>
              {selectedRegionData?.name}
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L0.803848 0H11.1962L6 6Z" fill="#1E1E1E" />
              </svg>
            </div>
            {selectIsVisible && (
              <ul className={'region-select__items-list'}>
                {items.map(item => (
                  <li key={item.key} onClick={() => handleChoiceRegion(item.key)}>
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {selectedRegionData && !selectIsVisible && (
          <Link to={selectedRegionData?.url} className={'go-to-region-link'}>
            Перейти к региону
          </Link>
        )}
      </div>
      <div className={'region-map__wrapper'}>
        <MapSvg />
      </div>
    </section>
  );
};

export default RegionMap;
