import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import { useEffect, useState } from 'react';
import EditForm from '../components/EditForm/EditForm';
const todoStart = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : todoStart;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  // функція для додавання нової туду
  const addNewTodo = inputValue => {
    setTodos(prevTodos => {
      return [...prevTodos, inputValue];
    });
  };
  // функція для видалення туду по id
  const deleteTodo = todoId => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const removeUpdate = () => setIsEditing(false);

  const editTodo = updatedText => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === currentTodo.id ? { ...todo, text: updatedText } : todo
      )
    );
    setIsEditing(false);
    setCurrentTodo({});
  };
  return (
    <>
      {/* <Text textAlign="center">There are no any todos ...</Text> */}
      {isEditing && currentTodo.id ? (
        <EditForm
          updateTodo={editTodo}
          cancelUpdate={removeUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}

      <TodoList
        startTodos={todos}
        onDeleted={deleteTodo}
        onEdit={todo => {
          setIsEditing(true);
          setCurrentTodo(todo);
        }}
      />
    </>
  );
};

export default Todos;
