import { IoIosClose } from "react-icons/io";

const ActionCard = ({recipe, onClick, onDelete}: any ) => {
  return (
    <div className="actionCard flex flex-col w-40 border-2 border-softPink max-h-48 p-2 text-base rounded justify-between">
      <div className="overflow-hidden">
      <div className="float-right text-2xl cursor-pointer" onClick={() => onDelete(recipe)}>
        <IoIosClose />
      </div>
      <h3 className="text-center"><strong>{recipe.name}</strong></h3>
      <p>{recipe.description}</p>
      <p>{recipe.time}</p>
      </div>
      <div>
      <button onClick={onClick} className="bg-medianPink p-1 rounded hover:bg-strongPink">Receita Completa</button>
      </div>
    </div>
  );
};

export default ActionCard;
