import { IDishCard } from '../../components/Cards/DishCard';
import Container, { IContainerPaddingProps } from '../../components/Container';
import { FC } from 'react';
import DishesCardsSlider from '../../components/Sliders/DishesCardsSlider';
import Title from '../../components/Title';

export interface ITraditionalCuisineSection {
  title?: string;
  items: IDishCard[];
  containerProps?: IContainerPaddingProps;
}

const TraditionalCuisineSection: FC<ITraditionalCuisineSection> = ({
  title = 'Традиционная кухня',
  containerProps,
  items,
}) => {
  return (
    <section className={'section-margin-top'}>
      <Container>
        <Title>{title}</Title>
      </Container>
      <Container {...containerProps}>
        <DishesCardsSlider items={items} />
      </Container>
    </section>
  );
};

export default TraditionalCuisineSection;
