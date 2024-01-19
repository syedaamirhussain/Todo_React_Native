import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO } from '../../redux/constants';
import { createNotes } from '../../redux/Actions/actions';

const AddToDo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigation = useNavigation();
    const disptach = useDispatch();
    const userId =useSelector(state=>state.auth.user.userId); 
    const backBtn = () => {
        navigation.navigate('dashboard')

    }
    const saveBtn = () => {
        disptach(createNotes(
            title, description , userId, navigation
        ))
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>AddToDo</Text>
            </View>
            <TextInput onChangeText={(e) => { setTitle(e) }}

                style={styles.titleField}
                placeholder='add title'
            />
            <TextInput onChangeText={(e) => { setDescription(e) }}
                style={styles.descriptionField}
                multiline={true}
                placeholder='add description'
            />
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={backBtn}
                >
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={saveBtn}
                >
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddToDo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        padding: 10
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: "mon-r"

    },
    titleField: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '50%',
        marginHorizontal: 10
    },
    descriptionField: {
        height: 130,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '75%',
        marginHorizontal: 10,
        textAlignVertical: 'top',
    },
    buttons: {
        flexDirection: 'row',
    },
    backBtn: {
        backgroundColor: '#F9ED32',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '30%',
        marginLeft: 10
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontFamily: "mon-r",
        textAlign: 'center'
    },
})