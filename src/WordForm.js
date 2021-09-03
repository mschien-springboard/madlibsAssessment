import { useState } from 'react';
import WordsInput from './WordsInput';

const WordsForm = ({ words, setFormSubmission }) => {
  const [wordForm, setWordForm] = useState({});

  const handleSubmit = (e) => { 
    e.preventDefault();
    setFormSubmission(wordForm);
  };

  const changeWords = (word, newWord) => {
    setWordForm(form => ({...form, [word]: newWord}));
  };

  return (
    <form className="WordsForm" onSubmit={handleSubmit}>
      {words.map((word,idx) => (
        <WordsInput 
          key={idx}
          word={word}
          submitWord={wordForm[word]}
          changeWords={changeWords} />
      ))}
      <button>Submit Words</button> 
    </form>
  );
};

export default WordsForm;

