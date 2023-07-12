import { Text, View, ScrollView, StyleSheet } from "react-native";
import Poster from "../components/Poster";
import Vote from "../components/Vote";

export default function TVDetail(props) {
    const { tv } = props.route.params;
    return (
        <ScrollView style={styles.container} >
            <Poster posterPath={tv.poster_path} imageWidth={780} imageHeight={480}></Poster>
            <View>
                <Text style={styles.title}>{tv.name}</Text>
                <Vote vote_average={tv.vote_average} vote_count={tv.vote_count}></Vote>
                <Text style={styles.tvReleaseDate}>{tv.release_date}</Text>
                <Text style={styles.overview}>{tv.overview}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202328'
    },
    textBox: {
        paddingHorizontal:30,
        paddingVertical: 5
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    tvReleaseDate: {
        color: '#ccc',
        marginBottom: 10
    },
    overview: {
        color: '#fff',
        fontSize: 18
    }
})