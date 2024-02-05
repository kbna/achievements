import React, { FC } from 'react';
import RegionInformation, { IRegionInformationSection } from '../../sections/RegionInformation';
import AttractionsMap, { IAttractionsMapSection } from '../../sections/AttractionsMap';
import TimeLine, { ITimeLineSection } from '../../sections/TimeLine';
import { IContainerPaddingProps } from '../Container';
import ProminentFigureSection, { IProminentFigureSection } from '../../sections/ProminentFigure';
import BannerSection, { IBannerSectionProps } from '../../sections/Banner';
import QuizQuestionSection, { IQuizQuestionSection } from '../../sections/QuizQuestion';
import TraditionalCuisineSection, { ITraditionalCuisineSection } from '../../sections/TraditionalCuisine';
import RegionAchievementsSection, { IRegionAchievementsSection } from '../../sections/RegionAchievements';

export enum ESectionVariant {
  BANNER = 'BANNER',
  REGION_INFORMATION = 'REGION_INFORMATION',
  ATTRACTIONS_MAP = 'ATTRACTIONS_MAP',
  TIME_LINE = 'TIME_LINE',
  PROMINENT_FIGURE = 'PROMINENT_FIGURE',
  QUIZ_QUESTION = 'QUIZ_QUESTION',
  TRADITIONAL_CUISINE = 'TRADITIONAL_CUISINE',
  REGION_ACHIEVEMENTS = 'REGION_ACHIEVEMENTS',
}

type SectionConfig<T> = T extends ESectionVariant.BANNER
  ? { section: ESectionVariant.BANNER; props: IBannerSectionProps; containerProps?: IContainerPaddingProps }
  : T extends ESectionVariant.REGION_INFORMATION
    ? {
        section: ESectionVariant.REGION_INFORMATION;
        props: IRegionInformationSection;
        containerProps?: IContainerPaddingProps;
      }
    : T extends ESectionVariant.PROMINENT_FIGURE
      ? {
          section: ESectionVariant.PROMINENT_FIGURE;
          props: IProminentFigureSection;
          containerProps?: IContainerPaddingProps;
        }
      : T extends ESectionVariant.ATTRACTIONS_MAP
        ? {
            section: ESectionVariant.ATTRACTIONS_MAP;
            props: IAttractionsMapSection;
            containerProps?: IContainerPaddingProps;
          }
        : T extends ESectionVariant.TIME_LINE
          ? { section: ESectionVariant.TIME_LINE; props: ITimeLineSection; containerProps?: IContainerPaddingProps }
          : T extends ESectionVariant.QUIZ_QUESTION
            ? {
                section: ESectionVariant.QUIZ_QUESTION;
                props: IQuizQuestionSection;
                containerProps?: IContainerPaddingProps;
              }
            : T extends ESectionVariant.TRADITIONAL_CUISINE
              ? {
                  section: ESectionVariant.TRADITIONAL_CUISINE;
                  props: ITraditionalCuisineSection;
                  containerProps?: IContainerPaddingProps;
                }
              : T extends ESectionVariant.REGION_ACHIEVEMENTS
                ? {
                    section: ESectionVariant.REGION_ACHIEVEMENTS;
                    props: IRegionAchievementsSection;
                    containerProps?: IContainerPaddingProps;
                  }
                : never;

export type SectionsConfig = SectionConfig<ESectionVariant>;

type ComponentMap = {
  [ESectionVariant.BANNER]: FC<IBannerSectionProps>;
  [ESectionVariant.PROMINENT_FIGURE]: FC<IProminentFigureSection>;
  [ESectionVariant.REGION_INFORMATION]: FC<IRegionInformationSection>;
  [ESectionVariant.ATTRACTIONS_MAP]: FC<IAttractionsMapSection>;
  [ESectionVariant.TIME_LINE]: FC<ITimeLineSection>;
  [ESectionVariant.QUIZ_QUESTION]: FC<IQuizQuestionSection>;
  [ESectionVariant.TRADITIONAL_CUISINE]: FC<ITraditionalCuisineSection>;
  [ESectionVariant.REGION_ACHIEVEMENTS]: FC<IRegionAchievementsSection>;
};

const componentMap: ComponentMap = {
  [ESectionVariant.BANNER]: BannerSection,
  [ESectionVariant.PROMINENT_FIGURE]: ProminentFigureSection,
  [ESectionVariant.REGION_INFORMATION]: RegionInformation,
  [ESectionVariant.ATTRACTIONS_MAP]: AttractionsMap,
  [ESectionVariant.TIME_LINE]: TimeLine,
  [ESectionVariant.QUIZ_QUESTION]: QuizQuestionSection,
  [ESectionVariant.TRADITIONAL_CUISINE]: TraditionalCuisineSection,
  [ESectionVariant.REGION_ACHIEVEMENTS]: RegionAchievementsSection,
};

interface IPageBuilderProps {
  sectionsConfig: SectionsConfig[];
}
const PageBuilder: FC<IPageBuilderProps> = ({ sectionsConfig }) => {
  return (
    <>
      {sectionsConfig.map((config, index) => {
        const Component = componentMap[config.section];
        if (!Component) return null;
        // @ts-ignore
        return <Component key={config.section + index} {...config.props} />;
      })}
    </>
  );
};

export default PageBuilder;
