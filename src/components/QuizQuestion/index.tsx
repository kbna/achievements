import './quiz-question.scss';
import { FC, MouseEvent, useState } from 'react';

export interface IQuizQuestionProps {
  question: string;
  variants: string[];
  correctAnswer: string;
}

const QuizQuestion: FC<IQuizQuestionProps> = ({ question, correctAnswer, variants }) => {
  const [displayAnswer, setDisplayAnswer] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setDisplayAnswer(true);
  };

  return (
    <section className={'quiz-question'}>
      <h5>{question}</h5>
      <div className={'quiz-question__variants'}>
        {variants.map((variant, index) => {
          const className = ['quiz-question__variant'];
          if (displayAnswer && variant === correctAnswer) {
            className.push('quiz-question__variant--correct-answer');
          }
          if (displayAnswer && variant !== correctAnswer) {
            className.push('quiz-question__variant--incorrect-answer');
          }
          const letter = String.fromCharCode(1072 + index);
          return (
            <button disabled={displayAnswer} key={index} className={className.join(' ')} onClick={handleClick}>
              {`${letter}) ${variant}`}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuizQuestion;
