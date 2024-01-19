import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { HandleSignUp } from '../../redux/Actions/actions'
import { Formik } from 'formik'
import * as yup from 'yup'
import Button from '../../components/button'


const signupSchema = yup.object().shape({
    name: yup
        .string()
        .label('name')
        .required(),
    email: yup
        .string()
        .label('email')
        .email()
        .required(),
    password: yup
        .string()
        .label('password')
        .required()
        .min(6, "Seems a bit shot...")
        .max(12, "Too long, try a shot password")
})

const Signup = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const isLoading = useSelector((state => state.auth.isSignUploading))
    const linkSignup = () => {
        navigation.navigate('login')
    }
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={signupSchema}
            onSubmit={(values) => {
                    dispatch(HandleSignUp(values.name, values.email, values.password, navigation))
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <StatusBar translucent={false} backgroundColor='white' />
                    <Text style={styles.heading}>Signup</Text>
                    <TextInput
                        style={styles.inputFields}
                        placeholder='User name'
                        onChangeText={handleChange('name')}
                        value={values.name}
                        onBlur={handleBlur('name')}
                    />
                    {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                    <TextInput
                        style={styles.inputFields}
                        placeholder='email'
                        onChangeText={handleChange('email')}
                        value={values.email}
                        onBlur={handleBlur('email')}
                    />
                    {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    <TextInput
                        style={styles.inputFields}
                        placeholder='password'
                        onChangeText={handleChange('password')}
                        value={values.password}
                        onBlur={handleBlur('password')}
                        secureTextEntry
                    />
                    {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                    
                    <Button isloading={isLoading} title={'Signup'} onPress={handleSubmit} />

                    <View style={styles.linkSignupContainer}>
                        <Text>Go to Signin page</Text>
                        <TouchableOpacity onPress={linkSignup}>
                            <Text style={[styles.linkSignup]}>Signin</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </Formik>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    inputFields: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    heading: {
        fontSize: 20,
        fontFamily: "mon-b"
    },

    linkSignupContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 15,
        marginHorizontal: 10
    },
    linkSignup: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
    },

})