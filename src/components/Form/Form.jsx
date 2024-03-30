
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css'

export const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');

  function changeText(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(text);
    setText('');
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        value={text}
        onChange={changeText}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
