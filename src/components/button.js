import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({ title, isloading, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.Button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
            {isloading &&
                <ActivityIndicator style={{ position: "absolute", right: 20, top:10 }} />
            }
        </TouchableOpacity>
    )
}
export default Button

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#F9ED32',
        borderRadius: 5,
        marginTop: 10,
        paddingVertical: 10
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "mon-r",
        textAlign: 'center',
    },


})