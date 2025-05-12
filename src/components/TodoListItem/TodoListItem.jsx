import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text';

const TodoListItem = ({ initialData, index, onDeleted, onEdit }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>
      <Text>{initialData.text}</Text>
      <button
        className={style.deleteButton}
        onClick={() => onDeleted(initialData.id)}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        onClick={() => onEdit(initialData)}
        type="button"
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
