import { Trash2 } from "react-feather";

const TodoItem = ({ todo, index, ...props }) => {
  return (
    <li className="px-6 py-4 bg-gray-200 rounded-md my-4 w-full flex justify-between items-center">
      {todo.value}
      <button {...props} className="bg-red-500 rounded-md p-2">
        <Trash2 className="text-slate-100" />
      </button>
    </li>
  );
};

export default TodoItem;
