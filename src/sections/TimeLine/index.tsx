import './time-line.scss';
import TimeLineCardsSlider from '../../components/Sliders/TimeLineCardsSlider';
import { ITimeLineCard } from '../../components/Cards/ TimeLineCard';
import { FC, useState } from 'react';
import Container from '../../components/Container';

export interface ITimeLineSectionButtons {
  key: string;
  name: string;
}
export interface ITimeLineSection {
  buttons: ITimeLineSectionButtons[];
  items: Record<string, ITimeLineCard[]>;
}
const TimeLineSection: FC<ITimeLineSection> = ({ buttons, items }) => {
  const [selectedKey, setSelectedKey] = useState(buttons[0].key);

  return (
    <section className={'time-line-section section-margin-top'}>
      <Container>
        <div className={'time-line-section__buttons'}>
          {buttons.map(button => (
            <button
              key={button.key}
              className={`time-line-section__button ${selectedKey === button.key ? 'time-line-section__button--active' : ''}`}
              onClick={() => setSelectedKey(button.key)}
            >
              {button.name}
            </button>
          ))}
        </div>
      </Container>
      <div key={selectedKey}>
        <TimeLineCardsSlider items={items[selectedKey]} />
      </div>
    </section>
  );
};

export default TimeLineSection;
