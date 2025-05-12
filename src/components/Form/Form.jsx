import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { nanoid } from 'nanoid';
// import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements['search'].value;
    if (!inputValue.trim()) return;
    onSubmit({
      text: event.target.elements.search.value,
      id: nanoid(),
    });
    event.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

// It example for Form with controle
// const Form = ({ onSubmit }) => {
//   const [value, setValue] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();
//     if(!value.trim) return;
//     onSubmit(value);
//     setValue('');
//   };
//   const handleChange = event => {
//     setValue(event.target.value);
//   };

//   return (
//     <form className={style.form} onSubmit={handleSubmit}>
//       <button className={style.button} type="submit">
//         <FiSearch size="16px" />
//       </button>

//       <input
//         className={style.input}
//         placeholder="What do you want to write?"
//         name="search"
//         required
//         autoFocus
//         value={value}
//         onChange={handleChange}
//       />
//     </form>
//   );
// };

export default Form;
