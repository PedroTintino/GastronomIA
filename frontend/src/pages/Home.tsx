import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import ActionCard from "../components/Card";
import RecipeModal from "../components/RecipeModal";
import Recipe from "../assets/types/recipeTypes";
import Loader from "../components/Loader";

function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState<Recipe>({
    name: "",
    description: "",
    time: "",
    id: "",
    userId: "",
  });
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [listRecipes, setListRecipes] = useState<Recipe[]>([]);
// Minhas funções a serem carregas sempre
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = parseJwt(token);
        const userName = decodedToken.id.name;
        setUserName(userName);
      } catch (error) {
        console.log("Erro ao encontrar o nome!", error);
      }
    };
    fetchUserName();
  }, []);

  const handleRecipes = async () => {
    try{
      const token = localStorage.getItem("token");
      const decodedToken = parseJwt(token).id;
      const userId = decodedToken.id;
      const response = await axios.get(`http://localhost:3336/recipe/${userId}`)
      console.log(response);
      setListRecipes(response.data);

    } catch(error){
      console.error(`Erro ao carregar as receitas`, error)
    }
  }
  
// Get all recipes useEffect
  useEffect(() => {
     handleRecipes();
  }, [savedRecipes]);

  const parseJwt = (token: any) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(atob(base64));
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');

    navigate('/');
  }

  const handleActionClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSave = async () => {
    try {
      const beSaved = true;
      if (beSaved) {
        const token = localStorage.getItem("token");
        const decodedToken = parseJwt(token);
        const userId = decodedToken.id.id;
        apiResponse.userId = userId;
        console.log(apiResponse);
        const updatedApiResponse = { ...apiResponse, userId };
        console.log(updatedApiResponse);
        const response = await axios.post(
          "http://localhost:3336/recipe/save",
          {
            data: updatedApiResponse,
          }
        );
        setSavedRecipes((prevRecipes) => [...prevRecipes, updatedApiResponse]);
        handleCloseModal();
      }
    } catch (error) {
      console.error("Erro ao salvar: ", error);
    }
  };

  const handleInputSubmit = async (inputValue: String) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3336/apiResponse", {
        data: inputValue,
      });
      const responseData = JSON.parse(response.data);
      setApiResponse(responseData);
      setModalOpen(true);
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="mainContainer min-h-screen bg-white">
      <Navbar userName={userName} onLogout={handleLogOut} />
      <div className="flex flex-col p-2 text-center justify-center">
        <div className="instructionSection p-2">
          <form>
            <Input onInputSubmit={handleInputSubmit} />
          </form>
          {loading && <Loader />}
        </div>
        <div className="newRecipeSection text-xl">
          <h2>Minhas receitas</h2>
          <div className="mainContainer flex align-middle justify-center max-h-screen">
            <div className="gridContainer p-2 grid md:grid-cols-4 gap-3 sm:grid-cols-3">
            {listRecipes.map((recipe) => (
              <ActionCard
                  key={recipe.id}
                  title="Ação Importante"
                  description="Clique no botão para executar uma ação importante."
                  recipe={recipe}
                  onClick={handleActionClick}
              />
              ))}
              </div>
            </div>
          <RecipeModal
            open={isModalOpen}
            onClose={handleCloseModal}
            recipe={apiResponse}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
