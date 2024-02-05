import Container, { IContainerPaddingProps } from '../../components/Container';
import ProminentFigureCardsSlider from '../../components/Sliders/ProminentFigureCardsSlider';
import { IProminentFigureCard } from '../../components/Cards/ProminentFigureCard';
import { FC } from 'react';
import Title from '../../components/Title';

export interface IProminentFigureSection {
  title?: string;
  items: IProminentFigureCard[];
  containerProps?: IContainerPaddingProps;
}
const ProminentFigureSection: FC<IProminentFigureSection> = ({
  title = 'Выдающиеся личности',
  items,
  containerProps,
}) => {
  return (
    <section className={'section-margin-top'}>
      <Container>
        <Title>{title}</Title>
      </Container>
      <Container {...containerProps}>
        <ProminentFigureCardsSlider items={items} />
      </Container>
    </section>
  );
};

export default ProminentFigureSection;
