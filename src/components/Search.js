import {getRecipes, getRecipesDefault} from "../api/recette";
import {Button, FlatList, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import RecipesListItem from "./RecipesListItem";

const Search = ({navigation}) => {
    const [name, setName] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [number, setNumber] = useState(20);
    const [isMorePage, setIsMorePage] = useState(false);

    const loadRecipesDefault = async (currentRecipes,number) => {
        const data = await getRecipesDefault(number);
        setRecipes([...currentRecipes,...data.recipes]);

    }

    const loadMoreRecipes = async (recipes) => {
             await loadRecipesDefault(recipes,number+20);
            setNumber(number+20);
    }
    const loadRecipes = async (name) => {
        const data = await getRecipes(number);
        console.log(data);
        setRecipes(data.recipes);
    }

    const navigateFilmDetails = (id) => {
        console.log(id);
        navigation.navigate('ViewRecipe',{id})
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                type="text"
                placeholder="Terme à chercher"
                onChangeText={name => setName(name)}
            />

            {/*<TouchableOpacity style={styles.btnStyle}>*/}
            {/*    <Button*/}
            {/*        title="Recherche par nom"*/}
            {/*        onPress={() => loadRecipes(name)}*/}
            {/*    />*/}
            {/*</TouchableOpacity>*/}

            <TouchableOpacity style={styles.btnStyle}>
                <Button
                    title="Recherche par default"
                    onPress={() => loadRecipes()}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <FlatList
                    style={styles.list}
                    data={recipes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) =>
                        <RecipesListItem recipeData={item}
                                         onClick={() => navigateFilmDetails(item.id)}
                        />
                    }
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
    },
    btnStyle: {
        backgroundColor: 'blue',
        color: 'white',
        marginTop: 3,
    }
});

export default Search;
