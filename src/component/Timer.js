import { Text, View, StyleSheet } from "react-native"

export default function Timer({ time }) {
    const formattedTIme = `${Math.floor(time / 60)
        .toString()
        .padStart(2, "0")}:${(time % 60)
            .toString()
            .padStart(2, "0")}`


    return (
        <View style={styles.container}>
            <Text style={styles.time}>{formattedTIme}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.25,
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
        padding: 15,
        borderRadius: 15

    },

    time: {
        fontSize: 85,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#888'
    }

})