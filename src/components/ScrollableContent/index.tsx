import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import './scrollable-content.scss';
import Title from '../Title';
import Container from '../Container';
import useWindowSize from '../../core/hooks/UseWindowSize';
import RegionMap from '../../pages/Home/components/RegionMap';

interface ScrollableContentProps {
  children?: ReactNode;
  items: ReactNode[] | ReactNode;
}

const ScrollableContent: FC<ScrollableContentProps> = ({ children, items }) => {
  const { width } = useWindowSize();
  const scrollableContentRef = useRef<HTMLDivElement>(null);
  const itemsListRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsListWidth, setItemsListWidth] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const [scrollableContentWidth, setScrollableContentWidth] = useState(0);
  const { scrollYProgress, scrollY } = useScroll({
    target: scrollableContentRef,
    // offset: ['start 0.1', 'end 0.7'],
    offset: ['start 0.2', 'end 1.75'],
  });
  const [itemsScrollRight, setItemsScrollRight] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    setItemsScrollRight((itemsListWidth - scrollableContentWidth) * latest);
  });

  useEffect(() => {
    if (itemsListRef.current) {
      setItemsListWidth(itemsListRef.current.offsetWidth);
    }
  }, [itemsListRef.current, width]);

  useEffect(() => {
    if (scrollableContentRef.current) {
      setScrollableContentWidth(scrollableContentRef.current.offsetWidth);
    }
  }, [scrollableContentRef.current, width]);

  return (
    <div ref={scrollableContentRef} className={'scrollable-content'} style={{ height: itemsListWidth }}>
      <div className={'scrollable-content__item'}>
        <Container ref={containerRef}>
          <Title>Информация о регионе:</Title>
          <div ref={itemsListRef} style={{ right: itemsScrollRight + 'px' }} className={'scrollable-content__wrp'}>
            {Array.isArray(items) ? items.map(item => item) : null}
          </div>
          {children}
        </Container>
      </div>
    </div>
  );
};

export default ScrollableContent;
