import {StyleSheet,Image, Text, TouchableOpacity, View} from "react-native";

const RecipesListItem = ( {recipeData :{title,image,aggregateLikes,readyInMinutes},onClick}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <Image
                source={{uri: image}}
                style={styles.image}
            />
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text>{aggregateLikes}</Text>
                <Text style={styles.voteText}>{readyInMinutes} min</Text>
            </View>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        marginTop: 3,
    },
    image: {
        width: 120,
        height: 180,
        borderRadius: 8,
        backgroundColor:'blue',
    },
    content: {
        flex:1,
        margin:10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottomStyle: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    voteText: {
        fontSize: 14,
        alignSelf: 'center',
        fontStyle: 'italic',
    },
})

export default RecipesListItem;
