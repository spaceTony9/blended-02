import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GridItem, Text } from '..';

export const TodoListItem = ({ todo: { text, id }, count, deletedTodo }) => {
  // return <h3>TodoListItem</h3>;
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #{count}
        </Text>
        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => {
            deletedTodo(id);
          }}
        >
          <RiDeleteBinLine size={24} />
        </button>
      </div>
    </GridItem>
  );
};
