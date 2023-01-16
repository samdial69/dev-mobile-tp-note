import axios from "axios";

const options = {
    method: 'GET',
    params:{
        apiKey: 'a85d7150035b43d09105844fa9c84182',
    }
}
export const getRecipes = async (number) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=${number}`, options);
        return response.data;
    }catch (error) {
        console.log(error);
    }
}



export const getRecipesDefault = async (number) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=${number}`, options);
        return response.data;
    }catch (error) {
        console.log(error);
    }
}

export const getRecipeApi = async (id) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, options);
        return response.data;
    }catch (error) {
        console.log(error);
    }
}
