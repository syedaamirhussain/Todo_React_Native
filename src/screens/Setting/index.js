import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { signout } from '../../redux/Actions/actions';


const SettingsScreen = () => {

    const navigation = useNavigation();
    const auth = useSelector(state=>state.auth)
    // console.log("This is whole info",auth)
    const handleLogout = () =>{
        signout
        navigation.replace('login')
    }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.avatarContainer}>
        </View>
        <View>
          <Text style={styles.username}>{auth.user.name}</Text>
          <Text style={styles.email}>{auth.user.email}</Text>
        </View>
      </View>

      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingOption} onPress={() => console.log('Account')}>
          <Text>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption} onPress={() => console.log('Notifications')}>
          <Text>Notifications</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,

  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightblue',
    marginRight: 15,
    // Add styling for the avatar container
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  settingsContainer: {
    marginBottom: 20,
  },
  settingOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  logoutButton: {
    backgroundColor: '#F9ED32',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SettingsScreen;
