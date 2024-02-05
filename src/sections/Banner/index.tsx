import { FC } from 'react';
import './banner.scss';
import Container, { IContainerPaddingProps } from '../../components/Container';

export interface IBannerSectionProps {
  title: string;
  imgSrc: string;
  alt?: string;
  containerProps?: IContainerPaddingProps;
}
const BannerSection: FC<IBannerSectionProps> = ({ title, imgSrc, alt, containerProps }) => {
  return (
    <section>
      <Container {...containerProps}>
        <div className={'banner'}>
          <div className={'banner__img-wpr'}>
            <img src={imgSrc} alt={alt ? alt : 'Фото ' + title} />
          </div>
          <h1 className={'banner__title'}>{title}</h1>
        </div>
      </Container>
    </section>
  );
};

export default BannerSection;
