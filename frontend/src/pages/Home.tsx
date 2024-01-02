import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import ActionCard from "../components/Card";
import RecipeModal from '../components/RecipeModal'
import Recipe from "../assets/types/recipeTypes";


function Home(){
    const [userName, setUserName] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [apiResponse, setApiResponse] = useState<Recipe>({name: '', description: '', time: '', id: '', userId:''});
    
    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const token = localStorage.getItem('token');
                const decodedToken = parseJwt(token);
                const userName = decodedToken.id.name;
                setUserName(userName);
                
            } catch (error) {
                console.log('Erro ao encontrar o nome!', error);
            }
        };

        fetchUserName();
    }, []);

    const parseJwt = (token: any) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(atob(base64));
    };

   
    const handleActionClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSave = async () => {
        try {
        const beSaved = true;
        if(beSaved){
            const token = localStorage.getItem('token');
            const decodedToken = parseJwt(token);
            const userId = decodedToken.id.id;
            apiResponse.userId = userId;
            console.log(apiResponse);
            const response = await axios.post('http://localhost:3336/recipe/save', {
                data: apiResponse
            })
            handleCloseModal();
            console.log("API response saved", response)
        }
    } catch(error){
        console.error('Erro ao salvar: ',error)
    }

    };

    const handleInputSubmit = async (inputValue: String) => {
        try {
          const response = await axios.post('http://localhost:3336/apiResponse', { data: inputValue });
          const responseData = JSON.parse(response.data);
          setApiResponse(responseData);
          setModalOpen(true)
        } catch (error) {
          console.error('Erro ao chamar a API:', error);
        }  
      };

    return(
        <div className="mainContainer min-h-screen bg-white">
            <Navbar userName={userName}/>
            <div className="flex flex-col p-2 text-center justify-center">
            <div className="instructionSection p-2">
                <form>
                    <Input onInputSubmit={handleInputSubmit}/>
                </form>
            </div>
            <div className="newRecipeSection text-xl">
                <h2>Minhas receitas</h2>
                {
                    <ActionCard 
                        title="Ação Importante"
                        description="Clique no botão para executar uma ação importante."
                        recipe={apiResponse}
                        onClick={handleActionClick}
                    />
                }
            <RecipeModal 
                open={isModalOpen} 
                onClose={handleCloseModal} 
                recipe={apiResponse}
                onSave={handleSave}/>
            </div>
            </div>
        </div>
    )
}

export default Home;