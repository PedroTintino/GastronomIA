const ActionCard = ({recipe, onClick}: any ) => {
  return (
    <div className="actionCard flex flex-col w-40 border-2 border-softPink max-h-44 p-1 text-base rounded justify-between">
      <div className="overflow-hidden">
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <p>{recipe.time}</p>
      </div>
      <div>
      <button onClick={onClick} className="bg-strongPink p-1">Receita Completa</button>
      </div>
    </div>
  );
};

export default ActionCard;
