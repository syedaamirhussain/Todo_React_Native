import { FlatList, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DELETE_TODO } from "../../../redux/constants";
import { deleteNote } from '../../../redux/Actions/actions';



const Card = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [todo, setTodo] = useState({});
    const todos = useSelector((state) => state?.auth.notes);
    const dispatch = useDispatch();
    // const deleteUser = () => {
    //     dispatch({ type: DELETE_TODO, payload: todo.index });
    //     setModalVisible(false);
    // };
    const deleteTodo = (todoId) => {
        try {
            dispatch(deleteNote(todoId))
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setModalVisible(false)
        }
    }
    return (
        <>
            <FlatList
                data={todos} numColumns={2}
                style={{ margin: 10, }}
                contentContainerStyle={{ gap: 10, }}
                columnWrapperStyle={{ gap: 10, justifyContent: 'center' }}
                renderItem={({ item, index }) => {
                    return (
                        <>
                            <TouchableOpacity
                                onPress={() => {
                                    setTodo({ ...item, index });
                                    setModalVisible(true)
                                }} style={styles.card}>
                                <Text style={styles.cardIndex}> {index}</Text>

                                <Text style={styles.cardTitle}> {item.title}</Text>

                            </TouchableOpacity>
                        </>
                    )
                }}
            />

            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ flex: 1 }}>

                                <Text style={styles.detailTitle}>Title: {todo.title}</Text>
                                <ScrollView>
                                    <Text style={styles.detailDescription}>Description: {todo.description}</Text>
                                </ScrollView>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => deleteTodo(todo.todoId)}>
                                    <Text style={styles.textStyle}>Delete</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Close</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#14ae5c',
        borderRadius: 10,
        minHeight: 100,
        padding: 15,
        elevation: 3,
        width: '47%',
        gap: 10
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: "mon-l",

    },
    cardIndex: {
        fontSize: 20,
        textAlign: 'center',
        color: "white",
        fontFamily: "mon-l",

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        minHeight: 400,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        backgroundColor: '#F9ED32',
        borderRadius: 25,
        padding: 15,
        elevation: 2,
        alignSelf: 'flex-end',
    },
    textStyle: {
        color: 'black',
        fontFamily: "mon-r",

        textAlign: 'center',
    },
    detailTitle: {
        fontSize: 16,
        fontFamily: "mon-r",

    },
    detailDescription: {
        fontSize: 14,
        fontFamily: "mon-r",

    }
})