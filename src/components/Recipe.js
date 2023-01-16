import {useEffect, useState} from "react";
import {getRecipeApi} from "../api/recette";
import {Button, Image, StyleSheet, Text, View} from "react-native";

const Recipe = ({ route }) => {
    const [recipe, setRecipe] = useState(null);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        getRecipe();
    },[]);

    const getRecipe = async () => {
        const data = await getRecipeApi(route.params.id);
        console.log(data.title);
        setRecipe(data);
        setIsPressed(true);

    }

    const getIngredients = () => {
        let ingredients = [];
        if (recipe.extendedIngredients) {
            recipe.extendedIngredients.forEach((ingredient,index) => {
                ingredients.push(
                    <Text key={index}>{ingredient.originalName}</Text>
                );
            })
        }
        return ingredients;
    }

    return (
        <View style={styles.container}>
            {isPressed ? (
                <View>
                    <Image style={{ width:500,height:200}} source={{uri: recipe.image}}/>
                    <Text>{recipe.title}</Text>
                    <Text>{recipe.readyInMinutes}</Text>
                    {getIngredients()}
                    <Text>{recipe.instructions}</Text>
                </View>) : (
                <Text>Chargement...</Text>)
            }
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Recipe;
