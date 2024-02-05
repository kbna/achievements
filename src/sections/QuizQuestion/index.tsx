import React, { FC } from 'react';
import Container, { IContainerPaddingProps } from '../../components/Container';
import QuizQuestion, { IQuizQuestionProps } from '../../components/QuizQuestion';
import Title from '../../components/Title';

export interface IQuizQuestionSection {
  title?: string;
  quizProps: IQuizQuestionProps;
  containerProps?: IContainerPaddingProps;
}

const QuizQuestionSection: FC<IQuizQuestionSection> = ({ title, quizProps, containerProps }) => {
  return (
    <section className={'section-margin-top'}>
      <Container {...containerProps}>
        {title && <Title>{title}</Title>}
        <QuizQuestion {...quizProps} />
      </Container>
    </section>
  );
};

export default QuizQuestionSection;
