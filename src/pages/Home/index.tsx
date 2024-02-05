import Container from '../../components/Container';
import image from './c5c5bb8b5b79febfff4dd3b51db81ca2.png';
import RegionMap from './components/RegionMap';
import './home.scss';
import BannerSection from '../../sections/Banner';
import { useEffect } from 'react';
const HomePage = () => {
  useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.style.backgroundColor = '#FCFBF5';
    }
    return () => {
      if (main) {
        main.style.backgroundColor = '';
      }
    };
  }, []);

  return (
    <>
      <BannerSection imgSrc={image} alt={'test'} title={'знание россия'} containerProps={{ paddingTop: true }} />
      <Container paddingBottom>
        <RegionMap />
      </Container>
    </>
  );
};

export default HomePage;
