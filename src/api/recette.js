import axios from "axios";

const options = {
    method: 'GET',
    params:{
        apiKey: '5477fb7ea84d4964894249a9ad3119bd',
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
