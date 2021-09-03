
const WordsInput = ({ word, changeWords }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    changeWords(word, value);
  };

  return (
    <div className="WordsInput">
      <input
        placeholder={word}
        onChange={handleChange} />
    </div>
  );
};

export default WordsInput;