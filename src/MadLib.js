
const MadLib = ({template, formSubmission, reset}) => {

  const generateMadlib = () => {
    console.log(formSubmission);
    return Object.keys(formSubmission).reduce((template, key) =>
    template.replace(`[${key}]`, formSubmission[key]), template);
  };

  return (
    <div className="MadLib">
      <p>{generateMadlib()}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default MadLib;