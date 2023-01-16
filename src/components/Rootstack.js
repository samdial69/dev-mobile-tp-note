import {createStackNavigator} from "@react-navigation/stack";
import Search from "./Search";
import Recipe from "./Recipe";
const StackNavigator = createStackNavigator();
const RootStack = () => {
    return (
        <StackNavigator.Navigator initialRouteName = "ViewSearch">
            <StackNavigator.Screen name = "ViewSearch" component = {Search} options={{ title: "Recherche"}}/>
            <StackNavigator.Screen name="ViewRecipe" component={Recipe} options={{ title: "Détails de la recette"}}/>
        </StackNavigator.Navigator>
    );
}

export default RootStack;
