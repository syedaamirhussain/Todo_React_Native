import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { addDoc, doc, setDoc, getDoc, collection, getDocs, query, where, deleteDoc } from "firebase/firestore";
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Card from './component/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserNotes } from '../../redux/Actions/actions';

const Home = () => {
    const navigation = useNavigation();
    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch();
    // console.log('usser',user)
    const handlePlusBtn = () => {
        navigation.navigate('addtodo')
    }
    
    useEffect(()=>{
        dispatch(fetchUserNotes(auth.user.userId))
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Welcome ,{auth.user.email} </Text>
                <TouchableOpacity style={styles.plusBtnArea} onPress={handlePlusBtn}>
                    <Text style={styles.addIcon}>+</Text>
                </TouchableOpacity>
            </View>
            <Card />
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        justifyContent: 'space-between',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: "mon-r"
    },
    plusBtnArea: {
        // backgroundColor:'orange',
        paddingHorizontal: 8,
        paddingVertical: 3
    },
    addIcon: {
        fontSize: 40
    }

})

