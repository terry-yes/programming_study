const React = require('react');
const { useState, useRef} = React;

const WordRelay = () => {
  const [word, setWord] = useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      // value('');
      setValue(''); //TODO 이거 위아래 둘다 되네?
    } else {
      setResult('땡');
      setValue('');
    }
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit = {onSubmitForm}>
        <input ref={inputRef} type="text" value={value} onChange = {onChangeInput} />
        <input type="submit" value="입력"/>
        <div>{result}</div>
      </form>
    </>
  )
}

module.exports = WordRelay;