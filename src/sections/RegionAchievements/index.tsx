import Container, { IContainerPaddingProps } from '../../components/Container';
import { FC } from 'react';
import Title from '../../components/Title';
import './region-achievements.scss';
interface IRegionAchievement {
  text: string;
  imgSrc?: string;
  alt?: string;
}
export interface IRegionAchievementsSection {
  title?: string;
  items: IRegionAchievement[];
  containerProps?: IContainerPaddingProps;
}
const RegionAchievementsSection: FC<IRegionAchievementsSection> = ({
  title = 'Достижения региона ',
  items,
  containerProps,
}) => {
  const getClassNames = (posNum: number) => {
    if (posNum > 5) return '';
    const classNames = ['region-achievements__item'];

    if (posNum === 1) classNames.push('region-achievements__item--light-green');
    if (posNum === 2) classNames.push('region-achievements__item--light-blue');
    if (posNum === 3) classNames.push('region-achievements__item--dark-green');
    if (posNum === 4) classNames.push('region-achievements__item--dark-green');
    if (posNum === 5) classNames.push('region-achievements__item--light-blue');

    classNames.push(`region-achievements__item--grid-${posNum}`);

    return classNames.join(' ');
  };

  return (
    <section className={'section-margin-top'}>
      <Container {...containerProps}>
        <Title>{title}</Title>
        <div className={'region-achievements'}>
          {items.map((item, index) => (
            <div className={getClassNames(index + 1)}>
              {item.imgSrc && <img src={item.imgSrc} alt={item.alt ? item.alt : 'Фото достиженя региона'} />}
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RegionAchievementsSection;
