import { useState } from 'react';
import WordsForm from './WordForm';
import MadLib from './MadLib';

const MadLibs = ({ words, template }) => {

  const [formSubmission, setFormSubmission] = useState(null);

  return (
    <div className="MadLibs">
      <h1>React Madlibs</h1>
      {formSubmission
        ? <MadLib
          formSubmission={formSubmission}
          template={template}
          reset={() => setFormSubmission(null)} />
        : <WordsForm
          words={words}
          setFormSubmission={setFormSubmission} />
      }
    </div>
  );
};

MadLibs.defaultProps = {
  words: ["noun", "noun2", "adjective", "color"],
  template: "Once upon a time a [adjective] [noun] lived near a [color] [noun2]"
};

export default MadLibs;